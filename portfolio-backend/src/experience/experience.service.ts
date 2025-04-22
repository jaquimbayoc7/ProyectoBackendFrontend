import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ExperienceService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  create(createExperienceDto: CreateExperienceDto) {
    return this.experience.create({
      data:createExperienceDto
    })
  }

  findAll() {
    return this.experience.findMany({
      orderBy: {
        createdAt:'desc'
      }
    });
  }


  update(id: string, updateExperienceDto: UpdateExperienceDto) {
    return this.experience.update({
      where:{id},
      data:updateExperienceDto
    })
  }

  remove(id: string) {
    return this.experience.delete({where:{id}})
  }
}
