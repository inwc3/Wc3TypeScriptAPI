import { int, xy, xyz, rgb, rgba } from "./util";

declare enum ItemBoolField {
    ITEM_BF_DROPPED_WHEN_CARRIER_DIES,
    ITEM_BF_CAN_BE_DROPPED,
    ITEM_BF_PERISHABLE,
    ITEM_BF_INCLUDE_AS_RANDOM_CHOICE,
    ITEM_BF_USE_AUTOMATICALLY_WHEN_ACQUIRED,
    ITEM_BF_CAN_BE_SOLD_TO_MERCHANTS,
    ITEM_BF_ACTIVELY_USED
}

declare enum ItemIntField {
    ITEM_IF_LEVEL,
    ITEM_IF_NUMBER_OF_CHARGES,
    ITEM_IF_COOLDOWN_GROUP,
    ITEM_IF_MAX_HIT_POINTS,
    ITEM_IF_HIT_POINTS,
    ITEM_IF_PRIORITY,
    ITEM_IF_ARMOR_TYPE,
    ITEM_IF_TINTING_COLOR_RED,
    ITEM_IF_TINTING_COLOR_GREEN,
    ITEM_IF_TINTING_COLOR_BLUE,
    ITEM_IF_TINTING_COLOR_ALPHA
}

declare enum ItemRealField {
    ITEM_RF_SCALING_VALUE
}

declare enum ItemStringField {
    ITEM_SF_MODEL_USED
}

declare enum ItemType {
    ITEM_TYPE_PERMANENT,
    ITEM_TYPE_CHARGED,
    ITEM_TYPE_POWERUP,
    ITEM_TYPE_ARTIFACT,
    ITEM_TYPE_PURCHASABLE,
    ITEM_TYPE_CAMPAIGN,
    ITEM_TYPE_MISCELLANEOUS,
    ITEM_TYPE_UNKNOWN,
    ITEM_TYPE_ANY,
    ITEM_TYPE_TOME
}

export class ItemId {
    constructor(id: int) {
        this.id = id;
    }
    static byId(id: int): ItemId {
        return new ItemId(id);
    }

    id: int;

    isPowerup(): boolean {
        return IsItemIdPowerup(this.id);
    }
    isSellable(): boolean {
        return IsItemIdSellable(this.id);
    }
    isPawnable(): boolean {
        return IsItemIdPawnable(this.id);
    }
}

class ItemPool {
    constructor() {
        this.pool = CreateItemPool();
    }
    destroy(): void {
        DestroyItemPool(this.pool);
    }

    pool: itempool;

    addId(itemId: number, weight: number): void {
        ItemPoolAddItemType(this.pool, itemId, weight);
    }
    removeId(itemId: number): void {
        ItemPoolRemoveItemType(this.pool, itemId);
    }
    placeRandom(xy: xy): item {
        return PlaceRandomItem(this.pool, xy[0], xy[1]);
    }

    static pickRandomIdFromLevel(level: number): int {
        return ChooseRandomItem(level) as int;
    }
    static pickRandomIdFromTypeAndLevel(whichType: itemtype, level: number): int {
        return ChooseRandomItemEx(whichType, level) as int;
    }
}

class Item {
    static _byItem: Map<item, Item> =  new Map<item, Item>();

    static byItem(item: item): Item {
        return this._byItem.has(item) ? this._byItem.get(item) as Item : new Item(item);
    }
    constructor(item: item) {
        this._item = item;
    }
    static createXY(itemid: int, xy: xy) {
        return new Item(CreateItem(itemid, xy[0], xy[1]));
    }
    destroy(): void {
        RemoveItem(this._item);
    }

    _item: item;

    static filterItem(): Item {
        return this.byItem(GetFilterItem());
    }
    static enumItem(): Item {
        return this.byItem(GetEnumItem());
    }

    static soldItem(): Item {
        return this.byItem(GetSoldItem());
    }
    static manipulatedItem(): Item {
        return this.byItem(GetManipulatedItem());
    }
    static orderTargetItem(): Item {
        return this.byItem(GetOrderTargetItem());
    }
    static spellTargetItem(): Item {
        return this.byItem(GetSpellTargetItem());
    }

