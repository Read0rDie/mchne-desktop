import { Injectable } from '@angular/core';
import { URLSearchParams, Http, Response, Headers, RequestOptions } from '@angular/http';
import { Component, Input } from '@angular/core';

import { ConfigService } from '../utils/config.service';

import {BaseService} from "./base.service";

import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/Rx'; 

// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';

@Injectable()

export class LibraryService extends BaseService {

  baseUrl: string = ''; 
 
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
  }

  allNovels(){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var response = this.http.get(this.baseUrl + "/novels", options).map(res => res.json());
    return response;   
  }  

  getNovel(id: number){

  }

  addNovel(){

  }

  editNovel(id: number){

  }

  removeNovel(id: number){

  }
  
}