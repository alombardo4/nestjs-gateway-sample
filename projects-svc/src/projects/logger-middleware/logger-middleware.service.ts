import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddlewareService extends Logger implements NestMiddleware {
  // tslint:disable-next-line:ban-types
  use(req: Request, res: Response, next: Function) {
    super.log(`${req.method}: ${req.path}`, 'HTTP');
    next();
  }
}
