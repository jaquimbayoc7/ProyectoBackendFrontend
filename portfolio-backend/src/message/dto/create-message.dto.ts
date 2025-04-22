import { IsEmail, IsString } from "class-validator"

export class CreateMessageDto {
    @IsString()
    name:string
    @IsString()
    @IsEmail()
    email:string
    @IsString()
    content:string
}
