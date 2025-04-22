import { IsString } from "class-validator";

export class CreateActivityDto {

  @IsString()
  name:string;
  @IsString()
  content:string;
}
