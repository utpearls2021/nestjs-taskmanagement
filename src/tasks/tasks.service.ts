import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from "./tasks.model"
import { GetTaskFilterDto } from './dtos/get-task.dt';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks() : Task[] {
    return this.tasks;
  }

  getAllTasksWithFilter(query: GetTaskFilterDto): Task[]{
    const { search, status } = query;
    let tasks = this.getAllTasks();

    if (status) {
      tasks = tasks.filter((task) => task.status === status);
    }

    if (search) {
      tasks = tasks.filter((task) => task.title.includes(search))
    }

    return tasks;
  }

  create(title: string, description: string): Task {
    const task: Task = {
      id: Math.floor(this.tasks.length + 1),
      title: title,
      description: description,
      status: TaskStatus.OPEN
    };

    this.tasks.push(task);

    return task;
  }

  getTaskById(id: string): Task {
    return this.tasks.find(task => task.id === parseInt(id));
  }

  delete(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== parseInt(id));
  }

  update(id: string, status: TaskStatus) {
    const task = this.getTaskById(id)
    task.status = status;
    return task;
  }
}
