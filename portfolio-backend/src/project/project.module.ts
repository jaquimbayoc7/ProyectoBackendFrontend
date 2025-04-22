import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { UploaderService } from 'src/services/uploader/s3.service';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService, UploaderService],
})
export class ProjectModule {}
