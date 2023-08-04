import { Controller, Get, Delete, Param, Post, Patch, Body, Query } from '@nestjs/common';
import { TasksService} from './tasks.service';
import { Task, TaskStatus} from './tasks.model';
import { createTaskDto } from "./dtos/create-task.dto"
import { GetTaskFilterDto } from './dtos/get-task.dt';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(@Query() query: GetTaskFilterDto):Task[] {

    if (Object.keys(query).length) {
      return this.tasksService.getAllTasksWithFilter(query);
    } else {
      return this.tasksService.getAllTasks();
    }

  }

  @Post()
  createTask(@Body() body: createTaskDto) {
    const { title, description } = body;
    return this.tasksService.create(title, description);
  }

  @Get("/:id")
  getTask(@Param("id") id: string): Task{
    return this.tasksService.getTaskById(id);
  }

  @Delete("/:id")
  deleteTask(@Param("id") id: string): void{
    console.log("id", id);
    return this.tasksService.delete(id);
  }

  @Patch("/:id/status")
  updateTask(@Param("id") id: any, @Body("status") status: TaskStatus): Task{
    return this.tasksService.update(id, status);
  }
}
