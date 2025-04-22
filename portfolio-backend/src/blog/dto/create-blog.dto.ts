import { IsString, IsUrl } from "class-validator";

export class CreateBlogDto {
@IsString()
  title: string;
  @IsString()
  category: string;
  @IsString()
  image: string;
  @IsUrl()
  link: string;
  @IsString()
  content: string;
}
