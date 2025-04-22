import { IsString } from "class-validator";

export class CreateSoftSkillDto {
    @IsString()
    name:string;
    @IsString()
    content:string;
}
