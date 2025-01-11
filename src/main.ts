import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const sequelize = app.get(Sequelize);
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true // ESTO HACE QUE NO SE INGRESEN CAMPOS EXTRAS EN EL BODY SI NO ESTAN EN EL DTO
  }))
  await app.listen(process.env.PORT);
}
bootstrap();

export default bootstrap;