import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

 class UserDto {
  readonly name: string
  readonly email: string
 }

@Controller('user')
export class UserController {

  constructor(private readonly prisma: PrismaService) {}
  @Get()
  async users() {
    const allUsers = await this.prisma.user.findMany();
    return allUsers;
  }

  @Get(':id')
  async getOneUser(@Param() params) {
    const id:number = params.id;
    const user = await this.prisma.user.findOne({ where: { id: Number(id) } });
    return user;
  }

  @Post()
  async createUser(@Body() userDto: UserDto): Promise<any>{
    const {name, email} = userDto;
    const user = await this.prisma.user.create({ data: { name, email} })
    return user;
  }

}