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

  Login() {
    this.signupService.userLogin(this.userDTO).subscribe(data => {
      this.loggedInUser = data as LoggedInUserModel;
      console.log(this.loggedInUser);
  
      localStorage.setItem("token", this.loggedInUser.token);
      localStorage.setItem("UserID", this.loggedInUser.id);
      localStorage.setItem("role", this.loggedInUser.role);
      localStorage.setItem("login", new Date().toDateString());
      alert("Login Succesfull")
      window.location.reload();
      
      this.router.navigate(['/']); // Navigate to the home page
  
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
