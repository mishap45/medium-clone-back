import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  userName: string;

  @Prop()
  password: string;

  @Prop()
  twitter?: string;

  @Prop()
  gitHub?: string;

  @Prop()
  linkedin?: string;

  @Prop()
  facebook?: string;

  @Prop()
  instagram?: string;

  @Prop()
  photo?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
