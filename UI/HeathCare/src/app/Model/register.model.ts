import { UserDTOModel } from "./UserDTO.model";


export class registerModel
{
    constructor
        (
        public id:string="",
        public email:string="",
        public age:number=0,
        public gender: string="",
        public role: string="",
        public password: string="",
        public hashKey: string="",
        public passwordClear: string=""
        )
        {
            
        } 
}