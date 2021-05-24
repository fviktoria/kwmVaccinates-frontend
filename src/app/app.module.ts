import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header/header.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { InputComponent } from './ui/input/input.component';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationListItemComponent } from './location-list-item/location-list-item.component';
import { LocationService } from './shared/location.service';
import { HomeComponent } from './home/home.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { VaccinationAdminComponent } from './vaccination-admin/vaccination-admin.component';
import { LocationListAdminComponent } from './location-list-admin/location-list-admin.component';
import { VaccinationListAdminComponent } from './vaccination-list-admin/vaccination-list-admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './shared/authentication.service';
import { TokenInterceptorService } from './shared/token-interceptor.service';
import { UserAppointmentConfirmationComponent } from './user-appointment-confirmation/user-appointment-confirmation.component';
import { FooterComponent } from './ui/footer/footer.component';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupFormComponent,
    InputComponent,
    LocationListComponent,
    LocationListItemComponent,
    HomeComponent,
    AdminComponent,
    VaccinationAdminComponent,
    LocationListAdminComponent,
    VaccinationListAdminComponent,
    LoginComponent,
    UserAppointmentConfirmationComponent,
    FooterComponent,
    RegisteredUsersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [
    LocationService,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
