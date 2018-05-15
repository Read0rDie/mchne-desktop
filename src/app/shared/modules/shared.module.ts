import { NgModule, ModuleWithProviders }           from '@angular/core';
import { CommonModule }       from '@angular/common';

import { myFocus } from '../../directives/focus.directive';
import {SpinnerComponent} from '../../spinner/spinner.component'; 
import { AvatarService } from '../services/avatar.service';
import { UserService } from '../services/user.service';

@NgModule({
  imports:      [CommonModule],
  declarations: [myFocus,SpinnerComponent],
  exports:      [myFocus,SpinnerComponent],
  providers:    []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [AvatarService, UserService]
    };
 }
}