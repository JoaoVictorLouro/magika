import Mongoose from 'mongoose';
import { IUserSchema } from '../interfaces/iuser-schema.interface';

const schema: IUserSchema = {
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  passwordSalt: String,
  enabled: Boolean,
  googleId: String,
  facebookId: String,
};

export const UserSchema = new Mongoose.Schema(schema);

UserSchema.methods.checkPassword = function (passwordToCheck: string): boolean {
  return this.password === passwordToCheck;
}

export const UserMongooseModel = Mongoose.model(
  "users",
  UserSchema
);
