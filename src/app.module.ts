import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { join } from 'path';
import { PostModule } from './modules/post/post.module';

@Module({
  imports: [
    UserModule,
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      // code first, auto generate schema.gql
      // typePaths: ['./**/*.graphql'],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // schema first
      // definitions: {
      //   path: join(process.cwd(), 'src/graphql.ts'),
      // },
    }),
    PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
