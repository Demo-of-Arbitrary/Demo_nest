import { Field, Int, ObjectType, InputType } from '@nestjs/graphql';
import { Post } from '../post/post.model';

@ObjectType()
export class User {
  @Field(type => Int)
  id: number
  @Field()
  name: string
  @Field({
    nullable: true,
    description: `user email`,
    deprecationReason: 'no need'
  })
  email: string
  @Field(type =>[Post])
  posts: Post[]
}

@InputType()
export class updateUserInput {
  @Field()
  id: number
}

@InputType()
export class UserInput {
  @Field()
  name: string
  @Field()
  email: string
}