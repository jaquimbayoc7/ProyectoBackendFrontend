import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class LanguageService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
   await this.$connect();
  }
  create(createLanguageDto: CreateLanguageDto) {
    return this.language.create({
      data:createLanguageDto
    })
  }

  findAll() {
    return this.language.findMany();
  }


  remove(id: string) {
    return this.language.delete({where: {id}})
  }
}
