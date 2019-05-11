import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { LoggerMiddlewareService } from './logger-middleware/logger-middleware.service';

@Module({
  imports: [],
  controllers: [],
  providers: [LoggerMiddlewareService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddlewareService)
      .forRoutes({ path: '', method: RequestMethod.ALL });
  }
}
