import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerOptions = new DocumentBuilder()
    .setTitle('Projects')
    .setDescription('Project service API')
    .setVersion(require('../package.json').version)
    .build();

  SwaggerModule.setup(
    'swagger',
    app,
    SwaggerModule.createDocument(app, swaggerOptions),
  );
  app.setGlobalPrefix('v1');
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
