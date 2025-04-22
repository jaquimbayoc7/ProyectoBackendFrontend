import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ActivityService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
  create(createActivityDto: CreateActivityDto) {
    return this.activity.create({
      data: createActivityDto,
    });
  }

  findAll() {
    return this.activity.findMany({
      orderBy:{
        createdAt: 'desc'
      }
    });
  }

  update(id: string, updateActivityDto: UpdateActivityDto) {
    return this.activity.update({
      where: {id},
      data: updateActivityDto
    });
  }

  remove(id: string) {
    return this.activity.delete({
      where:{id}
    });
  }
}
