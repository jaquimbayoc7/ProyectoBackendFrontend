import { PartialType } from '@nestjs/mapped-types';
import { CreateExperienceDto } from './create-experience.dto';
import { IsBoolean } from 'class-validator';

export class UpdateExperienceDto extends PartialType(CreateExperienceDto) {
   @IsBoolean()
    active:boolean;
}
