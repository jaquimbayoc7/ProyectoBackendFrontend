import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class EducationService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  create(createEducationDto: CreateEducationDto) {
    return this.education.create({
      data: createEducationDto
    })
  }

  findAll() {
    return this.education.findMany();
  }


  update(id: string, updateEducationDto: UpdateEducationDto) {
    return this.education.update({where:{id},
    data:updateEducationDto})
  }

  remove(id: string) {
    return this.education.delete({where:{id}});
  }
}
