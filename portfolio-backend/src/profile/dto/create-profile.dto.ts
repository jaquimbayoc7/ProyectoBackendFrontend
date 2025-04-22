import { IsEmail, IsString } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  name: string;
  @IsString()
  specialty: string;
  @IsString()
  phone: string;
  @IsString()
  @IsEmail()
  email: string;
  @IsString()
  birthDay: string;
  @IsString()
  location: string;
}
