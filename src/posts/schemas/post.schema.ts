import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostDocument = PostMedium & Document;

@Schema()
export class PostMedium {
  @Prop()
  name: string;

  @Prop()
  image: string;

  @Prop()
  topic: string;

  @Prop()
  postCreator: string;

  @Prop()
  date: string;

  @Prop()
  timeToRead: string;

  @Prop()
  post: string;
}

export const PostMediumSchema = SchemaFactory.createForClass(PostMedium);
