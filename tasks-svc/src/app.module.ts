import { Module, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { LoggerMiddlewareService } from './logger-middleware/logger-middleware.service';

@Module({
  imports: [TasksModule],
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
