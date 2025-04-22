import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { UploaderService } from 'src/services/uploader/s3.service';

@Module({
  controllers: [BlogController],
  providers: [BlogService, UploaderService],
})
export class BlogModule {}
