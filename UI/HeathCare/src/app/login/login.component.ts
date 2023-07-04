import { Component } from '@angular/core';
import { signupService } from './../Services/sinup.services';
import { UserDTOModel } from './../Model/UserDTO.model';

import { LoggedInUserModel } from './../Model/LoggedInUser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userDTO:UserDTOModel
  loggedInUser:LoggedInUserModel
  

  constructor(private signupService : signupService, private router : Router){
    this.userDTO=new UserDTOModel();
    this.loggedInUser=new LoggedInUserModel
  }

  
  Login(){

    this.signupService.userLogin(this.userDTO).subscribe(data=>{
      
      this.loggedInUser = data as LoggedInUserModel;
      console.log(this.loggedInUser);
      
      localStorage.setItem("token",this.loggedInUser.token);
      localStorage.setItem("UserID",this.loggedInUser.id);
      localStorage.setItem("role",this.loggedInUser.role);
      localStorage.setItem("login", new Date().toDateString());
     

      // if (localStorage.getItem("role") == "Admin")
      // {
      //   this.router.navigateByUrl("Doctor")
      // }
      setTimeout(() => {
        
        this.router.navigate(['']);
        window.location.reload();
      }, 100);
     
    },
    err=>{
      console.log(err)
      alert("Invalid Username/password")
    });
  }

  move(){
    this.router.navigateByUrl('Register');
  }

}
