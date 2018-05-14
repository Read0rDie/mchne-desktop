import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule }   from '../shared/modules/shared.module';
import { AvatarService }  from '../shared/services/avatar.service';

import { AvatarSelectionComponent } from './avatar-selection/avatar-selection.component';

import { routing }  from './profile.routing';
import { ProfileDashboardComponent } from './profile-dashboard/profile-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing
  ],
  declarations: [AvatarSelectionComponent, ProfileDashboardComponent],
  providers:    [ AvatarService ]
})
export class ProfileModule { }
