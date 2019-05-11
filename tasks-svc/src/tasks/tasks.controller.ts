import {
  Controller,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Get,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { TaskDto } from './models/task.dto';
import { TasksService } from './tasks.service';
import { Task } from './models/task.interface';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() taskCreateDto: TaskDto): Task {
    return this.tasksService.create(taskCreateDto);
  }

  @Put(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  update(@Param('id') id: string, @Body() taskCreateDto: TaskDto): Task {
    return this.tasksService.update(id, taskCreateDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  delete(@Param('id') id: string): void {
    return this.tasksService.delete(id);
  }

  @Get()
  getAll(): Task[] {
    return this.tasksService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Task {
    return this.tasksService.findOne(id);
  }
}
