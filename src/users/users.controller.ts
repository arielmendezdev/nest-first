import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response, Request } from 'express';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(
    @Body() createUserDto: CreateUserDto,
    @Res() res: Response,
    @Req() req: Request,
  ) {
    try {
      const newUser = await this.usersService.create(createUserDto);
      res.status(200).json(newUser);
    } catch (error) {
      return res.send(error);
    }
  }

  @Get()
  findAll(@Res() res: Response, @Req() req: Request) {
    const users = this.usersService.findAll();
    res.status(200).json(users);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Res() res: Response, @Req() req: Request) {
    const user = this.usersService.findOne(id);
    res.status(200).json(user);
  }
  
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @Res() res: Response,
    @Req() req: Request,
  ) {
    const userUpdate = this.usersService.update(id, updateUserDto);
    res.status(200).json(userUpdate);
  }
  
  @Delete(':id')
  remove(@Param('id') id: string, @Res() res: Response, @Req() req: Request) {
    const userDeleted = this.usersService.remove(id);
    res.status(200).json(userDeleted);
  }
}
