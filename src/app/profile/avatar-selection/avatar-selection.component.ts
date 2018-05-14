import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { AvatarService } from '../../shared/services/avatar.service';

@Component({
  selector: 'app-avatar-selection',
  templateUrl: './avatar-selection.component.html',
  styleUrls: ['./avatar-selection.component.scss']
})
export class AvatarSelectionComponent implements OnInit {

  avatarList;

  constructor(private avatarService: AvatarService, private router: Router) {}  

   selectAvatar(){      
   }

  ngOnInit() {
    this.avatarService.getSelection().subscribe(res => this.avatarList = res);    
  }

  ngOnDestroy(){
    
  }

}
