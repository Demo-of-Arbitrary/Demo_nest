import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, UserInput } from './user.model';

@Injectable()
export class UserService {
  constructor (private readonly prisma: PrismaService) { }
  async findOne(id: number) {
    return await this.prisma.user.findOne({ where: { id } })
  }

  async findMany(filter) {
    const users = await this.prisma.user.findMany({ where: { ...filter } })
    return users;
  }

  async createOne(user: UserInput) {
    const result = await this.prisma.user.create({data: user})
    return result;
  }
}