import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class SkillService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  create(createSkillDto: CreateSkillDto) {
    return this.skill.create({
      data:createSkillDto
    })
  }

  findAll() {
    return this.skill.findMany({
      orderBy:{
        createdAt:'desc'
      }
    })
  }


  update(id: string, updateSkillDto: UpdateSkillDto) {
    return this.skill.update({
      where:{id},
      data:UpdateSkillDto
    })
  }

  remove(id: string) {
    return this.skill.delete({where:{id}})
  }
}
