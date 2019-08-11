import { int, xy, xyz, rgb, rgba } from "./util";

declare enum PlayerEvent {
    EVENT_PLAYER_STATE_LIMIT,
    EVENT_PLAYER_ALLIANCE_CHANGED,
    EVENT_PLAYER_DEFEAT,
    EVENT_PLAYER_VICTORY,
    EVENT_PLAYER_LEAVE,
    EVENT_PLAYER_CHAT,
    EVENT_PLAYER_END_CINEMATIC,
    EVENT_PLAYER_ARROW_LEFT_DOWN,
    EVENT_PLAYER_ARROW_LEFT_UP,
    EVENT_PLAYER_ARROW_RIGHT_DOWN,
    EVENT_PLAYER_ARROW_RIGHT_UP,
    EVENT_PLAYER_ARROW_DOWN_DOWN,
    EVENT_PLAYER_ARROW_DOWN_UP,
    EVENT_PLAYER_ARROW_UP_DOWN,
    EVENT_PLAYER_ARROW_UP_UP,
    EVENT_PLAYER_MOUSE_DOWN,
    EVENT_PLAYER_MOUSE_UP,
    EVENT_PLAYER_MOUSE_MOVE,
    EVENT_PLAYER_SYNC_DATA,
    EVENT_PLAYER_KEY,
    EVENT_PLAYER_KEY_DOWN,
    EVENT_PLAYER_KEY_UP
}

declare enum PlayerUnitEvent {
    EVENT_PLAYER_UNIT_ATTACKED,
    EVENT_PLAYER_UNIT_RESCUED,
    EVENT_PLAYER_UNIT_DEATH,
    EVENT_PLAYER_UNIT_DECAY,
    EVENT_PLAYER_UNIT_DETECTED,
    EVENT_PLAYER_UNIT_HIDDEN,
    EVENT_PLAYER_UNIT_SELECTED,
    EVENT_PLAYER_UNIT_DESELECTED,
    EVENT_PLAYER_UNIT_CONSTRUCT_START,
    EVENT_PLAYER_UNIT_CONSTRUCT_CANCEL,
    EVENT_PLAYER_UNIT_CONSTRUCT_FINISH,
    EVENT_PLAYER_UNIT_UPGRADE_START,
    EVENT_PLAYER_UNIT_UPGRADE_CANCEL,
    EVENT_PLAYER_UNIT_UPGRADE_FINISH,
    EVENT_PLAYER_UNIT_TRAIN_START,
    EVENT_PLAYER_UNIT_TRAIN_CANCEL,
    EVENT_PLAYER_UNIT_TRAIN_FINISH,
    EVENT_PLAYER_UNIT_RESEARCH_START,
    EVENT_PLAYER_UNIT_RESEARCH_CANCEL,
    EVENT_PLAYER_UNIT_RESEARCH_FINISH,
    EVENT_PLAYER_UNIT_ISSUED_ORDER,
    EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER,
    EVENT_PLAYER_UNIT_ISSUED_TARGET_ORDER,
    EVENT_PLAYER_UNIT_ISSUED_UNIT_ORDER,
    EVENT_PLAYER_HERO_LEVEL,
    EVENT_PLAYER_HERO_SKILL,
    EVENT_PLAYER_HERO_REVIVABLE,
    EVENT_PLAYER_HERO_REVIVE_START,
    EVENT_PLAYER_HERO_REVIVE_CANCEL,
    EVENT_PLAYER_HERO_REVIVE_FINISH,
    EVENT_PLAYER_UNIT_SUMMON,
    EVENT_PLAYER_UNIT_DROP_ITEM,
    EVENT_PLAYER_UNIT_PICKUP_ITEM,
    EVENT_PLAYER_UNIT_USE_ITEM,
    EVENT_PLAYER_UNIT_LOADED,
    EVENT_PLAYER_UNIT_DAMAGED,
    EVENT_PLAYER_UNIT_DAMAGING,
    EVENT_PLAYER_UNIT_SELL,
    EVENT_PLAYER_UNIT_CHANGE_OWNER,
    EVENT_PLAYER_UNIT_SELL_ITEM,
    EVENT_PLAYER_UNIT_SPELL_CHANNEL,
    EVENT_PLAYER_UNIT_SPELL_CAST,
    EVENT_PLAYER_UNIT_SPELL_EFFECT,
    EVENT_PLAYER_UNIT_SPELL_FINISH,
    EVENT_PLAYER_UNIT_SPELL_ENDCAST,
    EVENT_PLAYER_UNIT_PAWN_ITEM
}

