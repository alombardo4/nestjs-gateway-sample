import { Injectable } from '@nestjs/common';
import { ProjectDto } from './models/project.dto';
import * as uuid from 'uuid';
import { Project } from './models/project.interface';
import { DoesNotExistError } from './models/does-not-exist-error';

@Injectable()
export class ProjectsService {
  projects = new Map<string, Project>();

  create(project: ProjectDto): Project {
    const id = uuid.v4();
    const completeProject: Project = {
      id,
      name: project.name,
      description: project.description,
    };
    this.projects.set(id, completeProject);
    return completeProject;
  }

  update(id: string, project: ProjectDto): Project {
    const savedProject = this.findProject(id);
    savedProject.name = project.name;
    savedProject.description = project.description;
    return savedProject;
  }

  delete(id: string): void {
    const savedProject = this.findProject(id);
    this.projects.delete(id);
  }

  findAll(): Project[] {
    return Array.from(this.projects.values());
  }

  findOne(id: string): Project {
    return this.findProject(id);
  }

  private findProject(id: string): Project {
    if (!this.projects.has(id)) {
      throw new DoesNotExistError();
    }
    return this.projects.get(id);
  }
}
