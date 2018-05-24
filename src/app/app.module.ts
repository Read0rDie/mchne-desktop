import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, XHRBackend } from '@angular/http';
import { EmailValidator } from './directives/email.validator.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



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
import { GlobalServiceModule } from './shared/modules/global-service.module';
import { AuthGuard } from './auth.guard';
import { ResultsComponent } from './library/results/results.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LibraryComponent,
    NavbarComponent,  
    EmailValidator, 
    ResultsComponent,               
  ],
  imports: [
    BrowserModule,
    AccountModule,
    ProfileModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    AppRoutingModule,
    GlobalServiceModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    ConfigService, 
    { 
      provide: XHRBackend, 
      useClass: AuthenticateXHRBackend,
    },
    AuthGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
 }
