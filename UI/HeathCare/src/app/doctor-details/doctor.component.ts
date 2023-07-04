// import { Component, OnInit, ViewChild } from '@angular/core';
// import { Router } from '@angular/router';
// import { doctorService } from 'src/app/Services/Doctor.service';
// import { signupService } from 'src/app/Services/sinup.services';

// @Component({
//   selector: 'app-doctor-details',
//   templateUrl: './doctor.component.html',
//   styleUrls: ['./doctor.component.css']
// })
// export class DoctorDetailsComponent  implements OnInit {
  
  
//   DoctorRegister!:any;

 
//   constructor(private doctordet:doctorService,private service:signupService,router: Router) {

//     this.DoctorRegister={
//       id:"",
//       email:"",
//       age:"",
//       gender: "",
//       role: "",
//       specialization:" ",
//       experiance:0,
//       requeststatus:"",
//       availability:"",
//       password:"",
//       location:"",
//       phone:0
//     }
//    }
  

//   selectedDoctorId?: number;
//   ngOnInit(): void
//   {

//     this.doctordet.getDoctors().subscribe(detils=>this.DoctorRegister=detils);

   
//   }

//   deleteDoctor(req: any) {
    
  

//     this.service.deleteDoctordetails(req.id, req).subscribe(
//       () => {
//         alert("Deleted successfully")
//         confirm("Doctor "+req.id+" deleted Successfully!!!")
//         {
//           window.location.reload();
//         }
//       },
//       error => {
//         console.error(error);
//          alert("An error occurred while deleting the Doctor Detail. Please try again.");
//       }
//     );
//     this.doctordet.DeleteRequest(req.id,req).subscribe(data=>{
//       alert("Doctor Details deleted")
//       window.location.reload();
//     })
  
     
//  }

// }

// export class DoctorregisterModel
// {

//          id:string="";
//          email:string="";
//          age:number=0;
//          gender: string="";
//          role: string="";
//          specialization:string=" ";
//          experiance:number=0;
//          requeststatus:string="request";
//          availability:string="";
//          password:string="";
//          location:string="";
//          phone:number=0;
          

// }