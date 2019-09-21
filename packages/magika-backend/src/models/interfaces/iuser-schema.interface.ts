import { SchemaDefinition } from 'mongoose';
import { PropertyDefinition } from './util/property-definition';
import { BaseSchema } from './util/base-schema';
import { IUserDB } from './iuser-db.interface';

export interface IUserSchema extends SchemaDefinition, BaseSchema<IUserDB> {
  password: PropertyDefinition;
  passwordSalt: PropertyDefinition;
  googleId: PropertyDefinition;
  facebookId: PropertyDefinition;
}
