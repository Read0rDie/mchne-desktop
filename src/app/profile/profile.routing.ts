import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';

import { AvatarSelectionComponent }    from './avatar-selection/avatar-selection.component';
import { ProfileDashboardComponent }    from './profile-dashboard/profile-dashboard.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'profile/avatars', component: AvatarSelectionComponent},
  { path: 'profile', component: ProfileDashboardComponent},
  { path: 'profile/edit', component: ProfileEditComponent}
]);