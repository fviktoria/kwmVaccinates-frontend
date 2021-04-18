import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LocationListAdminComponent } from './location-list-admin/location-list-admin.component';
import { LocationListComponent } from './location-list/location-list.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { VaccinationAdminComponent } from './vaccination-admin/vaccination-admin.component';
import { VaccinationListAdminComponent } from './vaccination-list-admin/vaccination-list-admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'locations', component: LocationListComponent },
  { path: 'signup/:locationId', component: SignupFormComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/locations', component: LocationListAdminComponent },
  { path: 'admin/:locationId/vaccinations', component: VaccinationListAdminComponent },
  { path: 'admin/vaccinations/edit/:vaccinationId', component: VaccinationAdminComponent },
  { path: 'admin/:locationId/vaccinations/create', component: VaccinationAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
