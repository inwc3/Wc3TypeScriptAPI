import { int, xy, xyz, rgb, rgba } from "./util";

declare enum FogState {
    FOG_OF_WAR_MASKED,
    FOG_OF_WAR_FOGGED,
    FOG_OF_WAR_VISIBLE
}

function setFogStateRect(forWhichPlayer: player, whichState: fogstate, where: rect, useSharedVision: boolean): void {
    SetFogStateRect(forWhichPlayer, whichState, where, useSharedVision);
}
function setFogStateRadius(forWhichPlayer: player, whichState: fogstate, centerxy: xy, radius: number, useSharedVision: boolean): void {
    SetFogStateRadius(forWhichPlayer, whichState, centerxy[0], centerxy[1], radius, useSharedVision);
}

function isFogEnabled(): boolean {
    return IsFogEnabled();
}
function enableFog(enable: boolean): void {
    FogEnable(enable);
}
function isFogMaskEnabled(): boolean {
    return IsFogMaskEnabled();
}
function enableFogMask(enable: boolean): void {
    FogMaskEnable(enable);
}

class FogModifier {
    static createRect(forWhichPlayer: player, whichState: fogstate, where: rect, useSharedVision: boolean, afterUnits: boolean): FogModifier {
        return new FogModifier(CreateFogModifierRect(forWhichPlayer, whichState, where, useSharedVision, afterUnits));
    }
    static createCircle(forWhichPlayer: player, whichState: fogstate, centerxy: xy, radius: number, useSharedVision: boolean, afterUnits: boolean): FogModifier {
        return new FogModifier(CreateFogModifierRadius(forWhichPlayer, whichState, centerxy[0], centerxy[1], radius, useSharedVision, afterUnits));
    }
    constructor(mod: fogmodifier) {
        this.mod = mod;
    }
    destroy(): void {
        DestroyFogModifier(this.mod);
    }

    mod: fogmodifier;

    start(): void {
        FogModifierStart(this.mod);
    }
    stop(): void {
        FogModifierStop(this.mod);
    }
}