import { Card } from "..";

export class MagicCard extends Card {
    constructor(
        public colorCard: EMagicColorCard = null,
        public power: [number, number] = [0,0],
        public collectorNumber : number = null,
        public text: string = null,
        public type: EMagicTypeCard = null,
        public subtype: EMagicSubtypeCard = null,
        public manacost: any = null,
        public edition: any = null,
        public rarity: EMagicRarity = null
    ) {
        super();
    }

    public static fromJSON(json: Object): Card {
        return Object.assign(new Card(), json);
      }
    
      public toJSON(): Object {
        return JSON.parse(JSON.stringify(this));
      }
}