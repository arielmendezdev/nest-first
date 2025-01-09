import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Task } from '../database/models/task.model';

@Module({
  imports: [SequelizeModule.forFeature([Task])],
  exports: [SequelizeModule],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
