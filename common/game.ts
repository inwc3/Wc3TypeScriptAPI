declare enum GameEvent {
    EVENT_GAME_VICTORY,
    EVENT_GAME_END_LEVEL,
    EVENT_GAME_VARIABLE_LIMIT,
    EVENT_GAME_STATE_LIMIT,
    EVENT_GAME_TIMER_EXPIRED,
    EVENT_GAME_ENTER_REGION,
    EVENT_GAME_LEAVE_REGION,
    EVENT_GAME_TRACKABLE_HIT,
    EVENT_GAME_TRACKABLE_TRACK,
    EVENT_GAME_SHOW_SKILL,
    EVENT_GAME_BUILD_SUBMENU,
    EVENT_GAME_LOADED,
    EVENT_GAME_TOURNAMENT_FINISH_SOON,
    EVENT_GAME_TOURNAMENT_FINISH_NOW,
    EVENT_GAME_SAVE,
    EVENT_GAME_CUSTOM_UI_FRAME
}

declare enum GameDifficulty {
    MAP_DIFFICULTY_EASY,
    MAP_DIFFICULTY_NORMAL,
    MAP_DIFFICULTY_HARD,
    MAP_DIFFICULTY_INSANE
}

declare enum GameSpeed {
    MAP_SPEED_SLOWEST,
    MAP_SPEED_SLOW,
    MAP_SPEED_NORMAL,
    MAP_SPEED_FAST,
    MAP_SPEED_FASTEST
}

declare enum GameType {
    GAME_TYPE_MELEE,
    GAME_TYPE_FFA,
    GAME_TYPE_USE_MAP_SETTINGS,
    GAME_TYPE_BLIZ,
    GAME_TYPE_ONE_ON_ONE,
    GAME_TYPE_TWO_TEAM_PLAY,
    GAME_TYPE_THREE_TEAM_PLAY,
    GAME_TYPE_FOUR_TEAM_PLAY
}

declare enum Version {
    VERSION_REIGN_OF_CHAOS,
    VERSION_FROZEN_THRONE
}

declare namespace VersionHelper {
    function version(): version
    function versionCompatible(whichVersion: version): boolean
    function versionSupported(whichVersion: version): boolean
}

function endGame(doScoreScreen: boolean): void {
    EndGame(doScoreScreen);
}
function changeLevel(newLevel: string, doScoreScreen: boolean): void {
    ChangeLevel(newLevel, doScoreScreen);
}
function restartGame(doScoreScreen: boolean): void {
    RestartGame(doScoreScreen);
}
function reloadGame(): void {
    ReloadGame();
}
function setCampaignMenuRace(r: race): void {
    SetCampaignMenuRace(r);
}
function setCampaignMenuRaceEx(campaignIndex: number): void {
    SetCampaignMenuRaceEx(campaignIndex);
}
function forceCampaignSelectScreen(): void {
    ForceCampaignSelectScreen();
}
function loadGame(saveFileName: string, doScoreScreen: boolean): void {
    LoadGame(saveFileName, doScoreScreen);
}
function saveGame(saveFileName: string): void {
    SaveGame(saveFileName);
}
function renameSaveDirectory(sourceDirName: string, destDirName: string): boolean {
    return RenameSaveDirectory(sourceDirName, destDirName);
}
function removeSaveDirectory(sourceDirName: string): boolean {
    return RemoveSaveDirectory(sourceDirName);
}
function copySaveGame(sourceSaveName: string, destSaveName: string): boolean {
    return CopySaveGame(sourceSaveName, destSaveName);
}
function saveGameExists(saveName: string): boolean {
    return SaveGameExists(saveName);
}
function syncSelections(): void {
    SyncSelections();
}

function floatGameState(whichFloatGameState: fgamestate): number {
    return GetFloatGameState(whichFloatGameState);
}
function setFloatGameState(whichFloatGameState: fgamestate, value: number): void {
    SetFloatGameState(whichFloatGameState, value);
}
function intGameState(whichIntegerGameState: igamestate): number {
    return GetIntegerGameState(whichIntegerGameState);
}
function setIntGameState(whichIntegerGameState: igamestate, value: number): void {
    SetIntegerGameState(whichIntegerGameState, value);
}

function setTutorialCleared(cleared: boolean): void {
    SetTutorialCleared(cleared);
}
function setMissionAvailable(campaignNumber: number, missionNumber: number, available: boolean): void {
    SetMissionAvailable(campaignNumber, missionNumber, available);
}
function setCampaignAvailable(campaignNumber: number, available: boolean): void {
    SetCampaignAvailable(campaignNumber, available);
}
function setOpCinematicAvailable(campaignNumber: number, available: boolean): void {
    SetOpCinematicAvailable(campaignNumber, available);
}
function setEdCinematicAvailable(campaignNumber: number, available: boolean): void {
    SetEdCinematicAvailable(campaignNumber, available);
}

