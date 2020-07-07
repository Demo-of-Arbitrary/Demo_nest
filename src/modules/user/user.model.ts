import { Field, Int, ObjectType } from '@nestjs/graphql';

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