declare enum PlayerColor {
    PLAYER_COLOR_RED,
    PLAYER_COLOR_BLUE,
    PLAYER_COLOR_CYAN,
    PLAYER_COLOR_PURPLE,
    PLAYER_COLOR_YELLOW,
    PLAYER_COLOR_ORANGE,
    PLAYER_COLOR_GREEN,
    PLAYER_COLOR_PINK,
    PLAYER_COLOR_LIGHT_GRAY,
    PLAYER_COLOR_LIGHT_BLUE,
    PLAYER_COLOR_AQUA,
    PLAYER_COLOR_BROWN,
    PLAYER_COLOR_MAROON,
    PLAYER_COLOR_NAVY,
    PLAYER_COLOR_TURQUOISE,
    PLAYER_COLOR_VIOLET,
    PLAYER_COLOR_WHEAT,
    PLAYER_COLOR_PEACH,
    PLAYER_COLOR_MINT,
    PLAYER_COLOR_LAVENDER,
    PLAYER_COLOR_COAL,
    PLAYER_COLOR_SNOW,
    PLAYER_COLOR_EMERALD,
    PLAYER_COLOR_PEANUT
}

declare enum Race {
    RACE_HUMAN,
    RACE_ORC,
    RACE_UNDEAD,
    RACE_NIGHTELF,
    RACE_DEMON,
    RACE_OTHER
}

declare class RaceHelper {
    byIndex(i: int): race
}

declare enum AllianceType {
    ALLIANCE_PASSIVE,
    ALLIANCE_HELP_REQUEST,
    ALLIANCE_HELP_RESPONSE,
    ALLIANCE_SHARED_XP,
    ALLIANCE_SHARED_SPELLS,
    ALLIANCE_SHARED_VISION,
    ALLIANCE_SHARED_CONTROL,
    ALLIANCE_SHARED_ADVANCED_CONTROL,
    ALLIANCE_RESCUABLE,
    ALLIANCE_SHARED_VISION_FORCED
}

declare enum RacePreference {
    RACE_PREF_HUMAN,
    RACE_PREF_ORC,
    RACE_PREF_NIGHTELF,
    RACE_PREF_UNDEAD,
    RACE_PREF_DEMON,
    RACE_PREF_RANDOM,
    RACE_PREF_USER_SELECTABLE
}

declare enum PlayerScore {
    PLAYER_SCORE_UNITS_TRAINED,
    PLAYER_SCORE_UNITS_KILLED,
    PLAYER_SCORE_STRUCT_BUILT,
    PLAYER_SCORE_STRUCT_RAZED,
    PLAYER_SCORE_TECH_PERCENT,
    PLAYER_SCORE_FOOD_MAXPROD,
    PLAYER_SCORE_FOOD_MAXUSED,
    PLAYER_SCORE_HEROES_KILLED,
    PLAYER_SCORE_ITEMS_GAINED,
    PLAYER_SCORE_MERCS_HIRED,
    PLAYER_SCORE_GOLD_MINED_TOTAL,
    PLAYER_SCORE_GOLD_MINED_UPKEEP,
    PLAYER_SCORE_GOLD_LOST_UPKEEP,
    PLAYER_SCORE_GOLD_LOST_TAX,
    PLAYER_SCORE_GOLD_GIVEN,
    PLAYER_SCORE_GOLD_RECEIVED,
    PLAYER_SCORE_LUMBER_TOTAL,
    PLAYER_SCORE_LUMBER_LOST_UPKEEP,
    PLAYER_SCORE_LUMBER_LOST_TAX,
    PLAYER_SCORE_LUMBER_GIVEN,
    PLAYER_SCORE_LUMBER_RECEIVED,
    PLAYER_SCORE_UNIT_TOTAL,
    PLAYER_SCORE_HERO_TOTAL,
    PLAYER_SCORE_RESOURCE_TOTAL,
    PLAYER_SCORE_TOTAL
}

