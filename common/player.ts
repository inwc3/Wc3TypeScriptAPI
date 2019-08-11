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
    RACE_HUMAN: race
    RACE_ORC: race
    RACE_UNDEAD: race
    RACE_NIGHTELF: race
    RACE_DEMON: race
    RACE_OTHER: race
}

declare class RaceHelper {
    byIndex(i: int): race
}

declare enum AllianceType {
    ALLIANCE_PASSIVE: alliancetype
    ALLIANCE_HELP_REQUEST: alliancetype
    ALLIANCE_HELP_RESPONSE: alliancetype
    ALLIANCE_SHARED_XP: alliancetype
    ALLIANCE_SHARED_SPELLS: alliancetype
    ALLIANCE_SHARED_VISION: alliancetype
    ALLIANCE_SHARED_CONTROL: alliancetype
    ALLIANCE_SHARED_ADVANCED_CONTROL: alliancetype
    ALLIANCE_RESCUABLE: alliancetype
    ALLIANCE_SHARED_VISION_FORCED: alliancetype
}

declare enum RacePreference {
    RACE_PREF_HUMAN: racepreference
    RACE_PREF_ORC: racepreference
    RACE_PREF_NIGHTELF: racepreference
    RACE_PREF_UNDEAD: racepreference
    RACE_PREF_DEMON: racepreference
    RACE_PREF_RANDOM: racepreference
    RACE_PREF_USER_SELECTABLE: racepreference
}

declare enum PlayerScore {
    PLAYER_SCORE_UNITS_TRAINED: playerscore
    PLAYER_SCORE_UNITS_KILLED: playerscore
    PLAYER_SCORE_STRUCT_BUILT: playerscore
    PLAYER_SCORE_STRUCT_RAZED: playerscore
    PLAYER_SCORE_TECH_PERCENT: playerscore
    PLAYER_SCORE_FOOD_MAXPROD: playerscore
    PLAYER_SCORE_FOOD_MAXUSED: playerscore
    PLAYER_SCORE_HEROES_KILLED: playerscore
    PLAYER_SCORE_ITEMS_GAINED: playerscore
    PLAYER_SCORE_MERCS_HIRED: playerscore
    PLAYER_SCORE_GOLD_MINED_TOTAL: playerscore
    PLAYER_SCORE_GOLD_MINED_UPKEEP: playerscore
    PLAYER_SCORE_GOLD_LOST_UPKEEP: playerscore
    PLAYER_SCORE_GOLD_LOST_TAX: playerscore
    PLAYER_SCORE_GOLD_GIVEN: playerscore
    PLAYER_SCORE_GOLD_RECEIVED: playerscore
    PLAYER_SCORE_LUMBER_TOTAL: playerscore
    PLAYER_SCORE_LUMBER_LOST_UPKEEP: playerscore
    PLAYER_SCORE_LUMBER_LOST_TAX: playerscore
    PLAYER_SCORE_LUMBER_GIVEN: playerscore
    PLAYER_SCORE_LUMBER_RECEIVED: playerscore
    PLAYER_SCORE_UNIT_TOTAL: playerscore
    PLAYER_SCORE_HERO_TOTAL: playerscore
    PLAYER_SCORE_RESOURCE_TOTAL: playerscore
    PLAYER_SCORE_TOTAL: playerscore
}

declare enum PlayerState {
    PLAYER_STATE_GAME_RESULT: playerstate
    PLAYER_STATE_RESOURCE_GOLD: playerstate
    PLAYER_STATE_RESOURCE_LUMBER: playerstate
    PLAYER_STATE_RESOURCE_HERO_TOKENS: playerstate
    PLAYER_STATE_RESOURCE_FOOD_CAP: playerstate
    PLAYER_STATE_RESOURCE_FOOD_USED: playerstate
    PLAYER_STATE_FOOD_CAP_CEILING: playerstate
    PLAYER_STATE_GIVES_BOUNTY: playerstate
    PLAYER_STATE_ALLIED_VICTORY: playerstate
    PLAYER_STATE_PLACED: playerstate
    PLAYER_STATE_OBSERVER_ON_DEATH: playerstate
    PLAYER_STATE_OBSERVER: playerstate
    PLAYER_STATE_UNFOLLOWABLE: playerstate
    PLAYER_STATE_GOLD_UPKEEP_RATE: playerstate
    PLAYER_STATE_LUMBER_UPKEEP_RATE: playerstate
    PLAYER_STATE_GOLD_GATHERED: playerstate
    PLAYER_STATE_LUMBER_GATHERED: playerstate
    PLAYER_STATE_NO_CREEP_SLEEP: playerstate
}

declare class PlayerStateHelper {
    static eventPlayerState(): playerstate
}

declare enum PlayerSlotState {
    PLAYER_SLOT_STATE_EMPTY: playerslotstate
    PLAYER_SLOT_STATE_PLAYING: playerslotstate
    PLAYER_SLOT_STATE_LEFT: playerslotstate
}

