import { HttpClient } from "@angular/common/http";
import { UserDTOModel } from "src/app/Model/UserDTO.model";
import {Injectable} from '@angular/core';
import { registerModel } from "src/app/Model/register.model";
import { DRegisterModel } from "src/app/register/register.component";
import { AppointmentModel } from "../book/book.component";

@Injectable()
export class appointmentService{
    constructor(private httpClient:HttpClient){

    }

    bookappointment(book:AppointmentModel){
        return this.httpClient.post("https://localhost:7138/api/Appointments",book);

    }

    getAppointmentsdetails(){
        return this.httpClient.get("https://localhost:7138/api/Appointments");
    }

    getUserAppointmentsdetails(id:any){
        return this.httpClient.get("https://localhost:7138/api/Appointments/"+id);
    }


}