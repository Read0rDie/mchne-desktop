import { Injectable } from '@angular/core';
import { URLSearchParams, Http, Response, Headers, RequestOptions } from '@angular/http';
import { Component, Input } from '@angular/core';

import { UserRegistration } from '../models/user.registration.interface';
import { ConfigService } from '../utils/config.service';

import {BaseService} from "./base.service";

import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/Rx'; 

// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';

@Injectable()

export class AvatarService extends BaseService {

  baseUrl: string = '';

  // Observable ImageUrl source
  private _imageUrl : BehaviorSubject<string>;
  // Data store for ImageUrl
  private dataStore : {
    imageUrl : string
  }

  // Observable navItem source
  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  // Observable navItem stream
  authNavStatus$ = this._authNavStatusSource.asObservable();

  private loggedIn = false;

  constructor(private http: Http, private configService: ConfigService) {
    super();
    this.loggedIn = !!localStorage.getItem('auth_token');
    // ?? not sure if this the best way to broadcast the status but seems to resolve issue on page refresh where auth status is lost in
    // header component resulting in authed user nav links disappearing despite the fact user is still logged in
    this._authNavStatusSource.next(this.loggedIn);
    this.baseUrl = configService.getApiURI();
    this.dataStore = { imageUrl : '' }
    this._imageUrl = <BehaviorSubject<string>>new BehaviorSubject('');

  }

  getAvatar(email: string){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let params: URLSearchParams = new URLSearchParams();    
    params.set('email', email);    
    options.search = params;
    var response = this.http.get(this.baseUrl + "/account/getavatar", options)
      .subscribe(res => {
        this.dataStore.imageUrl = res.json().avatarUrl;
        this._imageUrl.next(Object.assign('', this.dataStore).imageUrl);
      }, 
      error => console.log('ImageUrl failed to load'));   
          
    return response;
  }

  changeAvatar(email: string, url : string){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let params: URLSearchParams = new URLSearchParams();
    params.set('email', email);
    params.set('imageUrl', url);
    options.search = params;

    var response = this.http.get(this.baseUrl + "/account/changeavatar", options)
      .subscribe(res => {
        this.dataStore.imageUrl = url;
        this._imageUrl.next(Object.assign('', this.dataStore).imageUrl);
      }, 
      error => console.log('ImageUrl failed to load'));
      
    return response;
  }

  getSelection(){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });    
    var response = this.http.get(this.baseUrl + "/account/allavatars", options).map(res => res.json().resources);
    return response;
  }

  get ImageUrl(){    
      return this._imageUrl.asObservable();
  }

  get _Image(){
    return this._imageUrl.value;
  }
}