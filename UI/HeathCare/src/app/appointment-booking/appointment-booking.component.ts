import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { doctorService } from '../Services/Doctor.service';


@Component({
  selector: 'app-appointment-booking',
  templateUrl: './appointment-booking.component.html',
  styleUrls: ['./appointment-booking.component.css']
})
export class AppointmentBookingComponent implements OnInit {
  [x: string]: any;
  @ViewChild('myModal') modal: any; 
  // Add this line
  
  DoctorRegister!:any;

  openModal() {
    this.modal.nativeElement.style.display = 'block'; // Show the modal
  }
  constructor(private doctordet:doctorService,router: Router) {

    this.DoctorRegister={
      id:"",
      email:"",
      age:0,
      gender: "",
      role: "",
      specialization:" ",
      experiance:0,
      requeststatus:"",
      availability:"",
      password:"",
      location:"",
      phone:0
    }
   }
  

  selectedDoctorId?: number;

  ngOnInit(): void
  {
    this.doctordet.getDoctors().subscribe(detils=>this.DoctorRegister=detils);  
  }
  

  bookAppointment(c:any){
    this.selectedDoctorId = c.id;
  
  
  }
}
  
export class DoctorregisterModel
{

         id:string="";
         email:string="";
         age:number=0;
         gender: string="";
         role: string="";
         specialization:string=" ";
         experiance:number=0;
         requeststatus:string="request";
         availability:string="";
         password:string="";
         location:string="";
         phone:number=0;
          

}

