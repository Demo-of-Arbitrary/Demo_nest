import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class Post {
  @Field(type => Int)
  id: number
  @Field(type => Int)
  authorId: number
  @Field()
  title: string
  @Field()
  content: string
  @Field(type => User)
  author: User
}

@InputType()
export class PostInput {
  @Field(type => Int)
  authorId: number
  @Field()
  title: string
  @Field()
  content: string
  @Field()
  created_at: Date
  @Field()
  author: User
}