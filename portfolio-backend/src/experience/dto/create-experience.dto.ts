import { IsNumber, IsString, Max, Min } from "class-validator";

export class CreateExperienceDto {
    
        @IsString()
        name:string;
        @IsNumber()
        @Min(1900)
        @Max(2100)
        start:number;
        @IsNumber()
        @Min(1900)
        @Max(2100)
        end:number;
        @IsString()
        content:string
}
