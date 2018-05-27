import { Component, OnInit,OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import { Observable } from 'rxjs/Rx';
import { UserService } from '../shared/services/user.service';
import { AvatarService } from '../shared/services/avatar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit, OnDestroy {

  status: boolean;
  imageUrl : string;
  username : string;
  subscription:Subscription;
  subscription2:Subscription;
  subscription3:Subscription;
  //imageUrl : Observable<string>;
  //username : Observable<string>;

  constructor(private userService:UserService, private avatarService:AvatarService) {     
  }

    logout() {
      this.userService.logout();       
    }

    ngOnInit() {
      this.subscription = this.userService.authNavStatus$.subscribe(status => this.status = status);
      this.subscription2 = this.userService.UserName.subscribe(user => this.username = user); 
      this.subscription3 = this.avatarService.ImageUrl.subscribe(url => this.imageUrl = url);
             
      if(localStorage.email){
        if(this.avatarService._Image == ''){
          this.avatarService.getAvatar(localStorage.email);
        }
        if(this.userService._UserName == ''){
          this.userService.getUserName(localStorage.email);
        }
      }
      
    }

    ngOnDestroy() {    
      this.subscription.unsubscribe();
      this.subscription2.unsubscribe();
      this.subscription3.unsubscribe();
    }
}