import { SchemaTypeOpts, Schema, SchemaType } from 'mongoose';

export type PropertyDefinition = SchemaTypeOpts<any> | Schema | SchemaType;
