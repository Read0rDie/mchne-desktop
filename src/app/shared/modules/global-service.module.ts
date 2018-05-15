import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from '../services/user.service';
import { AvatarService } from '../services/avatar.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],  
})
export class GlobalServiceModule { 
    static forRoot(): ModuleWithProviders {
        return {
          ngModule: GlobalServiceModule,
          providers: [UserService, AvatarService]
        }
    }
}