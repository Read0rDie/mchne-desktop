import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule }   from '../shared/modules/shared.module';
import { AvatarService }  from '../shared/services/avatar.service';

import { AvatarSelectionComponent } from './avatar-selection/avatar-selection.component';
import { ProfileDashboardComponent } from './profile-dashboard/profile-dashboard.component';

import { routing }  from './profile.routing';
import { AvatarComponent } from './profile-dashboard/avatar/avatar.component';
import { UserService } from '../shared/services/user.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing
  ],
  declarations: [AvatarSelectionComponent, ProfileDashboardComponent, AvatarComponent],
  providers:    [ AvatarService, UserService ]
})
export class ProfileModule { }
