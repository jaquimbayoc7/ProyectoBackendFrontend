import { IsNumber, IsPositive, IsString, Max, Min } from "class-validator";

export class CreateSkillDto {
      @IsString()
        name:string;
        @IsPositive()
        @IsNumber()
        @Min(0)
        @Max(100)
        level:number;
}
