import { Module } from '@nestjs/common';
import { ProfileModule } from './profile/profile.module';
import { ResumeModule } from './resume/resume.module';
import { ActivityModule } from './activity/activity.module';
import { SoftSkillModule } from './soft-skill/soft-skill.module';
import { EducationModule } from './education/education.module';
import { ExperienceModule } from './experience/experience.module';
import { LanguageModule } from './language/language.module';
import { SkillModule } from './skill/skill.module';
import { ProjectModule } from './project/project.module';
import { BlogModule } from './blog/blog.module';
import { MessageModule } from './message/message.module';


@Module({
  imports: [ProfileModule, ResumeModule, ActivityModule, SoftSkillModule, EducationModule, ExperienceModule, LanguageModule, SkillModule, ProjectModule, BlogModule, MessageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
