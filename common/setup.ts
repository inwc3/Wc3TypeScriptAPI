import { int, xy, xyz, rgb, rgba } from "./util";

declare enum AIDifficulty {
    AI_DIFFICULTY_NEWBIE,
    AI_DIFFICULTY_NORMAL,
    AI_DIFFICULTY_INSANE
}

declare enum StartLocPrio {
    MAP_LOC_PRIO_LOW,
    MAP_LOC_PRIO_HIGH,
    MAP_LOC_PRIO_NOT
}

declare enum MapDensity {
    MAP_DENSITY_NONE,
    MAP_DENSITY_LIGHT,
    MAP_DENSITY_MEDIUM,
    MAP_DENSITY_HEAVY
}

function teams(): int {
    return GetTeams() as int;
}
function players(): int {
    return GetPlayers() as int;
}
function isGameTypeSupported(whichGameType: gametype): boolean {
    return IsGameTypeSupported(whichGameType);
}
function setGameTypeSupported(whichGameType: gametype, value: boolean): void {
    SetGameTypeSupported(whichGameType, value);
}
function gameTypeSelected(): gametype {
    return GetGameTypeSelected();
}
function isMapFlagSet(whichMapFlag: mapflag): boolean {
    return IsMapFlagSet(whichMapFlag);
}
function gamePlacement(): placement {
    return GetGamePlacement();
}
function gameSpeed(): gamespeed {
    return GetGameSpeed();
}
function gameDifficulty(): gamedifficulty {
    return GetGameDifficulty();
}
function resourceDensity(): mapdensity {
    return GetResourceDensity();
}
function creatureDensity(): mapdensity {
    return GetCreatureDensity();
}
function startLocationX(whichStartLocation: int): number {
    return GetStartLocationX(whichStartLocation);
}
function startLocationY(whichStartLocation: int): number {
    return GetStartLocationY(whichStartLocation);
}
function startLocationXY(whichStartLocation: int): xy {
    return [startLocationX(whichStartLocation), startLocationY(whichStartLocation)];
}
function setMapName(name: string): void {
    SetMapName(name);
}
function setMapDescription(description: string): void {
    SetMapDescription(description);
}
function setTeams(teamcount: int): void {
    SetTeams(teamcount);
}
function setPlayers(playercount: int): void {
    SetPlayers(playercount);
}
function defineStartLocation(whichStartLoc: int, xy: xy): void {
    DefineStartLocation(whichStartLoc, xy[0], xy[1]);
}
function setStartLocPrioCount(whichStartLoc: int, prioSlotCount: int): void {
    SetStartLocPrioCount(whichStartLoc, prioSlotCount);
}
function setStartLocPrio(whichStartLoc: int, prioSlotIndex: int, otherStartLocIndex: int, priority: startlocprio): void {
    SetStartLocPrio(whichStartLoc, prioSlotIndex, otherStartLocIndex, priority);
}
function startLocPrioSlot(whichStartLoc: int, prioSlotIndex: int): int {
    return GetStartLocPrioSlot(whichStartLoc, prioSlotIndex) as int;
}
function startLocPrio(whichStartLoc: int, prioSlotIndex: int): startlocprio {
    return GetStartLocPrio(whichStartLoc, prioSlotIndex);
}

function setIntroShotText(introText: string): void {
    setIntroShotText(introText);
}
function setIntroShotModel(introModelPath: string): void {
    SetIntroShotModel(introModelPath);
}

function setResourceDensity(whichdensity: mapdensity): void {
    SetResourceDensity(whichdensity);
}
function setCreatureDensity(whichdensity: mapdensity): void {
    SetCreatureDensity(whichdensity);
}