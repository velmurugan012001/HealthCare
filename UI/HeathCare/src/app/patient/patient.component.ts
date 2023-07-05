import { Component, OnInit, ViewChild } from '@angular/core';
import { appointmentService } from '../Services/appointment.service';

@Component({
  selector: 'app-patient-history',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientHistoryComponent implements OnInit {
  [x: string]: any;
  @ViewChild('myModal') modal: any;
  appointId?:number;
    request: any;
    patientdata?:any;
  
    
    constructor(private service:appointmentService) {
     this.patientdata=localStorage.getItem("UserID");
      this.getAppointments(this.patientdata);
    }
  ngOnInit(): void {
    this.service.getAppointmentsdetails().subscribe((result: any) => {
      this.request = result;
      console.log(this.request);

    });
  }
  
  private  getAppointments(patientdata:any): void {
    this.service.getUserAppointmentsdetails(this.patientdata).subscribe((result: any) => {
      this.request = result;
      console.log(this.request);

    });
  
    // addFeedback(id:number){
    //   this.appointId=id;
    //   //console.log(this.appointId);
    //   console.log(this.patientdata);

    // }
  }
}
