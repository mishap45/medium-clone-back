import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getUser(_id: string): Promise<User> {
    return this.userModel.findById(_id);
  }

  async createUser(userDto: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(userDto);
    return newUser.save();
  }
}
