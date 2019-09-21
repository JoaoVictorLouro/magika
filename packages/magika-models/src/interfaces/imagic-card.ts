export interface IMagicCard {
    colorCard: EMagicColorCard,
        power: [number, number],
        collectorNumber : number,
        text: string,
        type: EMagicTypeCard,
        subtype: EMagicSubtypeCard,
        manacost: any,
        edition: any,
        rarity: EMagicRarity
}