declare enum PlayerGameResult {
    PLAYER_GAME_RESULT_VICTORY: playergameresult
    PLAYER_GAME_RESULT_DEFEAT: playergameresult
    PLAYER_GAME_RESULT_TIE: playergameresult
    PLAYER_GAME_RESULT_NEUTRAL: playergameresult
}

declare class Player {
    private static instByNum: Player[];
    private static instByP = new Map<player, Player>();
    private number: number;
    private p: player;

    constructor(number: number) {
        this.number = number;
        this.p = Player(number);

        Player.instByP.set(this.p, this);
    }

    static byNum(number: number): Player {
        if (this.instByNum[number] == null) {
            this.instByNum[number] = new Player(number);
        }

        return this.instByNum[number];
    }
    static local(): Player {
        return Player.instByP.get(GetLocalPlayer(), new Player(GetPlayerId(GetLocalPlayer())));
    }

    static filterPlayer(): player
    static enumPlayer(): player

    static winningPlayer(): player
    static tournamentFinishNowPlayer(): player
    static changingUnitPrevOwner(): player
    static eventDetectingPlayer(): player
    static triggerPlayer(): player

    isPlayerAlly(otherPlayer: player): boolean
    isPlayerEnemy(otherPlayer: player): boolean
    isInForce(): boolean
    isObserver(): boolean
    isXYVisible(x: number, y: number): boolean
    isLocVisible(whichLocation: location): boolean
    isXYFogged(x: number, y: number): boolean
    isLocFogged(whichLocation: location): boolean
    isXYMasked(x: number, y: number): boolean
    isLocMasked(whichLocation: location): boolean
    race(): race
    id(): number
    unitCount(includeIncomplete: boolean): number
    typedUnitCount(unitName: string, includeIncomplete: boolean, includeUpgrades: boolean): number
    structureCount(includeIncomplete: boolean): number
    state(whichPlayerState: playerstate): number
    score(whichPlayerScore: playerscore): number
    isAllied(otherPlayer: player, whichAllianceSetting: alliancetype): boolean
    handicap(): number
    handicapXP(): number
    setHandicap(handicap: number): void
    setHandicapXP(handicap: number): void
    setTechMaxAllowed(techid: number, maximum: number): void
    techMaxAllowed(techid: number): number
    addTechResearched(techid: number, levels: number): void
    setTechResearched(techid: number, setToLevel: number): void
    techResearched(techid: number, specificonly: boolean): boolean
    techCount(techid: number, specificonly: boolean): number
    setUnitsOwner(newOwner: number): void
    cripple(toWhichPlayers: force, flag: boolean): void
    setAbilityAvailable(abilid: number, avail: boolean): void
    setState(whichPlayerState: playerstate, value: number): void
    kill(gameResult: playergameresult): void
    cacheHeroData(): void

    startMeleeAI(script: string): void
    startCampaignAI(script: string): void
    commandAI(command: number, data: number): void
    pauseCompAI(pause: boolean): void
    aiDifficulty(): aidifficulty
    removeAllGuardPositions(): void

    setPlayerTeam(whichTeam: int): void
    setStartLocation(startLocIndex: int): void
    forceStartLocation(startLocIndex: int): void
    setColor(color: playercolor): void
    setAlliance(otherPlayer: player, whichAllianceSetting: alliancetype, value: boolean): void
    setTaxRate(otherPlayer: player, whichResource: playerstate, rate: number): void
    setRacePreference(whichRacePreference: racepreference): void
    setRaceSelectable(value: boolean): void
    setController(controlType: mapcontrol): void
    setName(name: string): void
    setOnScoreScreen(flag: boolean): void
    team(): int
    startLocation(): int
    color(): playercolor
    selectable(): boolean
    controller(): mapcontrol
    slotState(): playerslotstate
    taxRate(otherPlayer: player, whichResource: playerstate): number
    isRacePrefSet(pref: racepreference): boolean
    name(): string
    decTechResearched(techid: number, levels: number): void
    tournamentScore(whichPlayer: player): number
}

declare const PLAYER_NEUTRAL_PASSIVE: int
declare const PLAYER_NEUTRAL_AGGRESSIVE: int

declare function GetBJMaxPlayers(): int
declare function GetBJPlayerNeutralVictim(): int
declare function GetBJPlayerNeutralExtra(): int
declare function GetBJMaxPlayerSlots(): int
declare function GetPlayerNeutralPassive(): int
declare function GetPlayerNeutralAggressive(): int

declare class Force {
    static create(): force
    destroy(): void
    
    addPlayer(whichPlayer: player): void
    removePlayer(whichPlayer: player): void
    containsPlayer(whichPlayer: player): boolean
    forceClear(): void
    enumPlayers(filter: boolexpr): void
    enumPlayersCounted(filter: boolexpr, countLimit: int): void
    enumAllies(whichPlayer: player, filter: boolexpr): void
    enumEnemies(whichPlayer: player, filter: boolexpr): void
    for(callback: () => void): void
}