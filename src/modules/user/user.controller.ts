import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

 class UserDto {
  readonly name: string
  readonly email: string
 }

@Controller('user')
export class UserController {
  @Get()
  async users() {
    const allUsers = await prisma.user.findMany();
    return allUsers;
  }

  @Get(':id')
  async getOneUser(@Param() params) {
    const id:number = params.id;
    const user = await prisma.user.findOne({ where: { id: Number(id) } });
    return user;
  }

  @Post()
  async createUser(@Body() userDto: UserDto): Promise<any>{
    console.log(userDto);
    const {name, email} = userDto;
    const user = await prisma.user.create({ data: { name, email} })
    return user;
  }

}