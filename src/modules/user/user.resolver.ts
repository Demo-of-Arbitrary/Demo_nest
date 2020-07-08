import { Query, Resolver, Int, Args, Mutation, ResolveField, Parent } from '@nestjs/graphql'
import { UserService } from './user.service'
import { User, UserInput } from './user.model'
import { Post } from '../post/post.model';
import { PrismaService } from '../prisma/prisma.service';

@Resolver(of => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly prisma: PrismaService,
  ){}

  @Query(returns => User, {name: 'user'})
  async getUser(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.userService.findOne(id)
  }

  @Query(returns => [User], { name: 'users'})
  async getUsers(filter) {
    return this.userService.findMany(filter);
  }

  @ResolveField('posts', returns => [Post])
  async getPosts(@Parent() author: User) {
    const id = author.id
    return this.prisma.post.findMany({ where: { authorId: id }});
  }

  @Mutation(returns => User)
  async createUser(@Args({name: 'user'}) user: UserInput) {
    return this.userService.createOne({...user});
  }
}