    booleanField(whichField: itembooleanfield): boolean {
        return BlzGetItemBooleanField(this._item, whichField);
    }
    intField(whichField: itemintegerfield): number {
        return BlzGetItemIntegerField(this._item, whichField);
    }
    realField(whichField: itemrealfield): number {
        return BlzGetItemRealField(this._item, whichField);
    }
    stringField(whichField: itemstringfield): string {
        return BlzGetItemStringField(this._item, whichField);
    }
    setBooleanField(whichField: itembooleanfield, value: boolean): boolean {
        return BlzSetItemBooleanField(this._item, whichField, value);
    }
    setIntField(whichField: itemintegerfield, value: number): boolean {
        return BlzSetItemIntegerField(this._item, whichField, value);
    }
    setRealField(whichField: itemrealfield, value: number): boolean {
        return BlzSetItemRealField(this._item, whichField, value);
    }
    setStringField(whichField: itemstringfield, value: string): boolean {
        return BlzSetItemStringField(this._item, whichField, value);
    }

    ability(abilId: number): ability {
        return BlzGetItemAbility(this._item, abilId);
    }
    abilityByIndex(index: number): ability {
        return BlzGetItemAbilityByIndex(this._item, index);
    }
    addAbility(abilId: number): boolean {
        return BlzItemAddAbility(this._item, abilId);
    }
    removeAbility(abilId: number): boolean {
        return BlzItemRemoveAbility(this._item, abilId);
    }
    setName(name: string): void {
        BlzSetItemName(this._item, name);
    }
    description(): string {
        return BlzGetItemDescription(this._item);
    }
    setDescription(description: string): void {
        BlzSetItemDescription(this._item, description);
    }
    tooltip(): string {
        return BlzGetItemTooltip(this._item);
    }
    setTooltip(tooltip: string): void {
        BlzSetItemTooltip(this._item, tooltip);
    }
    extendedTooltip(): string {
        return BlzGetItemExtendedTooltip(this._item);
    }
    setExtendedTooltip(extendedTooltip: string): void {
        BlzSetItemExtendedTooltip(this._item, extendedTooltip);
    }
    setIconPath(iconPath: string): void {
        BlzSetItemIconPath(this._item, iconPath);
    }
    iconPath(): string {
        return BlzGetItemIconPath(this._item);
    }
    player(): player {
        return GetItemPlayer(this._item);
    }
    typeId(): int {
        return GetItemTypeId(this._item) as int;
    }
    x(): number {
        return GetItemX(this._item);
    }
    y(): number {
        return GetItemY(this._item);
    }
    xy(): [number, number] {
        return [this.x(), this.y()];
    }
    setXYWithCollision(xy: [number, number]): void {
        SetItemPosition(this._item, xy[0], xy[1]);
    }
    setDropOnDeath(flag: boolean): void {
        SetItemDropOnDeath(this._item, flag);
    }
    setDroppable(flag: boolean): void {
        SetItemDroppable(this._item, flag);
    }
    setPlayer(whichPlayer: player, changeColor: boolean): void {
        SetItemPlayer(this._item, whichPlayer, changeColor);
    }
    isInvulnerable(): boolean {
        return IsItemInvulnerable(this._item);
    }
    setInvulnerable(flag: boolean): void {
        SetItemInvulnerable(this._item, flag);
    }
    isVisible(): boolean {
        return IsItemVisible(this._item);
    }
    setVisible(show: boolean): void {
        SetItemVisible(this._item, show);
    }
    isOwned(): boolean {
        return IsItemOwned(this._item);
    }

    isPowerup(): boolean {
        return IsItemPowerup(this._item);
    }
    isSellable(): boolean {
        return IsItemSellable(this._item);
    }
    isPawnable(): boolean {
        return IsItemPawnable(this._item);
    }
    setPawnable(flag: boolean): void {
        SetItemPawnable(this._item, flag);
    }

    level(): int {
        return GetItemLevel(this._item) as int;
    }
    type(): itemtype {
        return GetItemType(this._item);
    }
    setDropID(unitId: int): void {
        SetItemDropID(this._item, unitId);
    }
    name(): string {
        return GetItemName(this._item);
    }
    charges(): int {
        return GetItemCharges(this._item) as int;
    }
    setCharges(charges: int): void {
        SetItemCharges(this._item, charges);
    }

    static enumInRect(r: rect, filter: boolexpr, actionFunc: () => void): void {
        EnumItemsInRect(r, filter, actionFunc);
    }
}