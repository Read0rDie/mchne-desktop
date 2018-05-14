import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';

import { AvatarSelectionComponent }    from './avatar-selection/avatar-selection.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'avatar', component: AvatarSelectionComponent},  
]);