import { IsString } from "class-validator";



export class CreateResumeDto {
    
    @IsString()
    content: string;
}
