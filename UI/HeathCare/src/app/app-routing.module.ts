import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DoctorDetailsComponent } from './doctor-details/doctor.component';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from'./login/login.component';

import { RegisterComponent } from './register/register.component';
import { DoctorRequstComponent } from './doctor-requst/doctor-requst.component';
import { PatientHistoryComponent } from './patient/patient.component';
import { AppointmentBookingComponent } from './appointment-booking/appointment-booking.component';
import { DoctorDetailsComponent } from './doctor-detail/doctor.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'Register',component:RegisterComponent},
  // {path:'Doctor',component:DoctorDetailsComponent},
  {path:'Patient',component:PatientHistoryComponent},
  {path:'Requst',component:DoctorRequstComponent},
  {path:'booking',component:AppointmentBookingComponent},
  {path:'detail',component:DoctorDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
