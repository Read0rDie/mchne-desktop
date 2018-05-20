import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';

import { AvatarSelectionComponent }    from './avatar-selection/avatar-selection.component';
import { ProfileDashboardComponent }    from './profile-dashboard/profile-dashboard.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { PasswordEditComponent } from './password-edit/password-edit.component';
import { ProfileDeleteComponent } from './profile-delete/profile-delete.component';

import { AuthGuard } from '../auth.guard';

export const routing: ModuleWithProviders = RouterModule.forChild([
{
  path: 'profile', 
  canActivate: [AuthGuard],
  children: [
    {
      path: '', 
      component: ProfileDashboardComponent
    },
    {
      path: 'avatars', 
      component: AvatarSelectionComponent
    },
    {
      path: 'edit', 
      component: ProfileEditComponent
    },
    {
      path: 'password', 
      component: PasswordEditComponent
    },
    {
      path: 'delete', 
      component: ProfileDeleteComponent
    }
  ]
}
]);