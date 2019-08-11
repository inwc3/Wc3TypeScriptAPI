import { int, xy, xyz, rgb, rgba } from "./util";

class TerrainDeform {
    static createCrater(xy: xy, radius: number, depth: number, duration: number, permanent: boolean): TerrainDeform {
        return new TerrainDeform(TerrainDeformCrater(xy[0], xy[1], radius, depth, duration, permanent));
    }
    static createRipple(xy: xy, radius: number, depth: number, duration: number, count: number, spaceWaves: number, timeWaves: number, radiusStartPct: number, limitNeg: boolean): TerrainDeform {
        return new TerrainDeform(TerrainDeformRipple(xy[0], xy[1], radius, depth, duration, count, spaceWaves, timeWaves, radiusStartPct, limitNeg));
    }
    static createWave(xy: xy, dirXY: xy, distance: number, speed: number, radius: number, depth: number, trailTime: number, count: number): TerrainDeform {
        return new TerrainDeform(TerrainDeformWave(xy[0], xy[1], dirXY[0], dirXY[1], distance, speed, radius, depth, trailTime, count));
    }
    static createRandom(xy: xy, radius: number, minDelta: number, maxDelta: number, duration: number, updateInterval: number): TerrainDeform {
        return new TerrainDeform(TerrainDeformRandom(xy[0], xy[1], radius, minDelta, maxDelta, duration, updateInterval));
    }
    constructor(deform: terraindeformation) {
        this.deform = deform;
    }
    stop(duration?: number): void {
        TerrainDeformStop(this.deform, duration == undefined ? 0 : duration);
    }

    deform: terraindeformation;

    static terrainDeformStopAll(): void {
        TerrainDeformStopAll();
    }
}

function terrainCliffLevelXY(xy: xy): number {
    return GetTerrainCliffLevel(xy[0], xy[1]);
}
function setWaterBaseColor(rgba: rgba): void {
    SetWaterBaseColor(rgba[0], rgba[1], rgba[2], rgba[3]);
}
function setWaterDeforms(val: boolean): void {
    SetWaterDeforms(val);
}
function terrainTypeXY(xy: xy): int {
    return GetTerrainType(xy[0], xy[1]) as int;
}
function terrainVarianceXY(xy: xy): int {
    return GetTerrainVariance(xy[0], xy[1]) as int;
}
function setTerrainTypeXY(xy: xy, terrainType: number, variation: number, area: number, shape: number): void {
    SetTerrainType(xy[0], xy[1], terrainType, variation, area, shape);
}
function isTerrainPathableXY(xy: xy, t: pathingtype): boolean {
    return IsTerrainPathable(xy[0], xy[1], t);
}
function setTerrainPathableXY(xy: xy, t: pathingtype, flag: boolean): void {
    SetTerrainPathable(xy[0], xy[1], t, flag);
}

function isBlightedXY(xy: xy): boolean {
    return IsPointBlighted(xy[0], xy[1]);
}
function setBlightXY(whichPlayer: player, xy: xy, addBlight: boolean): void {
    SetBlightPoint(whichPlayer, xy[0], xy[1], addBlight);
}
function setBlightCircle(whichPlayer: player, xy: xy, radius: number, addBlight: boolean): void {
    SetBlight(whichPlayer, xy[0], xy[1], radius, addBlight);
}
function setBlightRect(whichPlayer: player, r: rect, addBlight: boolean): void {
    SetBlightRect(whichPlayer, r, addBlight);
}

function setDoodadAnimCircle(xy: xy, radius: number, doodadID: number, nearestOnly: boolean, animName: string, animRandom: boolean): void {
    SetDoodadAnimation(xy[0], xy[1], radius, doodadID, nearestOnly, animName, animRandom);
}
function setDoodadAnimRect(r: rect, doodadID: number, animName: string, animRandom: boolean): void {
    SetDoodadAnimationRect(r, doodadID, animName, animRandom);
}

class TerrainFog {
    static create(style: int, zStartEnd: [number, number], density: number, rgb: rgb): TerrainFog {
        let self: TerrainFog = new TerrainFog();

        self.style = style;
        self.zStartEnd = zStartEnd;
        self.density = density;
        self.rgb = rgb;

        return self;
    }
    constructor() {
        this.style = 0 as int;
        this.zStartEnd = [0, 0];
        this.density = 0;
        this.rgb = [0, 0, 0];
    }

    style: int;
    zStartEnd: [number, number];
    density: number;
    rgb: rgb;

    play() {
        SetTerrainFogEx(this.style, this.zStartEnd[0], this.zStartEnd[1], this.density, this.rgb[0], this.rgb[1], this.rgb[2]);
    }
    reset(): void {
        ResetTerrainFog();
    }

    static setUnit(a: number, b: number, c: number, d: number, e: number): void {
        SetUnitFog(a, b, c, d, e);
    }
}

declare enum PathingType {
    PATHING_TYPE_ANY,
    PATHING_TYPE_WALKABILITY,
    PATHING_TYPE_FLYABILITY,
    PATHING_TYPE_BUILDABILITY,
    PATHING_TYPE_PEONHARVESTPATHING,
    PATHING_TYPE_BLIGHTPATHING,
    PATHING_TYPE_FLOATABILITY,
    PATHING_TYPE_AMPHIBIOUSPATHING
}

declare enum PathingFlag {
    UNWALKABLE,
    UNFLYABLE,
    UNBUILDABLE,
    UNPEONHARVEST,
    BLIGHTED,
    UNFLOATABLE,
    UNAMPHIBIOUS,
    UNITEMPLACABLE
}