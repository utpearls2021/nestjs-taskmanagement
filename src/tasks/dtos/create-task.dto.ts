import { IsString, IsNotEmpty } from "@nestjs/class-validator";
export class createTaskDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}