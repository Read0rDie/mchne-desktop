import { Component, OnInit } from '@angular/core';
import { AvatarService } from '../../shared/services/avatar.service';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-profile-dashboard',
  templateUrl: './profile-dashboard.component.html',
  styleUrls: ['./profile-dashboard.component.css']
})
export class ProfileDashboardComponent implements OnInit {

  imageUrl : string = '';

  constructor(private avatarService: AvatarService, private userService : UserService) {
    this.getAvatarUrl();
   }

  ngOnInit() {
  }

  getAvatarUrl(){    
    let url : string = '';
    this.avatarService.getImage(localStorage.email)
        .subscribe(res => this.imageUrl = res);    
  }

  setAvatarUrl(url : string){
    this.avatarService.changeAvatar(localStorage.email, url)
      .subscribe(res => this.imageUrl = res );
  } 

}