declare enum PlayerState {
    PLAYER_STATE_GAME_RESULT,
    PLAYER_STATE_RESOURCE_GOLD,
    PLAYER_STATE_RESOURCE_LUMBER,
    PLAYER_STATE_RESOURCE_HERO_TOKENS,
    PLAYER_STATE_RESOURCE_FOOD_CAP,
    PLAYER_STATE_RESOURCE_FOOD_USED,
    PLAYER_STATE_FOOD_CAP_CEILING,
    PLAYER_STATE_GIVES_BOUNTY,
    PLAYER_STATE_ALLIED_VICTORY,
    PLAYER_STATE_PLACED,
    PLAYER_STATE_OBSERVER_ON_DEATH,
    PLAYER_STATE_OBSERVER,
    PLAYER_STATE_UNFOLLOWABLE,
    PLAYER_STATE_GOLD_UPKEEP_RATE,
    PLAYER_STATE_LUMBER_UPKEEP_RATE,
    PLAYER_STATE_GOLD_GATHERED,
    PLAYER_STATE_LUMBER_GATHERED,
    PLAYER_STATE_NO_CREEP_SLEEP
}

declare class PlayerStateHelper {
    static eventPlayerState(): playerstate
}

declare enum PlayerSlotState {
    PLAYER_SLOT_STATE_EMPTY,
    PLAYER_SLOT_STATE_PLAYING,
    PLAYER_SLOT_STATE_LEFT
}

declare enum PlayerGameResult {
    PLAYER_GAME_RESULT_VICTORY,
    PLAYER_GAME_RESULT_DEFEAT,
    PLAYER_GAME_RESULT_TIE,
    PLAYER_GAME_RESULT_NEUTRAL
}

class User {
    static instByNum: User[];
    static instByP: Map<player, User> = new Map<player, User>();

    static byP(p: player): User {
        return this.instByP.has(p) ? this.instByP.get(p) as User : new User(p);
    }
    constructor(p: player) {
        this.number = GetPlayerId(p);
        this.p = p;

        User.instByP.set(this.p, this);
    }

    number: number;
    p: player;

    static byNum(number: number): User {
        if (this.instByNum[number] == null) {
            this.instByNum[number] = new User(Player(number));
        }

        return this.instByNum[number];
    }
    static local(): User {
        return this.byP(GetLocalPlayer());
    }

    static filterPlayer(): User {
        return this.byP(GetFilterPlayer());
    }
    static enumPlayer(): User {
        return this.byP(GetEnumPlayer());
    }

    static winningPlayer(): User {
        return this.byP(GetWinningPlayer());
    }
    static tournamentFinishNowPlayer(): User {
        return this.byP(GetTournamentFinishNowPlayer());
    }
    static changingUnitPrevOwner(): User {
        return this.byP(GetChangingUnitPrevOwner());
    }
    static eventDetectingPlayer(): User {
        return this.byP(GetEventDetectingPlayer());
    }
    static triggerPlayer(): User {
        return this.byP(GetTriggerPlayer());
    }

