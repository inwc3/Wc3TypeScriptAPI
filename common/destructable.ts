class Destructable {
    static filterDestructable(): destructable
    static enumDestructable(): destructable

    static orderTargetDestructable(): destructable
    static spellTargetDestructable(): destructable
    static triggerDestructable(): destructable

    static create(objectid: int, x: number, y: number, face: number, scale: number, variation: int): destructable
    static createZ(objectid: int, x: number, y: number, z: number, face: number, scale: number, variation: int): destructable
    static createDead(objectid: int, x: number, y: number, face: number, scale: number, variation: int): destructable
    static createDeadZ(objectid: int, x: number, y: number, z: number, face: number, scale: number, variation: int): destructable
    destroy(): void

    kill(): void
    setInvulnerable(flag: boolean): void
    isInvulnerable(): boolean
    enumsInRect(r: rect, filter: boolexpr, actionFunc: Function | null): void
    typeId(): int
    x(): number
    y(): number
    xy(): [number, number]
    setLife(life: number): void
    life(): number
    setMaxLife(max: number): void
    maxLife(): number
    restoreLife(life: number, birth: boolean): void
    queueAnimation(whichAnimation: string): void
    setAnimation(whichAnimation: string): void
    setAnimationSpeed(speedFactor: number): void
    show(flag: boolean): void
    occluderHeight(): number
    setOccluderHeight(height: number): void
    getName(): string
}