import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule }   from '../shared/modules/shared.module';

import { AvatarSelectionComponent } from './avatar-selection/avatar-selection.component';
import { ProfileDashboardComponent } from './profile-dashboard/profile-dashboard.component';

import { routing }  from './profile.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing
  ],
  declarations: [AvatarSelectionComponent, ProfileDashboardComponent],
  providers: []
})
export class ProfileModule { }
