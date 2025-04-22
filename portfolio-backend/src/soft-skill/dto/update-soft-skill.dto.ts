import { PartialType } from '@nestjs/mapped-types';
import { CreateSoftSkillDto } from './create-soft-skill.dto';
import { IsBoolean } from 'class-validator';

export class UpdateSoftSkillDto extends PartialType(CreateSoftSkillDto) {
    @IsBoolean()
    active:boolean;
}
