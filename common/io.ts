declare class GameCache {
    static reloadGameCachesFromDisk(): boolean
    static init(campaignFile: string): gamecache
    
    save(): boolean

    putInt(missionKey: string, key: string, value: number): void
    putReal(missionKey: string, key: string, value: number): void
    putBoolean(missionKey: string, key: string, value: boolean): void
    putUnit(missionKey: string, key: string, whichUnit: unit): boolean
    putString(missionKey: string, key: string, value: string): boolean

    syncInt(missionKey: string, key: string): void
    syncReal(missionKey: string, key: string): void
    syncBoolean(missionKey: string, key: string): void
    syncUnit(missionKey: string, key: string): void
    syncString(missionKey: string, key: string): void

    containsInt(missionKey: string, key: string): boolean
    containsReal(missionKey: string, key: string): boolean
    containsBoolean(missionKey: string, key: string): boolean
    containsUnit(missionKey: string, key: string): boolean
    containsString(missionKey: string, key: string): boolean

    clear(): void
    clearMission(missionKey: string): void

    removeInt(missionKey: string, key: string): void
    removeReal(missionKey: string, key: string): void
    removeBoolean(missionKey: string, key: string): void
    removeUnit(missionKey: string, key: string): void
    removeString(missionKey: string, key: string): void

    loadInt(missionKey: string, key: string): number
    loadReal(missionKey: string, key: string): number
    loadBoolean(missionKey: string, key: string): boolean
    loadString(missionKey: string, key: string): string
    loadUnit(missionKey: string, key: string, forWhichPlayer: player, x: number, y: number, facing: number): unit
}

namespace Saving {
    static saveBasicFilename(): string
}