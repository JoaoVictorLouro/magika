import { IUser } from '../interfaces/iuser';

export class User implements IUser {
  public constructor(
    public _id: string = null,
    public firstName: string = null,
    public lastName: string = null,
    public email: string = null,
    public password: string = null,
    public enabled: boolean = true
  ){
  }

  public static fromJSON(json: Object): User{
    return Object.assign(new User(), json);
  }

  public toJSON(): Object {
    return JSON.parse(JSON.stringify(this));
  }
}
