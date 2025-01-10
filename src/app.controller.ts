import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  Req,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll() {
    return "Wellcome to de nest page"
    // return this.appService.findAll();
  }

}
