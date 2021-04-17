import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header/header.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { InputComponent } from './ui/input/input.component';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationListItemComponent } from './location-list-item/location-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupFormComponent,
    InputComponent,
    LocationListComponent,
    LocationListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
