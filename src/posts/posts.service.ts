import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostMedium, PostDocument } from './schemas/post.schema';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(PostMedium.name) private postModel: Model<PostDocument>,
  ) {}

  async getPosts(): Promise<PostMedium[]> {
    return this.postModel.find().exec();
  }

  async getPost(_id: string): Promise<PostMedium> {
    return this.postModel.findById(_id);
  }

  async getPostByName(name: string): Promise<PostMedium[]> {
    return this.postModel.find({ name });
  }

  async getPostByCreator(postCreator: string): Promise<PostMedium[]> {
    return this.postModel.find({ postCreator });
  }

  async getPostByTopic(topic: string): Promise<PostMedium[]> {
    return this.postModel.find({ topic });
  }

  async createPost(postDto: CreatePostDto): Promise<PostMedium> {
    const newPost = new this.postModel(postDto);
    return newPost.save();
  }
}
