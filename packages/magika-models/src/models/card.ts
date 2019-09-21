import { Double } from "bson";

export class Card {
  constructor(
    public id: number = null,
    public name: string = null,
    public description: string = null,
    public encodedImage: string = null,
    public price: number = null
  ) {
  }

  public static fromJSON(json: Object): Card {
    return Object.assign(new Card(), json);
  }

  public toJSON(): Object {
    return JSON.parse(JSON.stringify(this));
  }
}
