import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  // NOTE: It is vital to disable body parsing for performance
  const app = await NestFactory.create(AppModule, { bodyParser: false });

  const swaggerOptions = new DocumentBuilder()
    .setTitle('Gateway')
    .setDescription('Gateway service API')
    .setVersion(require('../package.json').version)
    .build();

  SwaggerModule.setup(
    'swagger',
    app,
    SwaggerModule.createDocument(app, swaggerOptions),
  );
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
