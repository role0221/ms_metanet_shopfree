import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

import { join } from 'path';
import * as dotenv from 'dotenv';

import { AppModule } from './app.module';
import { APP } from '../config/app-config';
import { GlobalValidationPipe } from './validation.pipe';
import { HttpExceptionFilter } from './http-exception';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ bodyLimit: 124857600 }),
  );
  /** SET GLOBAL PREFIX */
  app.setGlobalPrefix('/api/shopfree');
  app.enableCors({
    origin: true,
    exposedHeaders: [
      'Content-Range',
    ],
    methods: 'GET,POST,PATCH,DELETE',
    credentials: true
  });

  /** SWAGGER */
  if (process.env.NODE_ENV == "development") {
    const config = new DocumentBuilder().setTitle(APP.title).setDescription(APP.description).setVersion(APP.version).addBearerAuth({ in: 'header', type: 'http' }).build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/shopfree/api-docs', app, document, {
      swaggerOptions: {
        persistAuthorization: true
      }
    })
  }

  app.useGlobalPipes(new GlobalValidationPipe({ validateCustomDecorators: true }));
  app.useGlobalFilters(new HttpExceptionFilter());

  /** ASSETS */
  app.useStaticAssets({
    root: join(__dirname, '..', 'public'),
    prefix: '/public/',
  });


  /** START APP */
  await app.listen(APP.port, '0.0.0.0');
  console.log(`Application start on port: ${APP.port}`);
}
bootstrap();
