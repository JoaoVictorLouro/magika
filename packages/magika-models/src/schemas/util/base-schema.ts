import { PropertyDefinition } from './property-definition';

export type BaseSchema<T> = {
  [key in keyof T]: PropertyDefinition;
}
