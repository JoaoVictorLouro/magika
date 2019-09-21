import { IUser } from "magika-models";

export interface IUserDB extends IUser {
  password: string;
  passwordSalt: string;
  googleId: string;
  facebookId: string;
}
