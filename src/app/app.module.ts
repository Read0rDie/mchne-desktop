import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, XHRBackend } from '@angular/http';

/* Third Party Imports */
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AuthenticateXHRBackend } from './authenticate-xhr.backend';

/* Routing */
import { AppRoutingModule } from './app.routing';

/* Services */
import { ConfigService } from './shared/utils/config.service';

/* Account Imports */
import { AccountModule }  from './account/account.module';

/* Profile Imports */
import { ProfileModule }  from './profile/profile.module';

/* App Root Components */
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LibraryComponent,
    NavbarComponent,             
  ],
  imports: [
    BrowserModule,
    AccountModule,
    ProfileModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [ConfigService, { 
    provide: XHRBackend, 
    useClass: AuthenticateXHRBackend
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
