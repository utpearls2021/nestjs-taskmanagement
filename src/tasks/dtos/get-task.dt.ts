import { IsEnum, IsOptional, IsString } from "@nestjs/class-validator";
import { TaskStatus } from "../tasks.model";

export class GetTaskFilterDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  @IsString()
  status?: TaskStatus

  @IsOptional()
  search?: string
}