import { HttpClient } from "@angular/common/http";
import { UserDTOModel } from "./../Model/UserDTO.model";
import {Injectable} from '@angular/core';
import { registerModel } from "./../Model/register.model";
import { DRegisterModel } from "../register/register.component";
// import { DoctorregisterModel } from "src/app/register/register.component";
// import { AppointmentModel } from "src/app/book/book.component";

@Injectable()
export class signupService{
    constructor(private httpClient:HttpClient){

    }

    signup(register:registerModel){
        console.log("register in servive")
        return this.httpClient.post("https://localhost:7138/api/User/Register",register);
    }

    userLogin(userDTO:UserDTOModel){
        return this.httpClient.post("https://localhost:7138/api/User/Login",userDTO);
    }
    

    Doctorsignup(register:DRegisterModel){
        console.log("register in servive")
        return this.httpClient.post("https://localhost:7138/api/Doctor",register);
    }

    getrequest(){
        return this.httpClient.get("https://localhost:7138/api/Doctor");
    }

    DoctorStatus(id:string,req:DRegisterModel){
        
        return this.httpClient.put(`https://localhost:7138/api/Doctor`+'/'+id,req);
    }

    DeleteRequest(id:string,req:DRegisterModel){
        return this.httpClient.delete("https://localhost:7138/api/Doctor/"+id);

    }

    getDoctors(){
        return this.httpClient.get("https://localhost:7138/api/Doctor/Doctors");
    }

    deleteDoctordetails(id:string,req:DRegisterModel){
        return this.httpClient.delete(`https://localhost:7138/api/User`+'/'+id);
    }


    // bookappointment(book:AppointmentModel){
    //     return this.httpClient.post("https://localhost:7138/api/Appointments",book);

    // }

}