    isPlayerAlly(otherPlayer: player): boolean {
        return IsPlayerAlly(this.p, otherPlayer);
    }
    isPlayerEnemy(otherPlayer: player): boolean {
        return IsPlayerEnemy(this.p, otherPlayer);
    }
    isInForce(force: force): boolean {
        return IsPlayerInForce(this.p, force);
    }
    isObserver(): boolean {
        return IsPlayerObserver(this.p);
    }
    isXYVisible(xy: xy): boolean {
        return IsVisibleToPlayer(xy[0], xy[1], this.p);
    }
    isXYFogged(xy: xy): boolean {
        return IsFoggedToPlayer(xy[0], xy[1], this.p);
    }
    isXYMasked(xy: xy): boolean {
        return IsMaskedToPlayer(xy[0], xy[1], this.p);
    }
    race(): race {
        return GetPlayerRace(this.p);
    }
    id(): number {
        return GetPlayerId(this.p);
    }
    unitCount(includeIncomplete: boolean): int {
        return GetPlayerUnitCount(this.p, includeIncomplete) as int;
    }
    typedUnitCount(unitName: string, includeIncomplete: boolean, includeUpgrades: boolean): int {
        return GetPlayerTypedUnitCount(this.p, unitName, includeIncomplete, includeUpgrades) as int;
    }
    structureCount(includeIncomplete: boolean): int {
        return GetPlayerStructureCount(this.p, includeIncomplete) as int;
    }
    state(whichPlayerState: playerstate): int {
        return GetPlayerState(this.p, whichPlayerState) as int;
    }
    setState(whichPlayerState: playerstate, value: number): void {
        SetPlayerState(this.p, whichPlayerState, value);
    }
    score(whichPlayerScore: playerscore): int {
        return GetPlayerScore(this.p, whichPlayerScore) as int;
    }
    isAllied(otherPlayer: player, whichAllianceSetting: alliancetype): boolean {
        return GetPlayerAlliance(this.p, otherPlayer, whichAllianceSetting);
    }
    handicap(): number {
        return GetPlayerHandicap(this.p);
    }
    setHandicap(handicap: number): void {
        SetPlayerHandicap(this.p, handicap);
    }
    handicapXP(): number {
        return GetPlayerHandicapXP(this.p);
    }
    setHandicapXP(handicap: number): void {
        SetPlayerHandicapXP(this.p, handicap);
    }
    techMaxAllowed(techid: int): int {
        return GetPlayerTechMaxAllowed(this.p, techid) as int;
    }
    setTechMaxAllowed(techid: int, maximum: int): void {
        SetPlayerTechMaxAllowed(this.p, techid, maximum);
    }
    isTechResearched(techid: int, specificonly: boolean): boolean {
        return GetPlayerTechResearched(this.p, techid, specificonly);
    }
    setTechResearched(techid: int, setToLevel: int): void {
        SetPlayerTechResearched(this.p, techid, setToLevel);
    }
    addTechResearched(techid: int, levels: int): void {
        AddPlayerTechResearched(this.p, techid, levels);
    }
    techCount(techid: int, specificonly: boolean): int {
        return GetPlayerTechCount(this.p, techid, specificonly) as int;
    }
    setUnitsOwner(newOwner: int): void {
        SetPlayerUnitsOwner(this.p, newOwner);
    }
    cripple(toWhichPlayers: force, flag: boolean): void {
        CripplePlayer(this.p, toWhichPlayers, flag);
    }
    setAbilityAvailable(abilid: number, avail: boolean): void {
        SetPlayerAbilityAvailable(this.p, abilid, avail);
    }
    kill(gameResult: playergameresult): void {
        RemovePlayer(this.p, gameResult);
    }
    cacheHeroData(): void {
        CachePlayerHeroData(this.p);
    }

    startMeleeAI(script: string): void {
        StartMeleeAI(this.p, script);
    }
    startCampaignAI(script: string): void {
        StartCampaignAI(this.p, script);
    }
    commandAI(command: int, data: int): void {
        CommandAI(this.p, command, data);
    }
    pauseCompAI(pause: boolean): void {
        PauseCompAI(this.p, pause);
    }
    aiDifficulty(): aidifficulty {
        return GetAIDifficulty(this.p);
    }
    removeAllGuardPositions(): void {
        RemoveAllGuardPositions(this.p);
    }

