import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { Task } from './database/models/task.model';
import { User } from './database/models/users.model';
import { HomeModule } from './home/home.module';
require('dotenv').config();

@Module({
  imports: [
    TasksModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.PGHOST || process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.PGUSER || process.env.DB_USERNAME,
      database: process.env.PGDATABASE || process.env.DB_DATABASE,
      password: process.env.PGPASSWORD || process.env.DB_PASSWORD,
      models: [Task, User],
    }),
    UsersModule,
    HomeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
