import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true // ESTO HACE QUE NO SE INGRESEN CAMPOS EXTRAS EN EL BODY SI NO ESTAN EN EL DTO
  }))
  await app.listen(process.env.PORT);
}
bootstrap();
