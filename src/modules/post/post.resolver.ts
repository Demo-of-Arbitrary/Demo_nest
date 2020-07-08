import { Resolver, Query, ResolveField, Parent, Args, Mutation } from '@nestjs/graphql';
import { Post, PostInput } from './post.model';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '../user/user.model';
import { PostCreateInput } from '@prisma/client';

@Resolver(of => Post)
export class PostResolver {
  constructor (private readonly prisma: PrismaService) { }
  @Query(returns => [Post], { name: 'posts' })
  async findAll() {
    return this.prisma.post.findMany({});
  }

  @ResolveField('author', type => User)
  async getAuthor(@Parent() post: Post) {
    console.log('post: ', post);
    const id = post.authorId
    return this.prisma.user.findOne({ where: { id } })
  }

  @Mutation(returns => Post)
  async createPost(@Args('post') post: PostCreateInput) {
    return this.prisma.post.create({ data: post })
  }
}