    team(): int {
        return GetPlayerTeam(this.p) as int;
    }
    setPlayerTeam(whichTeam: int): void {
        SetPlayerTeam(this.p, whichTeam);
    }
    startLocation(): int {
        return GetPlayerStartLocation(this.p) as int;
    }
    setStartLocation(startLocIndex: int): void {
        SetPlayerStartLocation(this.p, startLocIndex);
    }
    forceStartLocation(startLocIndex: int): void {
        ForcePlayerStartLocation(this.p, startLocIndex);
    }
    color(): playercolor {
        return GetPlayerColor(this.p);
    }
    setColor(color: playercolor): void {
        SetPlayerColor(this.p, color);
    }
    setAlliance(otherPlayer: player, whichAllianceSetting: alliancetype, value: boolean): void {
        SetPlayerAlliance(this.p, otherPlayer, whichAllianceSetting, value);
    }
    setTaxRate(otherPlayer: player, whichResource: playerstate, rate: number): void {
        SetPlayerTaxRate(this.p, otherPlayer, whichResource, rate);
    }
    setRacePreference(whichRacePreference: racepreference): void {
        SetPlayerRacePreference(this.p, whichRacePreference);
    }
    setRaceSelectable(value: boolean): void {
        SetPlayerRaceSelectable(this.p, value);
    }
    controller(): mapcontrol {
        return GetPlayerController(this.p);
    }
    setController(controlType: mapcontrol): void {
        SetPlayerController(this.p, controlType);
    }
    setOnScoreScreen(flag: boolean): void {
        SetPlayerOnScoreScreen(this.p, flag);
    }
    selectable(): boolean {
        return GetPlayerSelectable(this.p);
    }
    slotState(): playerslotstate {
        return GetPlayerSlotState(this.p);
    }
    taxRate(otherPlayer: player, whichResource: playerstate): number {
        return GetPlayerTaxRate(this.p, otherPlayer, whichResource);
    }
    isRacePrefSet(pref: racepreference): boolean {
        return IsPlayerRacePrefSet(this.p, pref);
    }
    name(): string {
        return GetPlayerName(this.p);
    }
    setName(name: string): void {
        SetPlayerName(this.p, name);
    }
    decTechResearched(techid: number, levels: number): void {
        BlzDecPlayerTechResearched(this.p, techid, levels);
    }
    tournamentScore(whichPlayer: player): number {
        return GetTournamentScore(whichPlayer);
    }
}

declare const PLAYER_NEUTRAL_PASSIVE: int
declare const PLAYER_NEUTRAL_AGGRESSIVE: int

function maxPlayers(): int {
    return GetBJMaxPlayers() as int;
}
function maxPlayerSlots(): int {
    return GetBJMaxPlayerSlots() as int;
}
function playerNeutralAggressive(): int {
    return GetPlayerNeutralAggressive() as int;
}
function playerNeutralPassive(): int {
    return GetPlayerNeutralPassive() as int;
}
function playerNeutralVictim(): int {
    return GetBJPlayerNeutralVictim() as int;
}
function playerNeutralExtra(): int {
    return GetBJPlayerNeutralExtra() as int;
}

class Force {
    static create(): Force {
        return new Force(CreateForce());
    }
    constructor(force: force) {
        this.force = force;
    }
    destroy(): void {
        DestroyForce(this.force);
    }
    
    force: force;

    containsPlayer(whichPlayer: player): boolean {
        return BlzForceHasPlayer(this.force, whichPlayer);
    }
    addPlayer(whichPlayer: player): void {
        ForceAddPlayer(this.force, whichPlayer);
    }
    removePlayer(whichPlayer: player): void {
        ForceRemovePlayer(this.force, whichPlayer);
    }
    clear(): void {
        ForceClear(this.force);
    }

    enumPlayers(filter: boolexpr, countLimit?: int): void {
        if (countLimit == undefined) {
            ForceEnumPlayers(this.force, filter);
        } else {
            ForceEnumPlayersCounted(this.force, filter, countLimit);
        }
    }
    enumAllies(whichPlayer: player, filter: boolexpr): void {
        ForceEnumAllies(this.force, whichPlayer, filter);
    }
    enumEnemies(whichPlayer: player, filter: boolexpr): void {
        ForceEnumEnemies(this.force, whichPlayer, filter);
    }

    for(callback: () => void): void {
        ForForce(this.force, callback);
    }
}