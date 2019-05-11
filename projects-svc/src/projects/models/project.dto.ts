import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class ProjectDto {
  @IsString()
  @IsNotEmpty()
  @ApiModelProperty()
  name: string;

  @IsString()
  @IsOptional()
  @ApiModelPropertyOptional()
  description?: string;
}
