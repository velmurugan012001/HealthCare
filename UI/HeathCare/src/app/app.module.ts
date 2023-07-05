import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from '../app/login/login.component';
import { RegisterComponent } from './register/register.component';
// import { DoctorDetailsComponent } from './doctor-details/doctor.component';
import { PatientHistoryComponent } from './patient/patient.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppointmentBookingComponent } from './appointment-booking/appointment-booking.component';
import { DoctorRequstComponent } from './doctor-requst/doctor-requst.component';
import { signupService } from './Services/sinup.services';
import { BookComponent } from './book/book.component';
import { doctorService } from './Services/Doctor.service';
import { patientService } from './Services/padient.service';
import { appointmentService } from './Services/appointment.service';

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],

  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    BookComponent,
    AdminComponent,
    AdminComponent,
    AppointmentBookingComponent,
    DoctorRequstComponent,
    PatientHistoryComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [signupService,doctorService,appointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
