import { Component, OnInit,OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit, OnDestroy {

  status: boolean;
 subscription:Subscription;

  constructor(private userService:UserService) {     
  }

    logout() {
      this.userService.logout();       
    }

    ngOnInit() {
      this.subscription = this.userService.authNavStatus$.subscribe(status => this.status = status);
    }

    ngOnDestroy() {    
      this.subscription.unsubscribe();
    }
}