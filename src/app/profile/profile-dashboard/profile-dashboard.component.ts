import { Component, OnInit } from '@angular/core';
import { AvatarService } from '../../shared/services/avatar.service';
import { UserService } from '../../shared/services/user.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-profile-dashboard',
  templateUrl: './profile-dashboard.component.html',
  styleUrls: ['./profile-dashboard.component.scss']
})
export class ProfileDashboardComponent implements OnInit {

  
  imageUrl : Observable<string>;
  userName : Observable<string>;

  constructor(private avatarService: AvatarService, private userService : UserService) {
    }

  ngOnInit() {   
    if(this.avatarService._Image == ''){
      this.avatarService.getAvatar(localStorage.email);
    }
    this.imageUrl = this.avatarService.ImageUrl;
  }  

}
