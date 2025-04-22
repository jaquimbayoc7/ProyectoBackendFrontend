import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaClient } from '@prisma/client';
import { UploaderService } from 'src/services/uploader/s3.service';
import { v4 } from 'uuid';


@Injectable()
export class ProjectService extends PrismaClient implements OnModuleInit{
  
  constructor(private readonly uploaderService: UploaderService) {
    super();
  }
  async onModuleInit() {
    await this.$connect();
  }
  async create(createProjectDto: CreateProjectDto, image: Express.Multer.File) {
    const project = await this.project.create({
      data: {
        ...createProjectDto,
        image: v4(),
      },
    });

    await this.uploaderService.upload(image, project.image);
    return project;
  }

  async findAll() {
    const projects = await this.project.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return await Promise.all(
      projects.map(async (project) => {
        const url = await this.uploaderService.getSignedUrl(project.image);
        return { ...project, image: url };
      }),
    );
  }

  findOne(id: string) {
    return this.project.findFirst({
      where: { id },
    });
  }

  update(id: string, updateProjectDto: UpdateProjectDto) {
    return this.project.update({
      where: { id },
      data: updateProjectDto,
    });
  }

  async remove(id: string) {
    const project = await this.project.delete({
      where: { id },
    });

    await this.uploaderService.delete(project.image);
  }
}
