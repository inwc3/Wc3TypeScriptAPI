declare enum StartLocPrio {
    MAP_LOC_PRIO_LOW: startlocprio
    MAP_LOC_PRIO_HIGH: startlocprio
    MAP_LOC_PRIO_NOT: startlocprio
}

declare enum MapDensity {
    MAP_DENSITY_NONE: mapdensity
    MAP_DENSITY_LIGHT: mapdensity
    MAP_DENSITY_MEDIUM: mapdensity
    MAP_DENSITY_HEAVY: mapdensity
}

declare enum GameDifficulty {
    MAP_DIFFICULTY_EASY: gamedifficulty
    MAP_DIFFICULTY_NORMAL: gamedifficulty
    MAP_DIFFICULTY_HARD: gamedifficulty
    MAP_DIFFICULTY_INSANE: gamedifficulty
}

declare enum GameSpeed {
    MAP_SPEED_SLOWEST: gamespeed
    MAP_SPEED_SLOW: gamespeed
    MAP_SPEED_NORMAL: gamespeed
    MAP_SPEED_FAST: gamespeed
    MAP_SPEED_FASTEST: gamespeed
}

declare enum GameType {
    GAME_TYPE_MELEE: gametype
    GAME_TYPE_FFA: gametype
    GAME_TYPE_USE_MAP_SETTINGS: gametype
    GAME_TYPE_BLIZ: gametype
    GAME_TYPE_ONE_ON_ONE: gametype
    GAME_TYPE_TWO_TEAM_PLAY: gametype
    GAME_TYPE_THREE_TEAM_PLAY: gametype
    GAME_TYPE_FOUR_TEAM_PLAY: gametype
}

declare enum Version {
    VERSION_REIGN_OF_CHAOS,
    VERSION_FROZEN_THRONE
}

declare namespace VersionHelper {
    declare function VersionGet(): version
    declare function VersionCompatible(whichVersion: version): boolean
    declare function VersionSupported(whichVersion: version): boolean
}

declare function EndGame(doScoreScreen: boolean): void
declare function ChangeLevel(newLevel: string, doScoreScreen: boolean): void
declare function RestartGame(doScoreScreen: boolean): void
declare function ReloadGame(): void
declare function SetCampaignMenuRace(r: race): void
declare function SetCampaignMenuRaceEx(campaignIndex: number): void
declare function ForceCampaignSelectScreen(): void
declare function LoadGame(saveFileName: string, doScoreScreen: boolean): void
declare function SaveGame(saveFileName: string): void
declare function RenameSaveDirectory(sourceDirName: string, destDirName: string): boolean
declare function RemoveSaveDirectory(sourceDirName: string): boolean
declare function CopySaveGame(sourceSaveName: string, destSaveName: string): boolean
declare function SaveGameExists(saveName: string): boolean
declare function SyncSelections(): void
declare function SetFloatGameState(whichFloatGameState: fgamestate, value: number): void
declare function GetFloatGameState(whichFloatGameState: fgamestate): number
declare function SetIntegerGameState(whichIntegerGameState: igamestate, value: number): void
declare function GetIntegerGameState(whichIntegerGameState: igamestate): number
declare function SetTutorialCleared(cleared: boolean): void
declare function SetMissionAvailable(campaignNumber: number, missionNumber: number, available: boolean): void
declare function SetCampaignAvailable(campaignNumber: number, available: boolean): void
declare function SetOpCinematicAvailable(campaignNumber: number, available: boolean): void
declare function SetEdCinematicAvailable(campaignNumber: number, available: boolean): void
declare function GetDefaultDifficulty(): gamedifficulty
declare function SetDefaultDifficulty(g: gamedifficulty): void
declare function SetCustomCampaignButtonVisible(whichButton: number, visible: boolean): void
declare function GetCustomCampaignButtonVisible(whichButton: number): boolean
declare function DoNotSaveReplay(): void
declare function Cheat(cheatStr: string): void
declare function IsNoVictoryCheat(): boolean
declare function IsNoDefeatCheat(): boolean

declare function SetMapFlag(whichMapFlag: mapflag, value: boolean): void
declare function SetGamePlacement(whichPlacementType: placement): void
declare function SetGameSpeed(whichspeed: gamespeed): void
declare function SetGameDifficulty(whichdifficulty: gamedifficulty): void

declare function PauseGame(flag: boolean): void
declare function SetRandomSeed(seed: number): 

declare function SuspendTimeOfDay(b: boolean): void
declare function SetTimeOfDayScale(r: number): void
declare function GetTimeOfDayScale(): number

declare function DisableRestartMission(flag: boolean): void

declare enum MapControl {
    MAP_CONTROL_USER: mapcontrol
    MAP_CONTROL_COMPUTER: mapcontrol
    MAP_CONTROL_RESCUABLE: mapcontrol
    MAP_CONTROL_NEUTRAL: mapcontrol
    MAP_CONTROL_CREEP: mapcontrol
    MAP_CONTROL_NONE: mapcontrol
}

declare enum MapFlag {
    MAP_FOG_HIDE_TERRAIN: mapflag
    MAP_FOG_MAP_EXPLORED: mapflag
    MAP_FOG_ALWAYS_VISIBLE: mapflag
    MAP_USE_HANDICAPS: mapflag
    MAP_OBSERVERS: mapflag
    MAP_OBSERVERS_ON_DEATH: mapflag
    MAP_FIXED_COLORS: mapflag
    MAP_LOCK_RESOURCE_TRADING: mapflag
    MAP_RESOURCE_TRADING_ALLIES_ONLY: mapflag
    MAP_LOCK_ALLIANCE_CHANGES: mapflag
    MAP_ALLIANCE_CHANGES_HIDDEN: mapflag
    MAP_CHEATS: mapflag
    MAP_CHEATS_HIDDEN: mapflag
    MAP_LOCK_SPEED: mapflag
    MAP_LOCK_RANDOM_SEED: mapflag
    MAP_SHARED_ADVANCED_CONTROL: mapflag
    MAP_RANDOM_HERO: mapflag
    MAP_RANDOM_RACES: mapflag
    MAP_RELOADED: mapflag
}

declare class Placement {
    MAP_PLACEMENT_RANDOM: placement
    MAP_PLACEMENT_FIXED: placement
    MAP_PLACEMENT_USE_MAP_SETTINGS: placement
    MAP_PLACEMENT_TEAMS_TOGETHER: placement
}

declare enum IGameState : GameState {
    GAME_STATE_DIVINE_INTERVENTION: igamestate
    GAME_STATE_DISCONNECTED: igamestate
}

declare enum FGameState : GameState {
    GAME_STATE_TIME_OF_DAY: fgamestate
}

declare function setReservedLocalHeroButtons(reserved: number): void
declare function allyColorFilterState(): number
declare function setAllyColorFilterState(state: number): void
declare function creepCampFilterState(): boolean
declare function setCreepCampFilterState(state: boolean): void
declare function enableMinimapFilterButtons(enableAlly: boolean, enableCreep: boolean): void
declare function enableDragSelect(state: boolean, ui: boolean): void
declare function enablePreSelect(state: boolean, ui: boolean): void
declare function enableSelect(state: boolean, ui: boolean): void

declare function automationSetTestType(testType: string): void
declare function automationTestStart(testName: string): void
declare function automationTestEnd(): void
declare function automationTestingFinished(): void