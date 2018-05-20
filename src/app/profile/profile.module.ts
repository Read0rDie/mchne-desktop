import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule }   from '../shared/modules/shared.module';
import { FormsModule }  from '@angular/forms';
import { MatDialogModule, MatButtonModule  } from '@angular/material';


import { AvatarSelectionComponent } from './avatar-selection/avatar-selection.component';
import { ProfileDashboardComponent } from './profile-dashboard/profile-dashboard.component';

import { routing }  from './profile.routing';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { PasswordEditComponent } from './password-edit/password-edit.component';
import { ProfileDeleteComponent } from './profile-delete/profile-delete.component';
import { ProfileModalComponent } from './profile-modal/profile-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MatDialogModule,
    MatButtonModule,    
    routing
  ],
  declarations: [AvatarSelectionComponent, ProfileDashboardComponent, ProfileEditComponent, PasswordEditComponent, ProfileDeleteComponent, ProfileModalComponent],
  providers: [],
  entryComponents: [ProfileModalComponent]
})
export class ProfileModule { }
