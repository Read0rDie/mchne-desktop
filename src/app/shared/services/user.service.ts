import { Injectable } from '@angular/core';
import { URLSearchParams, Http, Response, Headers, RequestOptions } from '@angular/http';

import { UserRegistration } from '../models/user.registration.interface';
import { ConfigService } from '../utils/config.service';

import {BaseService} from "./base.service";

import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/Rx'; 

// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';

@Injectable()

export class UserService extends BaseService {

  baseUrl: string = '';
  userEmail: string = '';

  // Observable Username source
  private _username : BehaviorSubject<string>;
  // Data store for ImageUrl
  private dataStore : {
    username : string
  }

  // Observable navItem source
  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  // Observable navItem stream
  authNavStatus$ = this._authNavStatusSource.asObservable();

  private loggedIn = false;
  private username = '';

  constructor(private http: Http, private configService: ConfigService) {
    super();
    this.loggedIn = !!localStorage.getItem('auth_token');
    this.username = localStorage.getItem('username');
    // ?? not sure if this the best way to broadcast the status but seems to resolve issue on page refresh where auth status is lost in
    // header component resulting in authed user nav links disappearing despite the fact user is still logged in
    this._authNavStatusSource.next(this.loggedIn);
    //this._username.next(this.username);
    this.baseUrl = configService.getApiURI();
    this.dataStore = { username : '' }
    this._username = <BehaviorSubject<string>>new BehaviorSubject('');
  }

    register(email: string, password: string, userName: string): Observable<boolean> {
        let body = JSON.stringify({ email, password, userName });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http
            .post(
                this.baseUrl + "/account/register", 
                body, 
                options
            )
            .map(res => true)
            .catch(this.handleError);
    }  

    login(email: string, password: string) {

        let body = JSON.stringify({ email, password });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        var response = this.http.post(this.baseUrl + "/account/login", body, options)                  
            .map(res => res.json())              
            .map(res => {
                localStorage.setItem('auth_token', res.auth_token);
                localStorage.setItem('email', email);
                this.loggedIn = true;                
                this._authNavStatusSource.next(true);
                return true;
            })          
            .catch(this.handleError);
        return response;
    }

  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('email');
    this.loggedIn = false;    
    this._authNavStatusSource.next(false);
  }

  setUserProfile(username: string, email: string, newEmail: string){

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let params: URLSearchParams = new URLSearchParams();
    params.set('username', username);
    params.set('email', email);
    params.set('newEmail', newEmail);
    options.search = params;    

    var response = this.http.get(this.baseUrl + "/account/edit", options)                     
        .map(res => {            
            localStorage.setItem('email', email);
            localStorage.setItem('username', username);
            this.dataStore.username = username;
            this._username.next(Object.assign('', this.dataStore).username);             
            return true;
        })          
        .catch(this.handleError);
    return response;
    
  }  

  getUserName(email: string){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let params: URLSearchParams = new URLSearchParams();    
    params.set('email', email);    
    options.search = params;
    var response = this.http.get(this.baseUrl + "/account/userdata", options)
      .subscribe(res => {
        this.dataStore.username = res.json().identity.alias;
        localStorage.setItem('username', this.dataStore.username);
        this._username.next(Object.assign('', this.dataStore).username);
      }, 
      error => console.log('Failed to fetch username'));   
          
    return response;
    
  }

  get UserName(){
    return this._username.asObservable();
  }

  get _UserName(){
    return this._username.value;
  }

  isLoggedIn() {
    return this.loggedIn;
  }  
}