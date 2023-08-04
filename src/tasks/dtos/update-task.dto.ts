import { IsEnum } from "@nestjs/class-validator";
import { TaskStatus } from "../tasks.model";

export class UpdateTaskDto {
  @IsEnum(TaskStatus)
  status: TaskStatus
}