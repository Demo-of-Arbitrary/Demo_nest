import { Field, Int, ObjectType, InputType } from '@nestjs/graphql';

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