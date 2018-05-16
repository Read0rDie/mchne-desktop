import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';

import { AvatarSelectionComponent }    from './avatar-selection/avatar-selection.component';
import { ProfileDashboardComponent }    from './profile-dashboard/profile-dashboard.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'profile/avatars', component: AvatarSelectionComponent},
  { path: 'profile', component: ProfileDashboardComponent}
]);