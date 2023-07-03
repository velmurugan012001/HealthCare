import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from'./login/login.component';
import { PatientComponent } from './patient/patient.component';
import { RegisterComponent } from './register/register.component';
import { DoctorRequstComponent } from './doctor-requst/doctor-requst.component';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'Register',component:RegisterComponent},
  {path:'Doctor',component:DoctorComponent},
  {path:'Patient',component:PatientComponent},
  {path:'Requst',component:DoctorRequstComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
