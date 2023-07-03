import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedInUserModel } from 'src/app/Model/LoggedInUser';
import { signupService } from 'src/app/Services/sinup.services';
import { Location } from '@angular/common';

@Component({
  selector: 'app-doctor-requst',
  templateUrl: './doctor-requst.component.html',
  styleUrls: ['./doctor-requst.component.css']
})
export class DoctorRequstComponent {
  
  public request: any;
  loggedInUser:LoggedInUserModel;
  registration_status = false;

  register: { id: string; email: string; age:number; gender: string; role: string; password: string; hashKey: string; passwordClear: string; location:string;phone:number;};
  constructor(private router :Router , private service : signupService,private location: Location) { 
    this.register =
    {
      id:"",
      email:"",
      age:0,
      gender: "",
      role: "",
      password: "",
      hashKey: "",
      passwordClear: "",
      location:"",
      phone:0
    }
    this.loggedInUser=new LoggedInUserModel();
  }

  // ngOnInit(): void {
  //   this.getrequests();
  // }
  handlePost(req:any)
  {
    this.register.id=req.id;
    this.register.email=req.email;
    this.register.age=req.age;
  
    this.register.role=req.role;
    this.register.gender=req.gender;
    this.register.passwordClear=req.password;
    this.register.location=req.location;
    this.register.phone=req.phone;
    
    req.requestStatus="Accepted";
   
    //  this.handleUpdate(req);

    this.service.signup(this.register).subscribe(data=>{
      console.log("register in component")
      // this.loggedInUser = data as LoggedInUserModel;
      // console.log(this.loggedInUser);
      
      // localStorage.setItem("token",this.loggedInUser.token);
      // localStorage.setItem("UserID",this.loggedInUser.id);
      // localStorage.setItem("role",this.loggedInUser.role);
      // this.registration_status = true;
      
    },
    err=>{
      console.log(err)
    });
    
}

// handleUpdate(req:any){
//   this.service.DoctorStatus(req.id,req).subscribe(data=>{
//     console.log("Doctor Status updated",req)
//     window.location.reload();
//   })
  
// }
  

//   handleDelete(id:string,req:any){
//     this.service.DeleteRequest(id,req).subscribe(data=>{
//       console.log("Doctor request deleted")
//       window.location.reload();
//     })
     

     
    
//   }

//   private getrequests(): void {
//     this.service.getrequest().subscribe(result => {
//       this.request = result;
//       console.log(this.request);
//     });
    
//   }

}


