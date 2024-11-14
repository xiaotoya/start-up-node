import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AllExceptionsFilter } from './global/filter/all-exception.filter';
import { HttpExceptionsFilter } from './global/filter/http-exception.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import * as csrf from 'csurf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }));
  // 错误异常捕获 和 过滤处理
  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalFilters(new HttpExceptionsFilter());
  const config = new DocumentBuilder()
    .setTitle('NestJS API')
    .setDescription('API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);
  app.use(helmet());
  app.enableCors({
    methods: 'get' 
  });
  // app.use(csrf());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
