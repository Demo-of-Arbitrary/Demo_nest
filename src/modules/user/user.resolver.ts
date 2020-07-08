import { Query, Resolver, Int, Args, Mutation } from '@nestjs/graphql'
import { UserService } from './user.service'
import { User, UserInput } from './user.model'

@Resolver(of => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
  ){}

  @Query(returns => User, {name: 'user'})
  async getUser(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.userService.findOne(id)
  }

  @Query(returns => [User], { name: 'users'})
  async getUsers(filter) {
    return this.userService.findMany(filter);
  }

  @Mutation(returns => User)
  async createUser(@Args({name: 'user'}) user: UserInput) {
    return this.userService.createOne({...user});
  }
}