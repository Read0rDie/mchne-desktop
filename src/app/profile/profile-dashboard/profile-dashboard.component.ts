import { Component, OnInit } from '@angular/core';
import { AvatarComponent } from './avatar/avatar.component';

@Component({
  selector: 'app-profile-dashboard',
  templateUrl: './profile-dashboard.component.html',
  styleUrls: ['./profile-dashboard.component.css']
})
export class ProfileDashboardComponent implements OnInit {

  constructor(private avatar: AvatarComponent) { }

  ngOnInit() {
  }

}
