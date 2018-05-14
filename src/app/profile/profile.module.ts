import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule }   from '../shared/modules/shared.module';
import { AvatarService }  from '../shared/services/avatar.service';

import { AvatarComponent } from './avatar/avatar.component';
import { AvatarSelectionComponent } from './avatar-selection/avatar-selection.component';

import { routing }  from './profile.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing
  ],
  declarations: [AvatarComponent, AvatarSelectionComponent],
  providers:    [ AvatarService ]
})
export class ProfileModule { }
