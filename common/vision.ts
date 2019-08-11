declare enum FogState {
    FOG_OF_WAR_MASKED,
    FOG_OF_WAR_FOGGED,
    FOG_OF_WAR_VISIBLE
}

setFogStateRect(forWhichPlayer: player, whichState: fogstate, where: rect, useSharedVision: boolean): void
setFogStateRadius(forWhichPlayer: player, whichState: fogstate, centerx: number, centerY: number, radius: number, useSharedVision: boolean): void
setFogStateRadiusXY(forWhichPlayer: player, whichState: fogstate, centerxy: [number, number], radius: number, useSharedVision: boolean): void

fogMaskEnable(enable: boolean): void
isFogMaskEnabled(): boolean
fogEnable(enable: boolean): void
isFogEnabled(): boolean

class FogModifier {
    constructor(forWhichPlayer: player, whichState: fogstate, where: rect, useSharedVision: boolean, afterUnits: boolean): fogmodifier {
        this.mod = CreateFogModifierRect(forWhichPlayer, whichState, where, useSharedVision, afterUnits);
    }
    constructor(forWhichPlayer: player, whichState: fogstate, centerx: number, centerY: number, radius: number, useSharedVision: boolean, afterUnits: boolean): fogmodifier {
        this.mod = CreateFogModifierRadius(forWhichPlayer, whichState, centerX, centerY, radius, useSharedVision, afterUnits);
    }
    destroy(): void {
        DestroyFogModifier(this.mod);
    }

    start(): void {
        FogModifierStart(this.mod);
    }
    stop(): void {
        FogModifierStop(this.mod);
    }
}