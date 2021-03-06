import { Component, OnInit } from '@angular/core';
import { AvatarService } from '../../shared/services/avatar.service';
import { UserService } from '../../shared/services/user.service';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-dashboard',
  templateUrl: './profile-dashboard.component.html',
  styleUrls: ['./profile-dashboard.component.scss']
})
export class ProfileDashboardComponent implements OnInit {

  
  imageUrl : Observable<string>;
  userName : Observable<string>;

  constructor(private avatarService: AvatarService, private userService : UserService, private router : Router) {
    }

  ngOnInit() {   
    if(this.avatarService._Image == ''){
      this.avatarService.getAvatar(localStorage.email);
    }
    if(this.userService._UserName == ''){
      this.userService.getUserName(localStorage.email);
    }
    this.imageUrl = this.avatarService.ImageUrl;
    this.userName = this.userService.UserName;

  } 
  
  avatarSelection(){
    this.router.navigate(['/profile/avatar']);
  }

}
