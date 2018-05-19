import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule }   from '../shared/modules/shared.module';
import { FormsModule }  from '@angular/forms';


import { AvatarSelectionComponent } from './avatar-selection/avatar-selection.component';
import { ProfileDashboardComponent } from './profile-dashboard/profile-dashboard.component';

import { routing }  from './profile.routing';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { PasswordEditComponent } from './password-edit/password-edit.component';
import { ProfileDeleteComponent } from './profile-delete/profile-delete.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    routing
  ],
  declarations: [AvatarSelectionComponent, ProfileDashboardComponent, ProfileEditComponent, PasswordEditComponent, ProfileDeleteComponent],
  providers: []
})
export class ProfileModule { }
