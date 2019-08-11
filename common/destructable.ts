import { int, xy, xyz, rgb, rgba } from "./util";

class Destructable {
    static _byDestr: Map<destructable, Destructable> = new Map<destructable, Destructable>();

    static create(objectid: int, xy: xy, face: number, scale: number, variation: int): Destructable {
        return new Destructable(CreateDestructable(objectid, xy[0], xy[1], face, scale, variation));
    }
    static createZ(objectid: int, xyz: xyz, face: number, scale: number, variation: int): Destructable {
        return new Destructable(CreateDestructableZ(objectid, xyz[0], xyz[1], xyz[2], face, scale, variation));
    }
    static createDead(objectid: int, xy: xy, face: number, scale: number, variation: int): Destructable {
        return new Destructable(CreateDeadDestructable(objectid, xy[0], xy[1], face, scale, variation));
    }
    static createDeadZ(objectid: int, xyz: xyz, face: number, scale: number, variation: int): Destructable {
        return new Destructable(CreateDeadDestructableZ(objectid, xyz[0], xyz[1], xyz[2], face, scale, variation));
    }
    constructor(destr: destructable) {
        this.destr = destr;
        Destructable._byDestr.set(destr, this);
    }
    static byDestr(destr: destructable): Destructable {
        return Destructable._byDestr.has(destr) ? Destructable._byDestr.get(destr) as Destructable : new Destructable(destr);
    }
    destroy(): void {
        RemoveDestructable(this.destr);
    }

    destr: destructable;

    static filterDestructable(): Destructable {
        return this.byDestr(GetFilterDestructable());
    }
    static enumDestructable(): Destructable {
        return this.byDestr(GetEnumDestructable());
    }

    static orderTargetDestructable(): Destructable {
        return this.byDestr(GetOrderTargetDestructable());
    }
    static spellTargetDestructable(): Destructable {
        return this.byDestr(GetSpellTargetDestructable());
    }
    static triggerDestructable(): Destructable {
        return this.byDestr(GetTriggerDestructable());
    }

    kill(): void {
        KillDestructable(this.destr);
    }
    setInvulnerable(flag: boolean): void {
        SetDestructableInvulnerable(this.destr, flag);
    }
    isInvulnerable(): boolean {
        return IsDestructableInvulnerable(this.destr);
    }
    typeId(): int {
        return GetDestructableTypeId(this.destr) as int;
    }
    x(): number {
        return GetDestructableX(this.destr);
    }
    y(): number {
        return GetDestructableY(this.destr);
    }
    xy(): [number, number] {
        return [this.x(), this.y()];
    }
    life(): number {
        return GetDestructableLife(this.destr);
    }
    setLife(life: number): void {
        SetDestructableLife(this.destr, life);
    }
    maxLife(): number {
        return GetDestructableMaxLife(this.destr);
    }
    setMaxLife(max: number): void {
        SetDestructableMaxLife(this.destr, max);
    }
    restoreLife(life: number, birth: boolean): void {
        DestructableRestoreLife(this.destr, life, birth);
    }

    setAnimation(whichAnimation: string): void {
        SetDestructableAnimation(this.destr, whichAnimation);
    }
    queueAnimation(whichAnimation: string): void {
        QueueDestructableAnimation(this.destr, whichAnimation);
    }
    setAnimationSpeed(speedFactor: number): void {
        SetDestructableAnimationSpeed(this.destr, speedFactor);
    }

    show(flag: boolean): void {
        ShowDestructable(this.destr, flag);
    }
    occluderHeight(): number {
        return GetDestructableOccluderHeight(this.destr);
    }
    setOccluderHeight(height: number): void {
        SetDestructableOccluderHeight(this.destr, height);
    }
    getName(): string {
        return GetDestructableName(this.destr);
    }

    static enumInRect(r: rect, filter: boolexpr, actionFunc: () => void): void {
        EnumDestructablesInRect(r, filter, actionFunc);
    }
}