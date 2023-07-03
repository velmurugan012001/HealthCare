import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from '../app/login/login.component';
import { RegisterComponent } from './register/register.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppoinmentBookingComponent } from './appoinment-booking/appoinment-booking.component';
import { DoctorRequstComponent } from './doctor-requst/doctor-requst.component';
import { signupService } from './Services/sinup.services';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DoctorComponent,
    PatientComponent,
    AdminComponent,
    AppoinmentBookingComponent,
    DoctorRequstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [signupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
