import { Module } from '@nestjs/common';
import { SoftSkillService } from './soft-skill.service';
import { SoftSkillController } from './soft-skill.controller';

@Module({
  controllers: [SoftSkillController],
  providers: [SoftSkillService],
})
export class SoftSkillModule {}
