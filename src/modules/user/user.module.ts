import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [UserController],
  providers: [UserResolver, UserService, PrismaService]
})
export class UserModule {}
