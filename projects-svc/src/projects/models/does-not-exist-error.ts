import { HttpException, HttpStatus } from '@nestjs/common';

export class DoesNotExistError extends HttpException {
  constructor() {
    super('Project does not exist with the given ID', HttpStatus.NOT_FOUND);
  }
}
