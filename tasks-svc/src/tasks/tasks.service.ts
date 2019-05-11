import { Injectable } from '@nestjs/common';
import { TaskDto } from './models/task.dto';
import * as uuid from 'uuid';
import { Task } from './models/task.interface';
import { DoesNotExistError } from './models/does-not-exist-error';

@Injectable()
export class TasksService {
  tasks = new Map<string, Task>();

  create(task: TaskDto): Task {
    const id = uuid.v4();
    const completeTask: Task = {
      id,
      name: task.name,
      description: task.description,
      complete: task.complete,
    };
    this.tasks.set(id, completeTask);
    return completeTask;
  }

  update(id: string, task: TaskDto): Task {
    const savedTask = this.findTask(id);
    savedTask.name = task.name;
    savedTask.description = task.description;
    savedTask.complete = task.complete;
    return savedTask;
  }

  delete(id: string): void {
    const savedTask = this.findTask(id);
    this.tasks.delete(id);
  }

  findAll(): Task[] {
    return Array.from(this.tasks.values());
  }

  findOne(id: string): Task {
    return this.findTask(id);
  }

  private findTask(id: string): Task {
    if (!this.tasks.has(id)) {
      throw new DoesNotExistError();
    }
    return this.tasks.get(id);
  }
}
