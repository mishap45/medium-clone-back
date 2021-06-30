import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostMedium } from './schemas/post.schema';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Get()
  getPosts(): Promise<PostMedium[]> {
    return this.postService.getPosts();
  }

  @Get(':_id')
  getPost(@Param('_id') _id: string): Promise<PostMedium> {
    return this.postService.getPost(_id);
  }

  @Get('/post-by-name/:name')
  getPostByName(@Param('name') name: string): Promise<PostMedium[]> {
    return this.postService.getPostByName(name);
  }

  @Get(':postCreator')
  getPostByCreator(
    @Param('postCreator') postCreator: string,
  ): Promise<PostMedium[]> {
    return this.postService.getPostByCreator(postCreator);
  }

  @Get(':topic')
  getPostByTopic(@Param('topic') topic: string): Promise<PostMedium[]> {
    return this.postService.getPostByTopic(topic);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createPost(@Body() createPostDto: CreatePostDto): Promise<PostMedium> {
    return this.postService.createPost(createPostDto);
  }
}
