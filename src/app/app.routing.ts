import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';

const appRoutes: Routes = [
    {
        path:"",
        component: HomeComponent,
    },
    {
        path:"home",
        component: HomeComponent,
    },
    {
        path:"results",
        component: LibraryComponent,
    }
]

@NgModule({   
    imports: [
        RouterModule.forRoot(
            appRoutes
        )      
    ],
    exports: [
        RouterModule
    ]
  })
  export class AppRoutingModule { }
