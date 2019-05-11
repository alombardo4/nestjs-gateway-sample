import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';
import { LoggerMiddlewareService } from './projects/logger-middleware/logger-middleware.service';

@Module({
  imports: [ProjectsModule],
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