function defaultDifficulty(): gamedifficulty {
    return GetDefaultDifficulty();
}
function setDefaultDifficulty(g: gamedifficulty): void {
    SetDefaultDifficulty(g);
}
function setCustomCampaignButtonVisible(whichButton: number, visible: boolean): void {
    SetCustomCampaignButtonVisible(whichButton, visible);
}
function customCampaignButtonVisible(whichButton: number): boolean {
    return IsCustomCampaignButtonVisibile(whichButton);
}
function doNotSaveReplay(): void {
    DoNotSaveReplay();
}
function cheat(cheatStr: string): void {
    Cheat(cheatStr);
}
function isNoVictoryCheat(): boolean {
    return IsNoVictoryCheat();
}
function isNoDefeatCheat(): boolean {
    return IsNoDefeatCheat();
}

function setMapFlag(whichMapFlag: mapflag, value: boolean): void {
    SetMapFlag(whichMapFlag, value);
}
function setGamePlacement(whichPlacementType: placement): void {
    SetGamePlacement(whichPlacementType);
}
function setGameSpeed(whichspeed: gamespeed): void {
    SetGameSpeed(whichspeed);
}
function setGameDifficulty(whichdifficulty: gamedifficulty): void {
    SetGameDifficulty(whichdifficulty);
}

function pauseGame(flag: boolean): void {
    PauseGame(flag);
}
function setRandomSeed(seed: number): void {
    SetRandomSeed(seed);
}

function suspendTimeOfDay(b: boolean): void {
    SuspendTimeOfDay(b);
}
function timeOfDayScale(): number {
    return GetTimeOfDayScale();
}
function setTimeOfDayScale(r: number): void {
    return SetTimeOfDayScale(r);
}

function disableRestartMission(flag: boolean): void {
    DisableRestartMission(flag);
}

declare enum MapControl {
    MAP_CONTROL_USER,
    MAP_CONTROL_COMPUTER,
    MAP_CONTROL_RESCUABLE,
    MAP_CONTROL_NEUTRAL,
    MAP_CONTROL_CREEP,
    MAP_CONTROL_NONE
}

declare enum MapFlag {
    MAP_FOG_HIDE_TERRAIN,
    MAP_FOG_MAP_EXPLORED,
    MAP_FOG_ALWAYS_VISIBLE,
    MAP_USE_HANDICAPS,
    MAP_OBSERVERS,
    MAP_OBSERVERS_ON_DEATH,
    MAP_FIXED_COLORS,
    MAP_LOCK_RESOURCE_TRADING,
    MAP_RESOURCE_TRADING_ALLIES_ONLY,
    MAP_LOCK_ALLIANCE_CHANGES,
    MAP_ALLIANCE_CHANGES_HIDDEN,
    MAP_CHEATS,
    MAP_CHEATS_HIDDEN,
    MAP_LOCK_SPEED,
    MAP_LOCK_RANDOM_SEED,
    MAP_SHARED_ADVANCED_CONTROL,
    MAP_RANDOM_HERO,
    MAP_RANDOM_RACES,
    MAP_RELOADED
}

declare class Placement {
    MAP_PLACEMENT_RANDOM: placement
    MAP_PLACEMENT_FIXED: placement
    MAP_PLACEMENT_USE_MAP_SETTINGS: placement
    MAP_PLACEMENT_TEAMS_TOGETHER: placement
}

declare enum IGameState {
    GAME_STATE_DIVINE_INTERVENTION,
    GAME_STATE_DISCONNECTED
}

declare enum FGameState {
    GAME_STATE_TIME_OF_DAY
}

function setReservedLocalHeroButtons(reserved: number): void {
    SetReservedLocalHeroButtons(reserved);
}
function allyColorFilterState(): number {
    return GetAllyColorFilterState();
}
function setAllyColorFilterState(state: number): void {
    SetAllyColorFilterState(state);
}
function creepCampFilterState(): boolean {
    return GetCreepCampFilterState();
}
function setCreepCampFilterState(state: boolean): void {
    SetCreepCampFilterState(state);
}
function enableMinimapFilterButtons(enableAlly: boolean, enableCreep: boolean): void {
    EnableMinimapFilterButtons(enableAlly, enableCreep);
}
function enableDragSelect(state: boolean, ui: boolean): void {
    EnableDragSelect(state, ui);
}
function enablePreSelect(state: boolean, ui: boolean): void {
    EnablePreSelect(state, ui);
}
function enableSelect(state: boolean, ui: boolean): void {
    EnableSelect(state, ui);
}

function setAutomationTestType(testType: string): void {
    AutomationSetTestType(testType);
}
function startAutomationTest(testName: string): void {
    AutomationTestStart(testName);
}
function endAutomationTest(): void {
    AutomationTestEnd();
}
function finishAutomationTesting(): void {
    AutomationTestingFinished();
}

function eventGameState(): gamestate {
    return GetEventGameState();
}
function eventPlayerChatString(): string {
    return GetEventPlayerChatString();
}
function eventPlayerChatStringMatched(): string {
    return GetEventPlayerChatStringMatched();
}