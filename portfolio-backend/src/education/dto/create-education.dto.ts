import { IsNumber, IsString, Max, max, Min } from "class-validator";

export class CreateEducationDto {

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
