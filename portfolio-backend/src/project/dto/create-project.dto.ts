import { IsString, IsUrl } from "class-validator";

export class CreateProjectDto {
    @IsString()
    name:string;
    @IsString()
    category:string;
    @IsString()
    @IsUrl()
    link:string;
}
