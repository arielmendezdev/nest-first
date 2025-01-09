import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from 'src/database/models/users.model';
import { InjectModel } from '@nestjs/sequelize';


@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User) 
    private readonly userModel: typeof User
  ) {}

  async create(createUserDto: CreateUserDto){
    const newUser = await this.userModel.create(createUserDto);
    return newUser
  }

  async findAll() {
    const users = await this.userModel.findAll();
    return users
  }

  async findOne(id: string) {
    const user = await this.userModel.findByPk(id)
    if (user) return user
    return 'User not found'
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.userModel.findByPk(id)
      user.set(updateUserDto)
      await user.save()
      return user
    } catch (error) {
      return error
    }
  }

  async remove(id: string) {
    try {
      const user = await this.userModel.findByPk(id)
      user.set({
        ...UpdateUserDto,
        isDeleted: true
      })
      await user.save()
      return 'User deleted'
    } catch (error) {
        return error
    }
  }
}
