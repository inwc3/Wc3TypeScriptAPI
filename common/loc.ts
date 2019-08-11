class Location {
    static create(x: number, y: number): location
    destroy(): void

    static orderPointX(): number
    static orderPointY(): number
    static orderPointXY(): [number, number]
    static spellTargetX(): number
    static spellTargetY(): number
    static spellTargetXY(): [number, number]
    static triggerPlayerMouseX(): number
    static triggerPlayerMouseY(): number
    static triggerPlayerMouseXY(): [number, number]

    static location dummyLoc = Location(0, 0);

    static terrainHeight(xy: [number, number]): number {
        MoveLocation(this.dummyLoc, xy[0], xy[1]);

        return GetLocationZ(this.dummyLoc);
    }

    setX(newX: number): void
    sety(newY: number): void
    setZ(newZ: number): void
    setXY(newXY: [number, number]): void
    setXYZ(newXYZ: [number, number, number]): void
    x(): number
    y(): number
    z(): number
    xy(): [number, number]
    xyz(): [number, number, number]
}

class Rect {
    constructor()
    static createWorldBounds(): rect
    destroy(): void

    set(minx: number, miny: number, maxx: number, maxy: number): void
    setMinMax(minxy: [number, number], maxxy: [number, number]): void
    setCenterXY(newCenterXY: [number, number]): void

    centerX(): number
    centerY(): number
    center(): [number, number]

    minX(): number
    minY(): number
    min(): [number, number]
    maxX(): number
    maxY(): number
    max(): [number, number]
}

class Region {
    constructor(): region {
        this.region = CreateRegion();
    }
    destroy(): void {
        RemoveRegion(this.region);
    }

    static triggeringRegion(): region

    static dummyRect: rect = null;

    addRect(r: rect): void {
        RegionAddRect(this.region, r);
    }
    clearRect(r: rect): void
    addCell(x: number, y: number): void
    clearCell(x: number, y: number): void

    containsUnit(whichUnit: unit): boolean
    containsXY(x: number, y: number): boolean
}