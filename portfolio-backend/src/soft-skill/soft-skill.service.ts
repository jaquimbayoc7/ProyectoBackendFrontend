import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateSoftSkillDto } from './dto/create-soft-skill.dto';
import { UpdateSoftSkillDto } from './dto/update-soft-skill.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class SoftSkillService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  create(createSoftSkillDto: CreateSoftSkillDto) {
    return this.softSkill.create({
      data:createSoftSkillDto,
    });
  }

  findAll() {
    return this.softSkill.findMany({
      orderBy:{
        createdAt:'desc'
      }
    })
  }


  update(id: string, updateSoftSkillDto: UpdateSoftSkillDto) {
    return this.softSkill.update({
      where:{id},
      data:updateSoftSkillDto
    });
  }

  remove(id: string) {
    return this.softSkill.delete({where:{id}})
  }
}
