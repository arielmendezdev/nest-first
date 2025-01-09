import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from '../database/models/task.model';
import { v4 } from 'uuid';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task) private readonly taskModel: typeof Task) {}

  async create(createTaskDto: CreateTaskDto) {
    const newTask = await this.taskModel.create(createTaskDto)
    return newTask;
  }

  async findAll(): Promise<Task[]> {
    return await this.taskModel.findAll()
  }

  async findOne(id: string) {
    const task = await this.taskModel.findByPk(id);

    if (task) return task;

    return 'Task not found'
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    try {
      const task = await this.taskModel.findByPk(id);
      task.set(updateTaskDto);
      await task.save();
      return task
    } catch (error) {
      return (error.parent.detail);
    }
  }

  async remove(id: string) {
    const task = await this.taskModel.findByPk(id)
    if(task) {
      await this.taskModel.destroy({ where: {id: id} })
      return "Success Delete"
    }

    return "No se encontro la tarea"
  }
}
