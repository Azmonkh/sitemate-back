import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const swagConf = new DocumentBuilder()
    .setTitle('Sitemate task')
    .setDescription('Sitemate github issue API ')
    .setVersion('0.0.1')
    .build();

  const swagDoc = SwaggerModule.createDocument(app, swagConf);

  SwaggerModule.setup('docs', app, swagDoc);
  const host = process.env.PROJECT_HOST || '127.0.0.1';
  const port = process.env.PROJECT_PORT || 8000;
  await app.listen(port, host);
  console.log(`Project is running on ${host}:${port}`);
}
bootstrap();
