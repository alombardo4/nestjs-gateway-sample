import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class TaskDto {
  @IsString()
  @IsNotEmpty()
  @ApiModelProperty()
  name: string;

  @IsString()
  @IsOptional()
  @ApiModelPropertyOptional()
  description?: string;

  @IsBoolean()
  @ApiModelProperty()
  complete: boolean;
}
