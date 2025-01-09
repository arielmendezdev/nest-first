import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { Task } from './database/models/task.model';
import { User } from './database/models/users.model';
require('dotenv').config();

@Module({
  imports: [
    TasksModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      models: [Task, User],
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
