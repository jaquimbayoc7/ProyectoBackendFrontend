import { PartialType } from '@nestjs/mapped-types';
import { CreateSkillDto } from './create-skill.dto';
import { IsBoolean } from 'class-validator';

export class UpdateSkillDto extends PartialType(CreateSkillDto) {
    @IsBoolean()
    active:boolean;
}
