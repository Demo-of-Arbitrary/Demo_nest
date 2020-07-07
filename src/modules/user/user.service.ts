import { User } from './user.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  async findOne(id: number): Promise<User> {
    return { id: 1, name: 'mock' } as any;
  }
}