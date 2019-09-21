import { IUser } from './iuser';

export interface IUserDB extends IUser {
  _id: string;
  password: string;
  passwordSalt: string;
  googleId: string;
  facebookId: string;
  checkPassword(passwordToCheck: string): boolean;
}
