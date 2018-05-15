import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AvatarService } from '../../../shared/services/avatar.service';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  imageUrl: string;

  constructor(private avatarService: AvatarService,  private userService: UserService) { }

  ngOnInit() {
    this.avatarService.getImage(this.userService.userEmail)
      .subscribe(res => this.imageUrl = res);
  }

  setAvatarUrl(url : string){
    this.avatarService.changeAvatar(this.userService.userEmail, url)
      .subscribe(res => this.imageUrl = res);
  }

}
