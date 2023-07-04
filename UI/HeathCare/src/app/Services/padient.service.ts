import { HttpClient } from "@angular/common/http";
import { UserDTOModel } from "src/app/Model/UserDTO.model";
import {Injectable} from '@angular/core';
import { registerModel } from "src/app/Model/register.model";
import { DRegisterModel } from "src/app/register/register.component";
import { AppointmentModel } from "src/app/book/book.component";

@Injectable()
export class patientService{
    constructor(private httpClient:HttpClient){

    }
}