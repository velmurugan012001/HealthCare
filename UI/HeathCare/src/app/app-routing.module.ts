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
import { AuthGuard } from './auth.guard';
import { BookComponent } from './book/book.component';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',component:LoginComponent},
  {path:'Register',component:RegisterComponent},
  // {path:'Doctor',component:DoctorDetailsComponent},
  {path:'Patient',component:PatientHistoryComponent, canActivate: [AuthGuard]},
  {path:'Requst',component:DoctorRequstComponent, canActivate: [AuthGuard]},
  {path:'booking',component:AppointmentBookingComponent, canActivate: [AuthGuard]},
  { path: 'detail', component: DoctorDetailsComponent, canActivate: [AuthGuard] },
  {path:'book',component:BookComponent,canActivate: [AuthGuard]}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
