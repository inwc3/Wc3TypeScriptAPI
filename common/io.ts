import { angle } from "./math";
import { xy, int } from "./util";

type keypair = [string, string];

class GameCache {
    static reloadGameCachesFromDisk(): boolean {
        return ReloadGameCachesFromDisk();
    }
    constructor(gc: gamecache) {
        this.gc = gc;
    }
    static create(campaignFile: string): GameCache {
        return new GameCache(InitGameCache(campaignFile));
    }

    gc: gamecache;
    
    save(): boolean {
        return SaveGameCache(this.gc);
    }

    setBoolean(keypair: keypair, value: boolean): void {
        StoreBoolean(this.gc, keypair[0], keypair[1], value);
    }
    setInt(keypair: keypair, value: number): void {
        StoreInteger(this.gc, keypair[0], keypair[1], value);
    }
    setReal(keypair: keypair, value: number): void {
        StoreReal(this.gc, keypair[0], keypair[1], value);
    }
    setString(keypair: keypair, value: string): boolean {
        return StoreString(this.gc, keypair[0], keypair[1], value);
    }
    setUnit(keypair: keypair, value: unit): boolean {
        return StoreUnit(this.gc, keypair[0], keypair[1], value);
    }

    syncBoolean(keypair: keypair): void {
        SyncStoredBoolean(this.gc, keypair[0], keypair[1]);
    }
    syncInt(keypair: keypair): void {
        SyncStoredInteger(this.gc, keypair[0], keypair[1]);
    }
    syncReal(keypair: keypair): void {
        SyncStoredReal(this.gc, keypair[0], keypair[1]);
    }
    syncString(keypair: keypair): void {
        SyncStoredString(this.gc, keypair[0], keypair[1]);
    }
    syncUnit(keypair: keypair): void {
        SyncStoredUnit(this.gc, keypair[0], keypair[1]);
    }

    containsBoolean(keypair: keypair): boolean {
        return HaveStoredBoolean(this.gc, keypair[0], keypair[1]);
    }
    containsInt(keypair: keypair): boolean {
        return HaveStoredInteger(this.gc, keypair[0], keypair[1]);
    }
    containsReal(keypair: keypair): boolean {
        return HaveStoredReal(this.gc, keypair[0], keypair[1]);
    }
    containsString(keypair: keypair): boolean {
        return HaveStoredString(this.gc, keypair[0], keypair[1]);
    }
    containsUnit(keypair: keypair): boolean {
        return HaveStoredUnit(this.gc, keypair[0], keypair[1]);
    }

    clear(): void {
        FlushGameCache(this.gc);
    }
    clearMission(missionKey: string): void {
        FlushStoredMission(this.gc, missionKey);
    }

    removeBoolean(keypair: keypair): void {
        FlushStoredBoolean(this.gc, keypair[0], keypair[1]);
    }
    removeInt(keypair: keypair): void {
        FlushStoredInteger(this.gc, keypair[0], keypair[1]);
    }
    removeReal(keypair: keypair): void {
        FlushStoredReal(this.gc, keypair[0], keypair[1]);
    }
    removeString(keypair: keypair): void {
        FlushStoredString(this.gc, keypair[0], keypair[1]);
    }
    removeUnit(keypair: keypair): void {
        FlushStoredUnit(this.gc, keypair[0], keypair[1]);
    }

    loadBoolean(keypair: keypair): boolean {
        return GetStoredBoolean(this.gc, keypair[0], keypair[1]);
    }
    loadInt(keypair: keypair): int {
        return GetStoredInteger(this.gc, keypair[0], keypair[1]) as int;
    }
    loadReal(keypair: keypair): number {
        return GetStoredReal(this.gc, keypair[0], keypair[1]);
    }
    loadString(keypair: keypair): string {
        return GetStoredString(this.gc, keypair[0], keypair[1]);
    }
    loadUnit(keypair: keypair, forWhichPlayer: player, xy: xy, facing: angle): unit {
        return RestoreUnit(this.gc, keypair[0], keypair[1], forWhichPlayer, xy[0], xy[1], facing);
    }
}

namespace Saving {
    function saveBasicFilename(): string {
        return GetSaveBasicFilename();
    }
}

namespace IO {
    function displayTextToPlayer(toPlayer: player, xy: [number, number], message: string, duration?: number): void {
        if (duration == undefined) {
            DisplayTextToPlayer(toPlayer, xy[0], xy[1], message);
        } else {
            DisplayTimedTextToPlayer(toPlayer, xy[0], xy[1], duration, message);
        }
    }
    function displayTimedTextFromPlayer(toPlayer: player, xy: [number, number], message: string, duration: number): void {
        DisplayTimedTextFromPlayer(toPlayer, xy[0], xy[1], duration, message);
    }
    function clearTextMessages(): void {
        ClearTextMessages();
    }
    function displayChatMessage(whichPlayer: player, recipient: number, message: string): void {
        BlzDisplayChatMessage(whichPlayer, recipient, message);
    }

    function preload(filename: string): void {
        Preload(filename);
    }
    function preloadEnd(timeout: number): void {
        PreloadEnd(timeout);
    }
    function preloadStart(): void {
        PreloadStart();
    }
    function preloadRefresh(): void {
        PreloadRefresh();
    }
    function preloadEndEx(): void {
        PreloadEndEx();
    }
    function preloadGenClear(): void {
        PreloadGenClear();
    }
    function preloadGenStart(): void {
        PreloadGenStart();
    }
    function preloadGenEnd(filename: string): void {
        PreloadGenEnd(filename);
    }
    function preloader(filename: string): void {
        Preloader(filename);
    }
}

function sendSyncData(prefix: string, data: string): boolean {
    return BlzSendSyncData(prefix, data);
}
function triggerSyncPrefix(): string {
    return BlzGetTriggerSyncPrefix();
}
function triggerSyncData(): string {
    return BlzGetTriggerSyncData();
}