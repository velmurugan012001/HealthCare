import { HttpClient } from "@angular/common/http";
import { UserDTOModel } from "src/app/Model/UserDTO.model";
import {Injectable} from '@angular/core';
import { registerModel } from "src/app/Model/register.model";
import { DRegisterModel } from "src/app/register/register.component";
import { AppointmentModel } from "src/app/book/book.component";

@Injectable()
export class doctorService{
    constructor(private httpClient:HttpClient){

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

    DoctorDetail(id:string){
        return this.httpClient.get("https://localhost:7138/api/Doctor/"+id);
    }
}