import { PartialType } from '@nestjs/mapped-types';
import { CreateEducationDto } from './create-education.dto';
import { IsBoolean } from 'class-validator';

export class UpdateEducationDto extends PartialType(CreateEducationDto) {
    @IsBoolean()
    active:boolean;
}
