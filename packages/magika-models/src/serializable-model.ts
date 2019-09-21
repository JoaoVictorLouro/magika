export interface SerializableModel<T extends Object> {
  fromJSON(json: Object): T;
}
