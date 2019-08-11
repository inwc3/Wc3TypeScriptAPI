class TerrainDeform {
    static createCrater(x: number, y: number, radius: number, depth: number, duration: number, permanent: boolean): terraindeformation
    static createRipple(x: number, y: number, radius: number, depth: number, duration: number, count: number, spaceWaves: number, timeWaves: number, radiusStartPct: number, limitNeg: boolean): terraindeformation
    static createWave(x: number, y: number, dirX: number, dirY: number, distance: number, speed: number, radius: number, depth: number, trailTime: number, count: number): terraindeformation
    static createRandom(x: number, y: number, radius: number, minDelta: number, maxDelta: number, duration: number, updateInterval: number): terraindeformation
    stop(duration: number): void

    static terrainDeformStopAll(): void
}

declare function terrainCliffLevel(x: number, y: number): number
declare function terrainCliffLevelXY(xy: [number, number]): number
declare function setWaterBaseColor(red: number, green: number, blue: number, alpha: number): void
declare function setWaterDeforms(val: boolean): void
declare function terrainType(x: number, y: number): int
declare function terrainTypeXY(xy: [number, number]): int
declare function terrainVariance(x: number, y: number): int
declare function setTerrainType(x: number, y: number, terrainType: number, variation: number, area: number, shape: number): void
declare function isTerrainPathable(x: number, y: number, t: pathingtype): boolean
declare function setTerrainPathable(x: number, y: number, t: pathingtype, flag: boolean): void

declare function setBlight(whichPlayer: player, x: number, y: number, radius: number, addBlight: boolean): void
declare function setBlightRect(whichPlayer: player, r: rect, addBlight: boolean): void
declare function setBlightPoint(whichPlayer: player, x: number, y: number, addBlight: boolean): void
declare function setBlightLoc(whichPlayer: player, whichLocation: location, radius: number, addBlight: boolean): void
declare function isPointBlighted(x: number, y: number): boolean

declare function setDoodadAnimation(x: number, y: number, radius: number, doodadID: number, nearestOnly: boolean, animName: string, animRandom: boolean): void
declare function setDoodadAnimationRect(r: rect, doodadID: number, animName: string, animRandom: boolean): void

class TerrainFog {
    constructor(a: number, b: number, c: number, d: number, e: number): void {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.e = e;
        this.extended = false;
    }
    constructor(style: number, zstart: number, zend: number, density: number, red: number, green: number, blue: number) {
        this.style = style;
        this.zStart = zstart;
        this.zEnd = zend;
        this.density = density;
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.extended = true;
    }

    play() {
        if (this.extended) {
            SetTerrainFogEx(this.style, this.zStart, this.zEnd, this.density, this.red, this.green, this.blue);
        } else {
            SetTerrainFog(this.a, this.b, this.c, this.d, this.e);
        }
    }
    reset(): void {
        ResetTerrainFog();
    }
    function setUnit(a: number, b: number, c: number, d: number, e: number): void
}

declare class Trackable {
    constructor(trackableModelPath: string, x: number, y: number, facing: number): trackable {
        CreateTrackable(trackableModelPath, x, y, facing);
    }

    static triggeringTrackable(): trackable
}

declare class Image {
    constructor(file: string, sizeX: number, sizeY: number, sizeZ: number, posX: number, posY: number, posZ: number, originX: number, originY: number, originZ: number, imageType: number): image {
        this.img = CreateImage(file, sizeX, sizeY, sizeZ, posX, posY, posZ, originX, originY, originZ, imageType);
    }
    destroy(): void {
        DestroyImage(img);
    }

    show(flag: boolean): void
    setConstHeight(flag: boolean, height: number): void
    setPos(x: number, y: number, z: number): void
    setPosXY(xy: [number, number]): void
    setPosXYZ(xyz: [number, number, number]): void
    setColor(red: number, green: number, blue: number, alpha: number): void
    setRender(flag: boolean): void
    setRenderAlways(flag: boolean): void
    setAboveWater(flag: boolean, useWaterAlpha: boolean): void
    setType(imageType: number): void
}

declare class Ubersplat {
    constructor(x: number, y: number, name: string, red: number, green: number, blue: number, alpha: number, forcePaused: boolean, noBirthTime: boolean): ubersplat {
        this.splat = CreateUbersplat(x, y, name, red, green, blue, alpha, forcePaused, noBirthTime);
    }
    destroy(): void {
        FinishUbersplat(this.splat);
    }

    reset(): void
    finish(): void
    show(flag: boolean): void
    setRender(flag: boolean): void
    setRenderAlways(flag: boolean): void
}