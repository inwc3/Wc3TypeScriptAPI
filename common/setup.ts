declare function teams(): int
declare function players(): int
declare function isGameTypeSupported(whichGameType: gametype): boolean
declare function gameTypeSelected(): gametype
declare function isMapFlagSet(whichMapFlag: mapflag): boolean
declare function gamePlacement(): placement
declare function gameSpeed(): gamespeed
declare function gameDifficulty(): gamedifficulty
declare function resourceDensity(): mapdensity
declare function creatureDensity(): mapdensity
declare function startLocationX(whichStartLocation: int): number
declare function startLocationY(whichStartLocation: int): number
declare function startLocationXY(whichStartLocation: int): [number, number]
declare function setMapName(name: string): void
declare function setMapDescription(description: string): void
declare function setTeams(teamcount: int): void
declare function setPlayers(playercount: int): void
declare function defineStartLocation(whichStartLoc: int, x: number, y: number): void
declare function defineStartLocationXY(whichStartLoc: int, xy: [number, number]): void
declare function defineStartLocationLoc(whichStartLoc: int, whichLocation: location): void
declare function setStartLocPrioCount(whichStartLoc: int, prioSlotCount: int): void
declare function setStartLocPrio(whichStartLoc: int, prioSlotIndex: int, otherStartLocIndex: int, priority: startlocprio): void
declare function startLocPrioSlot(whichStartLoc: int, prioSlotIndex: int): int
declare function startLocPrio(whichStartLoc: int, prioSlotIndex: int): startlocprio
declare function setGameTypeSupported(whichGameType: gametype, value: boolean): void

declare function setIntroShotText(introText: string): void
declare function setIntroShotModel(introModelPath: string): void

declare function setResourceDensity(whichdensity: mapdensity): void
declare function setCreatureDensity(whichdensity: mapdensity): void