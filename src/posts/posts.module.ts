import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PostMedium, PostMediumSchema } from './schemas/post.schema';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [
    MongooseModule.forFeature([
      { name: PostMedium.name, schema: PostMediumSchema },
    ]),
  ],
})
export class PostsModule {}
