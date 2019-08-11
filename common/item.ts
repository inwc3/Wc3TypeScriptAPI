declare enum ItemIntIntegerField {
    ITEM_IF_LEVEL: itemintegerfield
    ITEM_IF_NUMBER_OF_CHARGES: itemintegerfield
    ITEM_IF_COOLDOWN_GROUP: itemintegerfield
    ITEM_IF_MAX_HIT_POINTS: itemintegerfield
    ITEM_IF_HIT_POINTS: itemintegerfield
    ITEM_IF_PRIORITY: itemintegerfield
    ITEM_IF_ARMOR_TYPE: itemintegerfield
    ITEM_IF_TINTING_COLOR_RED: itemintegerfield
    ITEM_IF_TINTING_COLOR_GREEN: itemintegerfield
    ITEM_IF_TINTING_COLOR_BLUE: itemintegerfield
    ITEM_IF_TINTING_COLOR_ALPHA: itemintegerfield
}

declare enum ItemRealField {
    ITEM_RF_SCALING_VALUE: itemrealfield
}

declare enum ItemBoolField {
    ITEM_BF_DROPPED_WHEN_CARRIER_DIES: itembooleanfield
    ITEM_BF_CAN_BE_DROPPED: itembooleanfield
    ITEM_BF_PERISHABLE: itembooleanfield
    ITEM_BF_INCLUDE_AS_RANDOM_CHOICE: itembooleanfield
    ITEM_BF_USE_AUTOMATICALLY_WHEN_ACQUIRED: itembooleanfield
    ITEM_BF_CAN_BE_SOLD_TO_MERCHANTS: itembooleanfield
    ITEM_BF_ACTIVELY_USED: itembooleanfield
}

declare enum ItemStringField {
    ITEM_SF_MODEL_USED: itemstringfield
}

declare enum ItemType {
    ITEM_TYPE_PERMANENT: itemtype
    ITEM_TYPE_CHARGED: itemtype
    ITEM_TYPE_POWERUP: itemtype
    ITEM_TYPE_ARTIFACT: itemtype
    ITEM_TYPE_PURCHASABLE: itemtype
    ITEM_TYPE_CAMPAIGN: itemtype
    ITEM_TYPE_MISCELLANEOUS: itemtype
    ITEM_TYPE_UNKNOWN: itemtype
    ITEM_TYPE_ANY: itemtype
    ITEM_TYPE_TOME: itemtype
}

declare class ItemTypeId {
    isPowerup(itemId: int): boolean
    isSellable(itemId: int): boolean
    isPawnable(itemId: int): boolean
}

declare class ItemPool {
    constructor() {
        this.pool = CreateItemPool();
    }
    destroy(): void {
        DestroyItemPool(this.pool);
    }

    addId(itemId: number, weight: number): void
    removeId(itemId: number): void
    placeRandom(x: number, y: number): item

    static pickRandomIdFromLevel(level: number): number
    static pickRandomIdFromTypeAndLevel(whichType: itemtype, level: number): number
}

class Item {
    constructor(itemid: int, x: number, y: number) {
        this.item = CreateItem(itemid, x, y);
    }
    destroy(): void {
        RemoveItem(this.item);
    }

    static filterItem(): item
    static enumItem(): item

    static soldItem(): item
    static manipulatedItem(): item
    static orderTargetItem(): item
    static spellTargetItem(): item

    abilityByIndex(index: number): ability
    ability(abilCode: number): ability
    addAbility(abilCode: number): boolean

    booleanField(whichField: itembooleanfield): boolean
    intField(whichField: itemintegerfield): number
    realField(whichField: itemrealfield): number
    stringField(whichField: itemstringfield): string
    setBooleanField(whichField: itembooleanfield, value: boolean): boolean
    setIntegerField(whichField: itemintegerfield, value: number): boolean
    setRealField(whichField: itemrealfield, value: number): boolean
    setStringField(whichField: itemstringfield, value: string): boolean

    removeAbility(abilCode: number): boolean
    setName(name: string): void
    setDescription(description: string): void
    description(): string
    setTooltip(tooltip: string): void
    tooltip(): string
    setExtendedTooltip(extendedTooltip: string): void
    extendedTooltip(): string
    setIconPath(iconPath: string): void
    iconPath(): string
    player(): player
    typeId(): int
    x(): number
    y(): number
    xy(): [number, number]
    setPosition(x: number, y: number): void
    setDropOnDeath(flag: boolean): void
    setDroppable(flag: boolean): void
    setPawnable(flag: boolean): void
    setPlayer(whichPlayer: player, changeColor: boolean): void
    setInvulnerable(flag: boolean): void
    isInvulnerable(): boolean
    setVisible(show: boolean): void
    isVisible(): boolean
    isOwned(): boolean
    isPowerup(): boolean
    isSellable(): boolean
    isPawnable(): boolean
    enumsInRect(r: rect, filter: boolexpr, actionFunc: () => void): void
    level(): int
    type(): itemtype
    setDropID(unitId: int): void
    name(): string
    charges(): int
    setCharges(charges: int): void
}