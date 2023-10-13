import {IsString} from "@nestjs/class-validator";
import {IsEmail, IsNumber} from "class-validator";

export class CreateDto {
    @IsString()
    name: string

    @IsString()
    surname: string

    @IsEmail()
    email: string

    @IsNumber()
    age: number
}