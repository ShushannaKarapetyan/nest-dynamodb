import {IsString} from "@nestjs/class-validator";
import {IsEmail, IsNumber, IsOptional} from "class-validator";

export class UpdateDto {
    @IsOptional()
    @IsString()
    name: string

    @IsOptional()
    @IsString()
    surname: string

    @IsOptional()
    @IsEmail()
    email: string

    @IsOptional()
    @IsNumber()
    age: number
}