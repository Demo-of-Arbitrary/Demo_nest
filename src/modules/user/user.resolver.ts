import { Query, Resolver, Int, Args } from '@nestjs/graphql'
import { UserService } from './user.service'
import { User } from './user.model'

@Resolver(of => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
  ){}

  @Query(returns => User)
  async user(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.userService.findOne(id)
  }
}