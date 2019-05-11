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
import { ProjectDto } from './models/project.dto';
import { ProjectsService } from './projects.service';
import { Project } from './models/project.interface';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() projectCreateDto: ProjectDto): Project {
    return this.projectsService.create(projectCreateDto);
  }

  @Put(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  update(
    @Param('id') id: string,
    @Body() projectCreateDto: ProjectDto,
  ): Project {
    return this.projectsService.update(id, projectCreateDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  delete(@Param('id') id: string): void {
    return this.projectsService.delete(id);
  }

  @Get()
  getAll(): Project[] {
    return this.projectsService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Project {
    return this.projectsService.findOne(id);
  }
}
