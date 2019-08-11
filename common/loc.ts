import { int, xy, xyz, rgb, rgba } from "./util";

class Loc {
    static createXY(xy: xy): Loc {
        return new Loc([xy[0], xy[1]]);
    }
    static createXYZ(xyz: xyz): Loc {
        return new Loc([xyz[0], xyz[1], xyz[2]]);
    }
    constructor(xyz: [number, number, number?]) {
        this._xyz = [xyz[0], xyz[1], (xyz[2] == undefined) ? 0 : xyz[2]];
    }

    _xyz: xyz;

    static orderPointX(): number {
        return GetOrderPointX();
    }
    static orderPointY(): number {
        return GetOrderPointY();
    }
    static orderPointXY(): xy {
        return [this.orderPointX(), this.orderPointY()];
    }
    static spellTargetX(): number {
        return GetSpellTargetX();
    }
    static spellTargetY(): number {
        return GetSpellTargetY();
    }
    static spellTargetXY(): xy {
        return [this.spellTargetX(), this.spellTargetY()];
    }
    static triggerPlayerMouseX(): number {
        return BlzGetTriggerPlayerMouseX();
    }
    static triggerPlayerMouseY(): number {
        return BlzGetTriggerPlayerMouseY();
    }
    static triggerPlayerMouseXY(): [number, number] {
        return [this.triggerPlayerMouseX(), this.triggerPlayerMouseY()];
    }

    static dummyLoc: location = Location(0, 0);

    static terrainHeight(xy: [number, number]): number {
        MoveLocation(this.dummyLoc, xy[0], xy[1]);

        return GetLocationZ(this.dummyLoc);
    }

    setX(newX: number): void {
        this._xyz[0] = newX;
    }
    setY(newY: number): void {
        this._xyz[1] = newY;
    }
    setZ(newZ: number): void {
        this._xyz[2] = newZ;
    }
    setXY(newXY: [number, number]): void {
        this._xyz[0] = newXY[0];
        this._xyz[1] = newXY[1];
    }
    setXYZ(newXYZ: [number, number, number]): void {
        this._xyz = newXYZ;
    }
    x(): number {
        return this._xyz[0];
    }
    y(): number {
        return this._xyz[1];
    }
    z(): number {
        return this._xyz[2];
    }
    xy(): [number, number] {
        return [this._xyz[0], this._xyz[1]];
    }
    xyz(): [number, number, number] {
        return this._xyz;
    }
}

class Rec {
    constructor(minMaxXY: [xy, xy]) {
        this._minXY = minMaxXY[0];
        this._maxXY = minMaxXY[1];
    }
    static createWorldBounds(): Rec {
        return this.WORLD_BOUNDS;
    }
    static createWorldBoundsMinMaxXY(): [xy, xy] {
        return this.WORLD_BOUNDS_XY;
    }

    static WORLD_BOUNDS_RECT: rect = GetWorldBounds();
    static WORLD_BOUNDS_XY: [xy, xy] = [[GetRectMinX(Rec.WORLD_BOUNDS_RECT), GetRectMinY(Rec.WORLD_BOUNDS_RECT)], [GetRectMaxX(Rec.WORLD_BOUNDS_RECT), GetRectMaxY(Rec.WORLD_BOUNDS_RECT)]];
    static WORLD_BOUNDS = new Rec(Rec.WORLD_BOUNDS_XY);

    _minXY: xy
    _maxXY: xy

    setMinMaxXY(minxy: xy, maxxy: xy): void {
        this._minXY = minxy;
        this._maxXY = maxxy;
    }
    setCenterXY(newCenterXY: xy): void {
        let w = this._maxXY[0] - this._minXY[0];
        let h = this._maxXY[1] - this._minXY[1];

        this._minXY = [newCenterXY[0] - w/2, newCenterXY[1] - h/2];
        this._maxXY = [newCenterXY[0] + w/2, newCenterXY[1] + h/2];
    }

    centerX(): number {
        return this.minX() + this.maxX() / 2;
    }
    centerY(): number {
        return this.minY() + this.maxY() / 2;
    }
    centerXY(): xy {
        return [this.centerX(), this.centerY()];
    }

    minX(): number {
        return this._minXY[0];
    }
    minY(): number {
        return this._minXY[1];
    }
    minXY(): xy {
        return this._minXY;
    }
    maxX(): number {
        return this._maxXY[0];
    }
    maxY(): number {
        return this._maxXY[1];
    }
    maxXY(): xy {
        return this._maxXY;
    }
}

class Region {
    static _byRegion: Map<region, Region> = new Map<region, Region>();

    constructor(region?: region) {
        this.region = (region == undefined) ? CreateRegion() : region;
    }
    static byRegion(region: region): Region {
        return Region._byRegion.has(region) ? Region._byRegion.get(region) as Region : new Region(region);
    }
    destroy(): void {
        RemoveRegion(this.region);
    }

    region: region;

    static triggeringRegion(): Region {
        return Region.byRegion(GetTriggeringRegion());
    }

    static dummyRect: rect = Rect(0, 0, 0, 0);

    addRect(r: rect): void {
        RegionAddRect(this.region, r);
    }
    clearRect(r: rect): void {
        RegionClearRect(this.region, r);
    }
    addCell(xy: xy): void {
        RegionAddCell(this.region, xy[0], xy[1]);
    }
    clearCell(xy: xy): void {
        RegionClearCell(this.region, xy[0], xy[1]);
    }

    containsXY(xy: xy): boolean {
        return IsPointInRegion(this.region, xy[0], xy[1]);
    }
    containsUnit(whichUnit: unit): boolean {
        return IsUnitInRegion(this.region, whichUnit);
    }
}