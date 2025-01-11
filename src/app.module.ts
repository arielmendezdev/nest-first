import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { Task } from './database/models/task.model';
import { User } from './database/models/users.model';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import pg from 'pg';
require('dotenv').config();

@Module({
  imports: [
    TasksModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      // host: process.env.PGHOST || process.env.DB_HOST,
      // username: process.env.PGUSER || process.env.DB_USERNAME,
      // database: process.env.PGDATABASE || process.env.DB_DATABASE,
      // password: process.env.PGPASSWORD || process.env.DB_PASSWORD,
      port: parseInt(process.env.DB_PORT),
      username: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      database: process.env.PGDATABASE,
      host: process.env.PGHOST,
      dialectModule: pg,
      dialectOptions: {
        ssl: {
          require: true, // Requiere SSL
          rejectUnauthorized: false, // Si es un certificado auto-firmado
        },
      },
      models: [Task, User],
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
