import { int, xy, xyz, rgba } from "./util";
import { circle, angle } from "./math";
import { orderId } from "./order";
import { AbilId } from "./ability";
import { ItemId } from "./item";

declare enum UnitIntField {
    UNIT_IF_DEFENSE_TYPE,
    UNIT_IF_ARMOR_TYPE,
    UNIT_IF_LOOPING_FADE_IN_RATE,
    UNIT_IF_LOOPING_FADE_OUT_RATE,
    UNIT_IF_AGILITY,
    UNIT_IF_INTELLIGENCE,
    UNIT_IF_STRENGTH,
    UNIT_IF_AGILITY_PERMANENT,
    UNIT_IF_INTELLIGENCE_PERMANENT,
    UNIT_IF_STRENGTH_PERMANENT,
    UNIT_IF_AGILITY_WITH_BONUS,
    UNIT_IF_INTELLIGENCE_WITH_BONUS,
    UNIT_IF_STRENGTH_WITH_BONUS,
    UNIT_IF_GOLD_BOUNTY_AWARDED_NUMBER_OF_DICE,
    UNIT_IF_GOLD_BOUNTY_AWARDED_BASE,
    UNIT_IF_GOLD_BOUNTY_AWARDED_SIDES_PER_DIE,
    UNIT_IF_LUMBER_BOUNTY_AWARDED_NUMBER_OF_DICE,
    UNIT_IF_LUMBER_BOUNTY_AWARDED_BASE,
    UNIT_IF_LUMBER_BOUNTY_AWARDED_SIDES_PER_DIE,
    UNIT_IF_LEVEL,
    UNIT_IF_FORMATION_RANK,
    UNIT_IF_ORIENTATION_INTERPOLATION,
    UNIT_IF_ELEVATION_SAMPLE_POINTS,
    UNIT_IF_TINTING_COLOR_RED,
    UNIT_IF_TINTING_COLOR_GREEN,
    UNIT_IF_TINTING_COLOR_BLUE,
    UNIT_IF_TINTING_COLOR_ALPHA,
    UNIT_IF_MOVE_TYPE,
    UNIT_IF_TARGETED_AS,
    UNIT_IF_UNIT_CLASSIFICATION,
    UNIT_IF_HIT_POINTS_REGENERATION_TYPE,
    UNIT_IF_PLACEMENT_PREVENTED_BY,
    UNIT_IF_PRIMARY_ATTRIBUTE
}

declare enum UnitRealField {
    UNIT_RF_STRENGTH_PER_LEVEL,
    UNIT_RF_AGILITY_PER_LEVEL,
    UNIT_RF_INTELLIGENCE_PER_LEVEL,
    UNIT_RF_HIT_POINTS_REGENERATION_RATE,
    UNIT_RF_MANA_REGENERATION,
    UNIT_RF_DEATH_TIME,
    UNIT_RF_FLY_HEIGHT,
    UNIT_RF_TURN_RATE,
    UNIT_RF_ELEVATION_SAMPLE_RADIUS,
    UNIT_RF_FOG_OF_WAR_SAMPLE_RADIUS,
    UNIT_RF_MAXIMUM_PITCH_ANGLE_DEGREES,
    UNIT_RF_MAXIMUM_ROLL_ANGLE_DEGREES,
    UNIT_RF_SCALING_VALUE,
    UNIT_RF_ANIMATION_RUN_SPEED,
    UNIT_RF_SELECTION_SCALE,
    UNIT_RF_SELECTION_CIRCLE_HEIGHT,
    UNIT_RF_SHADOW_IMAGE_HEIGHT,
    UNIT_RF_SHADOW_IMAGE_WIDTH,
    UNIT_RF_SHADOW_IMAGE_CENTER_X,
    UNIT_RF_SHADOW_IMAGE_CENTER_Y,
    UNIT_RF_ANIMATION_WALK_SPEED,
    UNIT_RF_DEFENSE,
    UNIT_RF_SIGHT_RADIUS,
    UNIT_RF_PRIORITY,
    UNIT_RF_SPEED,
    UNIT_RF_OCCLUDER_HEIGHT,
    UNIT_RF_HP,
    UNIT_RF_MANA,
    UNIT_RF_ACQUISITION_RANGE,
    UNIT_RF_CAST_BACK_SWING,
    UNIT_RF_CAST_POINT,
    UNIT_RF_MINIMUM_ATTACK_RANGE
}

declare enum UnitBooleanField {
    UNIT_BF_RAISABLE,
    UNIT_BF_DECAYABLE,
    UNIT_BF_IS_A_BUILDING,
    UNIT_BF_USE_EXTENDED_LINE_OF_SIGHT,
    UNIT_BF_NEUTRAL_BUILDING_SHOWS_MINIMAP_ICON,
    UNIT_BF_HERO_HIDE_HERO_INTERFACE_ICON,
    UNIT_BF_HERO_HIDE_HERO_MINIMAP_DISPLAY,
    UNIT_BF_HERO_HIDE_HERO_DEATH_MESSAGE,
    UNIT_BF_HIDE_MINIMAP_DISPLAY,
    UNIT_BF_SCALE_PROJECTILES,
    UNIT_BF_SELECTION_CIRCLE_ON_WATER,
    UNIT_BF_HAS_WATER_SHADOW
}

declare enum UnitStringField {
    UNIT_SF_NAME,
    UNIT_SF_PROPER_NAMES,
    UNIT_SF_GROUND_TEXTURE,
    UNIT_SF_SHADOW_IMAGE_UNIT
}

declare enum UnitWeaponIntField {
    UNIT_WEAPON_IF_ATTACK_DAMAGE_NUMBER_OF_DICE,
    UNIT_WEAPON_IF_ATTACK_DAMAGE_BASE,
    UNIT_WEAPON_IF_ATTACK_DAMAGE_SIDES_PER_DIE,
    UNIT_WEAPON_IF_ATTACK_MAXIMUM_NUMBER_OF_TARGETS,
    UNIT_WEAPON_IF_ATTACK_ATTACK_TYPE,
    UNIT_WEAPON_IF_ATTACK_WEAPON_SOUND,
    UNIT_WEAPON_IF_ATTACK_AREA_OF_EFFECT_TARGETS,
    UNIT_WEAPON_IF_ATTACK_TARGETS_ALLOWED
}

declare enum UnitWeaponRealField {
    UNIT_WEAPON_RF_ATTACK_BACKSWING_POINT,
    UNIT_WEAPON_RF_ATTACK_DAMAGE_POINT,
    UNIT_WEAPON_RF_ATTACK_BASE_COOLDOWN,
    UNIT_WEAPON_RF_ATTACK_DAMAGE_LOSS_FACTOR,
    UNIT_WEAPON_RF_ATTACK_DAMAGE_FACTOR_MEDIUM,
    UNIT_WEAPON_RF_ATTACK_DAMAGE_FACTOR_SMALL,
    UNIT_WEAPON_RF_ATTACK_DAMAGE_SPILL_DISTANCE,
    UNIT_WEAPON_RF_ATTACK_DAMAGE_SPILL_RADIUS,
    UNIT_WEAPON_RF_ATTACK_PROJECTILE_SPEED,
    UNIT_WEAPON_RF_ATTACK_PROJECTILE_ARC,
    UNIT_WEAPON_RF_ATTACK_AREA_OF_EFFECT_FULL_DAMAGE,
    UNIT_WEAPON_RF_ATTACK_AREA_OF_EFFECT_MEDIUM_DAMAGE,
    UNIT_WEAPON_RF_ATTACK_AREA_OF_EFFECT_SMALL_DAMAGE,
    UNIT_WEAPON_RF_ATTACK_RANGE
}

declare enum UnitWeaponBooleanField {
    UNIT_WEAPON_BF_ATTACK_SHOW_UI,
    UNIT_WEAPON_BF_ATTACKS_ENABLED,
    UNIT_WEAPON_BF_ATTACK_PROJECTILE_HOMING_ENABLED,
    UNIT_WEAPON_SF_ATTACK_PROJECTILE_ART
}

declare enum UnitCategory {
    GIANT,
    UNDEAD,
    SUMMONED,
    MECHANICAL,
    PEON,
    SAPPER,
    TOWNHALL,
    ANIENT,
    NEUTRAL,
    WARD,
    STANDON,
    TAUREN
}

declare enum UnitState {
    UNIT_STATE_LIFE,
    UNIT_STATE_MAX_LIFE,
    UNIT_STATE_MANA,
    UNIT_STATE_MAX_MANA
}

declare class UnitStateHelper {
    static GetEventUnitState(): unitstate
}

declare enum UnitType {
    UNIT_TYPE_HERO,
    UNIT_TYPE_DEAD,
    UNIT_TYPE_STRUCTURE,
    UNIT_TYPE_FLYING,
    UNIT_TYPE_GROUND,
    UNIT_TYPE_ATTACKS_FLYING,
    UNIT_TYPE_ATTACKS_GROUND,
    UNIT_TYPE_MELEE_ATTACKER,
    UNIT_TYPE_RANGED_ATTACKER,
    UNIT_TYPE_GIANT,
    UNIT_TYPE_SUMMONED,
    UNIT_TYPE_STUNNED,
    UNIT_TYPE_PLAGUED,
    UNIT_TYPE_SNARED,
    UNIT_TYPE_UNDEAD,
    UNIT_TYPE_MECHANICAL,
    UNIT_TYPE_PEON,
    UNIT_TYPE_SAPPER,
    UNIT_TYPE_TOWNHALL,
    UNIT_TYPE_ANCIENT,
    UNIT_TYPE_TAUREN,
    UNIT_TYPE_POISONED,
    UNIT_TYPE_POLYMORPHED,
    UNIT_TYPE_SLEEPING,
    UNIT_TYPE_RESISTANT,
    UNIT_TYPE_ETHEREAL,
    UNIT_TYPE_MAGIC_IMMUNE
}

declare enum HeroAttribute {
    STR,
    INT,
    AGI
}

declare class UnitPool {
    static create(): unitpool
    destroy(): void

    addId(unitId: UnitId, weight: number): void
    removeId(unitId: UnitId): void
    placeRandom(forWhichPlayer: player, xy: xy, facing: angle): unit

    static pickRandomCreep(level: int): UnitId
    static pickRandomNPBuilding(): UnitId
}

class UnitTypeId {
    static byId(id: int): UnitTypeId {

    }
    static fromString(unitIdString: string): int

    static GetTrainedUnitType(): int

    id: int;

    toString(unitId: int): string

    foodMade(unitId: UnitId): int
    foodUsed(unitId: UnitId): int
    heroUnitId(unitId: UnitId): boolean
    unitIdType(unitId: UnitId, whichUnitType: unittype): boolean
}

class Unit extends Widget {
    static instByTrig: Map<unit, Unit> = new Map<unit, Unit>();

    constructor(unit: unit) {
        super();
        
        this.unit = unit;
        Unit.instByTrig.set(unit, this);
    }
    static byUnit(unit: unit): Unit {
        if (Unit.instByTrig.has(unit)) {
            return Unit.instByTrig.get(unit) as Unit;
        }

        return new Unit(unit);
    }
    static createBlightedGoldmine(id: player, xy: xy, face: angle): Unit {
        let unit: unit = CreateBlightedGoldmine(id, xy[0], xy[1], face);

        return this.byUnit(unit);
    }
    static create(id: player, unitid: int, xy: xy, face: angle): Unit {
        let unit: unit = CreateUnit(id, unitid, xy[0], xy[1], face);

        return this.byUnit(unit);
    }
    static createByName(whichPlayer: player, unitname: string, xy: xy, face: angle): Unit {
        let unit: unit = CreateUnitByName(whichPlayer, unitname, xy[0], xy[1], face);

        return this.byUnit(unit);
    }
    static createCorpse(whichPlayer: player, unitid: UnitId, xy: xy, face: angle): Unit {
        let unit: unit = CreateCorpse(whichPlayer, unitid, xy[0], xy[1], face)

        return this.byUnit(unit);
    }
    destroy(): void {
        RemoveUnit(this.unit);
    }

    unit: unit;

    static filterUnit(): Unit {
        return this.byUnit(GetFilterUnit());
    }
    static enumUnit(): Unit {
        return this.byUnit(GetEnumUnit());
    }

    static revivableUnit(): Unit {
        return this.byUnit(GetRevivableUnit());
    }
    static revivingUnit(): Unit {
        return this.byUnit(GetRevivingUnit());
    }
    static attacker(): Unit {
        return this.byUnit(GetAttacker());
    }
    static rescuer(): Unit {
        return this.byUnit(GetRescuer());
    }
    static dyingUnit(): Unit {
        return this.byUnit(GetDyingUnit());
    }
    static killingUnit(): Unit {
        return this.byUnit(GetKillingUnit());
    }
    static decayingUnit(): Unit {
        return this.byUnit(GetDecayingUnit());
    }
    static constructingStructure(): Unit {
        return this.byUnit(GetConstructingStructure());
    }
    static cancelledStructure(): Unit {
        return this.byUnit(GetCancelledStructure());
    }
    static constructedStructure(): Unit {
        return this.byUnit(GetConstructedStructure());
    }
    static researchingUnit(): Unit {
        return this.byUnit(GetResearchingUnit());
    }
    static trainedUnit(): Unit {
        return this.byUnit(GetTrainedUnit());
    }
    static detectedUnit(): Unit {
        return this.byUnit(GetDetectedUnit());
    }
    static summoningUnit(): Unit {
        return this.byUnit(GetSummoningUnit());
    }
    static summonedUnit(): Unit {
        return this.byUnit(GetSummonedUnit());
    }
    static transportUnit(): Unit {
        return this.byUnit(GetTransportUnit());
    }
    static loadedUnit(): Unit {
        return this.byUnit(GetLoadedUnit());
    }
    static sellingUnit(): Unit {
        return this.byUnit(GetSellingUnit());
    }
    static soldUnit(): Unit {
        return this.byUnit(GetSoldUnit());
    }
    static buyingUnit(): Unit {
        return this.byUnit(GetBuyingUnit());
    }
    static spellTargetUnit(): Unit {
        return this.byUnit(GetSpellTargetUnit());
    }
    static triggerUnit(): Unit {
        return this.byUnit(GetTriggerUnit());
    }
    static eventDamageSource(): Unit {
        return this.byUnit(GetEventDamageSource());
    }
    static eventTargetUnit(): Unit {
        return this.byUnit(GetEventTargetUnit());
    }
    static enteringUnit(): Unit {
        return this.byUnit(GetEnteringUnit());
    }
    static leavingUnit(): Unit {
        return this.byUnit(GetLeavingUnit());
    }
    static levelingUnit(): Unit {
        return this.byUnit(GetLevelingUnit());
    }
    static learningUnit(): Unit {
        return this.byUnit(GetLearningUnit());
    }
    static changingUnit(): Unit {
        return this.byUnit(GetChangingUnit());
    }
    static manipulatingUnit(): Unit {
        return this.byUnit(GetManipulatingUnit());
    }
    static orderedUnit(): Unit {
        return this.byUnit(GetOrderedUnit());
    }
    static orderTargetUnit(): Unit {
        return this.byUnit(GetOrderTargetUnit());
    }
    static spellAbilityUnit(): Unit {
        return this.byUnit(GetSpellAbilityUnit());
    }

    removeGuardPosition(): void {
        RemoveGuardPosition(this.unit);
    }
    recycleGuardPosition(): void {
        RecycleGuardPosition(this.unit);
    }

    booleanField(whichField: unitbooleanfield): boolean
    intField(whichField: unitintegerfield): int
    realField(whichField: unitrealfield): number
    stringField(whichField: unitstringfield): string

    setBooleanField(whichField: unitbooleanfield, value: boolean): boolean
    setIntField(whichField: unitintegerfield, value: int): boolean
    setRealField(whichField: unitrealfield, value: number): boolean
    setStringField(whichField: unitstringfield, value: string): boolean

    weaponBooleanField(whichField: unitweaponbooleanfield, index: int): boolean
    weaponIntField(whichField: unitweaponintegerfield, index: int): number
    weaponRealField(whichField: unitweaponrealfield, index: int): number
    weaponStringField(whichField: unitweaponstringfield, index: int): string

    setWeaponBooleanField(whichField: unitweaponbooleanfield, index: int, value: boolean): boolean
    setWeaponIntField(whichField: unitweaponintegerfield, index: int, value: number): boolean
    setWeaponRealField(whichField: unitweaponrealfield, index: int, value: number): boolean
    setWeaponStringField(whichField: unitweaponstringfield, index: int, value: string): boolean

    maxLife(): int {
        return BlzGetUnitMaxHP(this.unit) as int;
    }
    setMaxLife(hp: int): void {
        BlzSetUnitMaxHP(this.unit, hp);
    }
    maxMana(): int {
        return BlzGetUnitMaxMana(this.unit) as int;
    }
    setMaxMana(mana: int): void {
        BlzSetUnitMaxMana(this.unit, mana);
    }
    setName(name: string): void {
        BlzSetUnitName(this.unit, name);
    }
    setHeroProperName(heroProperName: string): void {
        BlzSetHeroProperName(this.unit, heroProperName);
    }
    baseDamage(weaponIndex: int): int {
        return BlzGetUnitBaseDamage(this.unit, weaponIndex) as int;
    }
    setBaseDamage(baseDamage: int, weaponIndex: int): void {
        BlzSetUnitBaseDamage(this.unit, baseDamage, weaponIndex);
    }
    diceNumber(weaponIndex: int): int {
        return BlzGetUnitDiceNumber(this.unit, weaponIndex) as int;
    }
    setDiceNumber(diceNumber: int, weaponIndex: int): void {
        BlzSetUnitDiceNumber(this.unit, diceNumber, weaponIndex);
    }
    diceSides(weaponIndex: int): int {
        return BlzGetUnitDiceSides(this.unit, weaponIndex) as int;
    }
    setDiceSides(diceSides: int, weaponIndex: int): void {
        BlzSetUnitDiceSides(this.unit, diceSides, weaponIndex);
    }
    attackCooldown(weaponIndex: int): number {
        return BlzGetUnitAttackCooldown(this.unit, weaponIndex);
    }
    setAttackCooldown(cooldown: number, weaponIndex: int): void {
        BlzSetUnitAttackCooldown(this.unit, cooldown, weaponIndex);
    }
    armor(): number {
        return BlzGetUnitArmor(this.unit);
    }
    setArmor(armorAmount: number): void {
        BlzSetUnitArmor(this.unit, armorAmount);
    }
    hideAbility(abilId: AbilId, flag: boolean): void {
        BlzUnitHideAbility(this.unit, abilId.id, flag);
    }
    disableAbility(abilId: AbilId, flag: boolean, hideUI: boolean): void {
        BlzUnitDisableAbility(this.unit, abilId.id, flag, hideUI);
    }
    cancelTimedLife(): void {
        BlzUnitCancelTimedLife(this.unit);
    }
    isSelectable(): boolean {
        return BlzIsUnitSelectable(this.unit)
    }
    isInvulnerable(): boolean {
        return BlzIsUnitInvulnerable(this.unit);
    }
    interruptAttack(): void {
        BlzUnitInterruptAttack(this.unit);
    }
    collisionSize(): number {
        return BlzGetUnitCollisionSize(this.unit);
    }
    abilityCooldown(abilId: AbilId, level: int): number {
        return BlzGetUnitAbilityCooldown(this.unit, abilId.id, level);
    }
    abilityCooldownRemaining(abilId: AbilId): number {
        return BlzGetUnitAbilityCooldownRemaining(this.unit, abilId.id);
    }
    setAbilityCooldown(abilId: AbilId, level: int, cooldown: number): void {
        BlzSetUnitAbilityCooldown(this.unit, abilId.id, level, cooldown);
    }
    endAbilityCooldown(abilId: AbilId): void {
        BlzEndUnitAbilityCooldown(this.unit, abilId.id);
    }
    endAllAbilityCooldowns(): void {
        UnitResetCooldown(this.unit);
    }
    abilityManaCost(abilId: AbilId, level: int): int {
        return BlzGetUnitAbilityManaCost(this.unit, abilId.id, level) as int;
    }
    setAbilityManaCost(abilId: AbilId, level: int, manaCost: int): void {
        BlzSetUnitAbilityManaCost(this.unit, abilId.id, level, manaCost);
    }
    localZ(): number {
        return BlzGetLocalUnitZ(this.unit);
    }
    z(): number {
        return BlzGetUnitZ(this.unit);
    }

    alive(): boolean {
        return UnitAlive(this.unit);
    }
    kill(): void {
        KillUnit(this.unit);
    }
    show(show: boolean): void {
        ShowUnit(this.unit, show);
    }
    life(): number {
        return GetUnitState(this.unit, UNIT_STATE_LIFE);
    }
    setLife(newVal: number): void {
        SetUnitState(this.unit, UNIT_STATE_LIFE, newVal);
    }
    mana(): number {
        return GetUnitState(this.unit, UNIT_STATE_MANA);
    }
    setMana(newVal: number): void {
        SetUnitState(this.unit, UNIT_STATE_MANA, newVal);
    }

    x(): number {
        return GetUnitX(this.unit);
    }
    setX(newX: number): void {
        SetUnitX(this.unit, newX);
    }
    y(): number {
        return GetUnitY(this.unit);
    }
    setY(newY: number): void {
        SetUnitY(this.unit, newY);
    }
    xy(): xy {
        return [this.x(), this.y()];
    }
    xyz(): xyz {
        return [this.x(), this.y(), this.z()];
    }
    setXY(newXY: xy) {
        this.setX(newXY[0]);
        this.setY(newXY[1]);
    }
    setXYWithCollision(newXY: xy): void {
        SetUnitPosition(this.unit, newXY[0], newXY[1]);
    }
    setFacing(facingAngle: angle, duration?: number): void {
        if (duration == undefined) {
            SetUnitFacing(this.unit, facingAngle);
        } else {
            SetUnitFacingTimed(this.unit, facingAngle, duration);
        }
    }
    moveSpeed(): number {
        return GetUnitMoveSpeed(this.unit);
    }
    defaultMoveSpeed(): number {
        return GetUnitDefaultMoveSpeed(this.unit);
    }
    setMoveSpeed(newSpeed: number): void {
        SetUnitMoveSpeed(this.unit, newSpeed);
    }
    flyHeight(): number {
        return GetUnitFlyHeight(this.unit);
    }
    defaultFlyHeight(): number {
        return GetUnitDefaultFlyHeight(this.unit);
    }
    setFlyHeight(newHeight: number, rate?: number): void {
        if (rate == undefined) {
            SetUnitFlyHeight(this.unit, newHeight, 0);
        } else {
            SetUnitFlyHeight(this.unit, newHeight, rate);
        }
    }
    turnSpeed(): number {
        return GetUnitTurnSpeed(this.unit);
    }
    defaultTurnSpeed(): number {
        return GetUnitDefaultTurnSpeed(this.unit);
    }
    setTurnSpeed(newTurnSpeed: number): void {
        SetUnitTurnSpeed(this.unit, newTurnSpeed);
    }
    propWindow(): angle {
        return GetUnitPropWindow(this.unit);
    }
    defaultPropWindow(): angle {
        return GetUnitDefaultPropWindow(this.unit);
    }
    setPropWindow(newPropWindowAngle: angle): void {
        SetUnitPropWindow(this.unit, newPropWindowAngle);
    }
    acquireRange(): number {
        return GetUnitAcquireRange(this.unit);
    }
    defaultAcquireRange(): number {
        return GetUnitDefaultAcquireRange(this.unit);
    }
    setAcquireRange(newAcquireRange: number): void {
        SetUnitAcquireRange(this.unit, newAcquireRange);
    }
    setCreepGuard(creepGuard: boolean): void {
        SetUnitCreepGuard(this.unit, creepGuard);
    }

    setOwner(whichPlayer: player, changeColor: boolean): void {
        SetUnitOwner(this.unit, whichPlayer, changeColor);
    }
    setColor(whichColor: playercolor): void {
        SetUnitColor(this.unit, whichColor);
    }
    setScaleXYZ(scaleXYZ: xyz): void {
        SetUnitScale(this.unit, scaleXYZ[0], scaleXYZ[1], scaleXYZ[2]);
    }
    setTimeScale(timeScale: number): void {
        SetUnitTimeScale(this.unit, timeScale);
    }
    setBlendTime(blendTime: number): void {
        SetUnitBlendTime(this.unit, blendTime);
    }
    setVertexColor(rgba: rgba): void {
        SetUnitVertexColor(this.unit, rgba[0], rgba[1], rgba[2], rgba[3]);
    }

    queueAnimation(whichAnimation: string): void {
        QueueUnitAnimation(this.unit, whichAnimation);
    }
    setAnimation(whichAnimation: string): void {
        SetUnitAnimation(this.unit, whichAnimation);
    }
    setAnimationByIndex(whichAnimation: int): void {
        SetUnitAnimationByIndex(this.unit, whichAnimation);
    }
    setAnimationWithRarity(whichAnimation: string, rarity: raritycontrol): void {
        SetUnitAnimationWithRarity(this.unit, whichAnimation, rarity);
    }
    addAnimationProperties(animProperties: string, add: boolean): void {
        AddUnitAnimationProperties(this.unit, animProperties, add);
    }
    setLookAt(whichBone: string, lookAtTarget: unit, offsetXYZ: xyz): void {
        SetUnitLookAt(this.unit, whichBone, lookAtTarget, offsetXYZ[0], offsetXYZ[1], offsetXYZ[2]);
    }
    resetLookAt(): void {
        ResetUnitLookAt(this.unit);
    }

    setRescuable(byWhichPlayer: player, flag: boolean): void {
        SetUnitRescuable(this.unit, byWhichPlayer, flag);
    }
    setRescueRange(range: number): void {
        SetUnitRescueRange(this.unit, range);
    }
    heroStr(includeBonuses: boolean): int {
        return GetHeroStr(this.unit, includeBonuses) as int;
    }
    setHeroStr(newStr: int, permanent: boolean): void {
        SetHeroStr(this.unit, newStr, permanent);
    }
    heroAgi(includeBonuses: boolean): int {
        return GetHeroAgi(this.unit, includeBonuses) as int;
    }
    setHeroAgi(newAgi: int, permanent: boolean): void {
        SetHeroAgi(this.unit, newAgi, permanent);
    }
    heroInt(includeBonuses: boolean): int {
        return GetHeroInt(this.unit, includeBonuses) as int;
    }
    setHeroInt(newInt: int, permanent: boolean): void {
        SetHeroInt(this.unit, newInt, permanent);
    }
    stripHeroLevel(howManyLevels: int): boolean {
        return UnitStripHeroLevel(this.unit, howManyLevels);
    }
    heroXP(): int {
        return GetHeroXP(this.unit) as int;
    }
    setHeroXP(newXpVal: int, showEyeCandy: boolean): void {
        SetHeroXP(this.unit, newXpVal, showEyeCandy);
    }
    addHeroXP(xpToAdd: int, showEyeCandy: boolean): void {
        AddHeroXP(this.unit, xpToAdd, showEyeCandy);
    }
    suspendedXP(): boolean {
        return IsSuspendedXP(this.unit);
    }
    suspendHeroXP(flag: boolean): void {
        SuspendHeroXP(this.unit, flag);
    }
    heroSkillPoints(): int {
        return GetHeroSkillPoints(this.unit) as int;
    }
    modifySkillPoints(skillPointDelta: int): boolean {
        return UnitModifySkillPoints(this.unit, skillPointDelta);
    }
    heroLevel(): int {
        return GetHeroLevel(this.unit) as int;
    }
    setHeroLevel(level: int, showEyeCandy: boolean): void {
        SetHeroLevel(this.unit, level, showEyeCandy);
    }
    level(): int {
        return GetUnitLevel(this.unit) as int;
    }
    heroProperName(): string {
        return GetHeroProperName(this.unit);
    }
    selectHeroSkill(abilcode: AbilId): void {
        SelectHeroSkill(this.unit, abilcode.id);
    }
    abilityLevel(abilcode: AbilId): int {
        return GetUnitAbilityLevel(this.unit, abilcode.id) as int;
    }
    decAbilityLevel(abilcode: AbilId): int {
        return DecUnitAbilityLevel(this.unit, abilcode.id) as int;
    }
    incAbilityLevel(abilcode: AbilId): int {
        return IncUnitAbilityLevel(this.unit, abilcode.id) as int;
    }
    setAbilityLevel(abilcode: AbilId, level: int): int {
        return SetUnitAbilityLevel(this.unit, abilcode.id, level) as int;
    }
    reviveHero(xy: xy, doEyecandy: boolean): boolean {
        return ReviveHero(this.unit, xy[0], xy[1], doEyecandy);
    }
    setExploded(exploded: boolean): void {
        SetUnitExploded(this.unit, exploded);
    }
    setInvulnerable(flag: boolean): void {
        SetUnitInvulnerable(this.unit, flag);
    }
    paused(): boolean {
        return IsUnitPaused(this.unit);
    }
    pause(flag: boolean): void {
        PauseUnit(this.unit, flag);
    }
    setPathing(flag: boolean): void {
        SetUnitPathing(this.unit, flag);
    }
    static clearSelection(): void {
        ClearSelection();
    }
    select(flag: boolean): void {
        SelectUnit(this.unit, flag);
    }
    pointValue(): int {
        return GetUnitPointValue(this.unit) as int;
    }
    pointValueByType(unitType: UnitTypeId): int {
        return GetUnitPointValueByType(unitType.id) as int;
    }
    addItem(whichItem: item): boolean {
        return UnitAddItem(this.unit, whichItem);
    }
    addItemById(itemId: ItemId): item {
        return UnitAddItemById(this.unit, itemId.id);
    }
    addItemToSlotById(itemId: ItemId, itemSlot: int): boolean {
        return UnitAddItemToSlotById(this.unit, itemId.id, itemSlot);
    }
    removeItem(whichItem: item): void {
        UnitRemoveItem(this.unit, whichItem);
    }
    removeItemFromSlot(itemSlot: int): item {
        return UnitRemoveItemFromSlot(this.unit, itemSlot);
    }
    containsItem(whichItem: item): boolean {
        return UnitHasItem(this.unit, whichItem);
    }
    itemInSlot(itemSlot: int): item {
        return UnitItemInSlot(this.unit, itemSlot);
    }
    inventorySize(): int {
        return UnitInventorySize(this.unit) as int;
    }
    dropItemPoint(whichItem: item, xy: xy): boolean {
        return UnitDropItemPoint(this.unit, whichItem, xy[0], xy[1]);
    }
    dropItemSlot(whichItem: item, slot: int): boolean {
        return UnitDropItemSlot(this.unit, whichItem, slot);
    }
    dropItemTarget(whichItem: item, target: widget): boolean {
        return UnitDropItemTarget(this.unit, whichItem, target);
    }
    useItem(whichItem: item): boolean {
        return UnitUseItem(this.unit, whichItem);
    }
    useItemPoint(whichItem: item, xy: xy): boolean {
        return UnitUseItemPoint(this.unit, whichItem, xy[0], xy[1]);
    }
    useItemTarget(whichItem: item, target: widget): boolean {
        return UnitUseItemTarget(this.unit, whichItem, target);
    }
    facing(): angle {
        return GetUnitFacing(this.unit);
    }
    state(whichUnitState: unitstate): number {
        return GetUnitState(this.unit, whichUnitState);
    }
    owningPlayer(): player {
        return GetOwningPlayer(this.unit);
    }
    typeId(): UnitTypeId {
        return UnitTypeId.byId(GetUnitTypeId(this.unit) as int);
    }
    race(): race {
        return GetUnitRace(this.unit);
    }
    name(): string {
        return GetUnitName(this.unit);
    }
    foodUsed(): int {
        return GetUnitFoodUsed(this.unit) as int;
    }
    foodMade(): int {
        return GetUnitFoodMade(this.unit) as int;
    }
    setUseFood(useFood: boolean): void {
        SetUnitUseFood(this.unit, useFood);
    }

    rallyPointXY(): xy {
        let loc: location = GetUnitRallyPoint(this.unit);

        let x = GetLocationX(loc);
        let y = GetLocationY(loc);

        RemoveLocation(loc);

        return [x, y];
    }
    rallyUnit(): unit
    rallyDestructable(): destructable

    isInGroup(): boolean
    isInForce(whichForce: force): boolean

    isOwnedByPlayer(whichPlayer: player): boolean
    isAlly(whichPlayer: player): boolean
    isEnemy(whichPlayer: player): boolean
    isVisible(whichPlayer: player): boolean
    isDetected(whichPlayer: player): boolean
    isInvisible(whichPlayer: player): boolean
    isFogged(whichPlayer: player): boolean
    isMasked(whichPlayer: player): boolean
    isSelected(whichPlayer: player): boolean

    isRace(whichRace: race): boolean
    isType(whichUnitType: unittype): boolean
    inRangeUnit(otherUnit: unit, distance: number): boolean
    inRangeXY(circle: circle): boolean
    hidden(): boolean
    illusion(): boolean
    inTransport(whichTransport: unit): boolean
    loaded(): boolean
    shareVision(whichPlayer: player, share: boolean): void
    suspendDecay(suspend: boolean): void
    addType(whichUnitType: unittype): boolean
    removeType(whichUnitType: unittype): boolean
    addAbility(abilityId: AbilId): boolean
    removeAbility(abilityId: AbilId): boolean
    makeAbilityPermanent(permanent: boolean, abilityId: AbilId): boolean
    removeBuffs(removePositive: boolean, removeNegative: boolean): void
    removeBuffsEx(removePositive: boolean, removeNegative: boolean, magic: boolean, physical: boolean, timedLife: boolean, aura: boolean, autoDispel: boolean): void
    containsBuffsEx(removePositive: boolean, removeNegative: boolean, magic: boolean, physical: boolean, timedLife: boolean, aura: boolean, autoDispel: boolean): boolean
    countBuffsEx(removePositive: boolean, removeNegative: boolean, magic: boolean, physical: boolean, timedLife: boolean, aura: boolean, autoDispel: boolean): int
    addSleep(add: boolean): void
    canSleep(): boolean
    addSleepPerm(add: boolean): void
    canSleepPerm(): boolean
    sleeping(): boolean
    wakeUp(): void
    applyTimedLife(buffId: BuffId, duration: number): void
    ignoreAlarm(flag: boolean): boolean
    ignoreAlarmToggled(): boolean
    setConstructionProgress(constructionPercentage: int): void
    setUpgradeProgress(upgradePercentage: int): void
    pauseTimedLife(flag: boolean): void
    setUsesAltIcon(flag: boolean): void
    damagePoint(delay: number, circle: circle, amount: number, attack: boolean, ranged: boolean, attackType: attacktype, damageType: damagetype, weaponType: weapontype): boolean
    damageTarget(target: widget, amount: number, attack: boolean, ranged: boolean, attackType: attacktype, damageType: damagetype, weaponType: weapontype): boolean

    currentOrder(): orderId
    issueImmediateOrder(order: orderId): boolean
    issuePointOrder(order: orderId, xy: xy): boolean
    issueTargetOrder(order: orderId, targetWidget: widget): boolean
    issueInstantPointOrder(order: orderId, xy: xy, instantTargetWidget: widget): boolean
    issueInstantTargetOrder(order: orderId, targetWidget: widget, instantTargetWidget: widget): boolean
    issueBuildOrder(whichPeon: unit, unitId: number, xy: xy): boolean
    issueNeutralImmediateOrder(forWhichPlayer: player, neutralStructure: unit, unitId: number): boolean
    issueNeutralPointOrder(forWhichPlayer: player, neutralStructure: unit, unitId: number, xy: xy): boolean
    issueNeutralTargetOrder(forWhichPlayer: player, neutralStructure: unit, unitId: number, target: widget): boolean

    setResourceAmount(amount: number): void
    addResourceAmount(amount: number): void
    resourceAmount(): number

    waygateDestinationX(): number {
        return WaygateGetDestinationX(this.unit);
    }
    waygateDestinationY(): number {
        return WaygateGetDestinationY(this.unit);
    }
    waygateDestinationXY(): xy {
        return [this.waygateDestinationX(), this.waygateDestinationY()];
    }
    setWaygateDestinationXY(xy: xy): void {
        WaygateSetDestination(this.unit, xy[0], xy[1]);
    }
    waygateEnabled(): boolean {
        return WaygateIsActive(this.unit);
    }
    waygateEnable(enable: boolean): void {
        WaygateActivate(this.unit, enable);
    }

    addItemToAllStock(itemId: ItemId, currentStock: int, stockMax: int): void
    addItemToStock(itemId: ItemId, currentStock: int, stockMax: int): void
    addUnitIdToAllStock(unitId: UnitId, currentStock: int, stockMax: int): void
    addUnitIdToStock(unitId: UnitId, currentStock: int, stockMax: int): void
    removeItemFromAllStock(itemId: ItemId): void
    removeItemFromStock(itemId: ItemId): void
    removeUnitIdFromAllStock(unitId: UnitId): void
    removeUnitIdFromStock(unitId: UnitId): void
    setAllItemIdSlots(slots: int): void
    setAllUnitIdSlots(slots: int): void
    setItemIdSlots(slots: int): void
    setUnitIdSlots(slots: int): void

    ability(abilId: AbilId): ability
    abilityByIndex(index: int): ability
    pauseEx(flag: boolean): void

    addIndicator(rgba: rgba): void
}

class Group {
    constructor() {
        this.group = CreateGroup();
    }
    destroy(): void {
        DestroyGroup(this.group);
    }

    group: group;

    addUnit(whichUnit: unit): boolean {
        return GroupAddUnit(this.group, whichUnit);
    }
    removeUnit(whichUnit: unit): boolean {
        return GroupRemoveUnit(this.group, whichUnit);
    }
    addGroupFast(addGroup: group): int {
        return BlzGroupAddGroupFast(this.group, addGroup) as int;
    }
    removeGroupFast(removeGroup: group): int {
        return BlzGroupRemoveGroupFast(this.group, removeGroup) as int;
    }
    clear(): void {
        GroupClear(this.group);
    }
    size(): int {
        return BlzGroupGetSize(this.group) as int;
    }
    at(index: int): unit {
        return BlzGroupUnitAt(this.group, index);
    }
    first(): unit {
        return FirstOfGroup(this.group);
    }

    enumUnitsOfType(unitname: string, filter: boolexpr): void {
        GroupEnumUnitsOfType(this.group, unitname, filter);
    }
    enumUnitsOfPlayer(whichPlayer: player, filter: boolexpr, countLimit?: int): void {
        GroupEnumUnitsOfPlayer(this.group, whichPlayer, filter);
    }
    enumUnitsInRect(r: rect, filter: boolexpr, countLimit?: int): void {
        if (countLimit == undefined) {
            GroupEnumUnitsInRect(this.group, r, filter);
        } else {
            GroupEnumUnitsInRectCounted(this.group, r, filter, countLimit);
        }
    }
    enumUnitsInRange(circle: circle, filter?: boolexpr | null, countLimit?: int): void {
        if (countLimit == undefined) {
            GroupEnumUnitsInRange(this.group, circle[0][0], circle[0][1], circle[1], filter == undefined ? null : filter);
        } else {
            GroupEnumUnitsInRangeCounted(this.group, circle[0][0], circle[0][1], circle[1], filter == undefined ? null : filter, countLimit);
        }
    }
    enumUnitsSelected(whichPlayer: player, filter?: boolexpr | null): void {
        GroupEnumUnitsSelected(this.group, whichPlayer, filter == undefined ? null : filter);
    }

    issueImmediateOrder(order: orderId): boolean {
        return GroupImmediateOrderById(this.group, order.id);
    }
    issuePointOrderXY(order: orderId, xy: xy): boolean {
        return GroupPointOrderById(this.group, order.id, xy[0], xy[1]);
    }
    issueTargetOrder(order: orderId, targetWidget: widget): boolean {
        return GroupTargetOrderById(this.group, order.id, targetWidget);
    }

    for(callback: () => void): void {

    }
}

type unitBoolExpr = (u: Unit) => boolean;

class UnitListFactory {
    static dummyGroup: group = CreateGroup();
    static userFilter: unitBoolExpr = (u: Unit) => {
        return true;
    };
    static resultList: Array<Unit>
    static dummyFilter: boolexpr = Filter(() => {
        let u: Unit = Unit.byUnit(GetFilterUnit());

        UnitListFactory.resultList.push(u);

        return false;
    });
    static dummyFilterWithUserFilter: boolexpr = Filter(() => {
        let u: Unit = Unit.byUnit(GetFilterUnit());

        if (UnitListFactory.userFilter(u)) {
            UnitListFactory.resultList.push(u);
        }

        return false;
    });

    static enumUnitsOfType(unitname: string, filter?: unitBoolExpr | null): Array<Unit> {
        this.resultList = new Array<Unit>();

        let proxyFilter: boolexpr;

        if (filter == undefined) {
            proxyFilter = this.dummyFilter;
        } else {
            proxyFilter = this.dummyFilterWithUserFilter;
            this.userFilter = filter;
        }

        GroupEnumUnitsOfType(this.dummyGroup, unitname, proxyFilter);

        return this.resultList;
    }
    static enumUnitsOfPlayer(whichPlayer: player, filter?: unitBoolExpr | null): Array<Unit> {
        this.resultList = new Array<Unit>();

        let proxyFilter: boolexpr;

        if (filter == undefined) {
            proxyFilter = this.dummyFilter;
        } else {
            proxyFilter = this.dummyFilterWithUserFilter;
            this.userFilter = filter;
        }

        GroupEnumUnitsOfPlayer(this.dummyGroup, whichPlayer, proxyFilter);

        return this.resultList;
    }
    static enumUnitsInRect(r: rect, filter?: unitBoolExpr | null, countLimit?: int): Array<Unit> {
        this.resultList = new Array<Unit>();

        let proxyFilter: boolexpr;

        if (filter == undefined) {
            proxyFilter = this.dummyFilter;
        } else {
            proxyFilter = this.dummyFilterWithUserFilter;
            this.userFilter = filter;
        }

        if (countLimit == undefined) {
            GroupEnumUnitsInRect(this.dummyGroup, r, proxyFilter);
        } else {
            GroupEnumUnitsInRectCounted(this.dummyGroup, r, proxyFilter, countLimit);
        }

        return this.resultList;
    }
    static enumUnitsInRange(circle: circle, filter?: unitBoolExpr | null, countLimit?: int): Array<Unit> {
        this.resultList = new Array<Unit>();

        let proxyFilter: boolexpr;

        if (filter == undefined) {
            proxyFilter = this.dummyFilter;
        } else {
            proxyFilter = this.dummyFilterWithUserFilter;
            this.userFilter = filter;
        }

        if (countLimit == undefined) {
            GroupEnumUnitsInRange(this.dummyGroup, circle[0][0], circle[0][1], circle[1], proxyFilter);
        } else {
            GroupEnumUnitsInRangeCounted(this.dummyGroup, circle[0][0], circle[0][1], circle[1], proxyFilter, countLimit);
        }

        return this.resultList;
    }
    static enumUnitsSelected(whichPlayer: player, filter?: unitBoolExpr | null): Array<Unit> {
        this.resultList = new Array<Unit>();

        let proxyFilter: boolexpr;

        if (filter == undefined) {
            proxyFilter = this.dummyFilter;
        } else {
            proxyFilter = this.dummyFilterWithUserFilter;
            this.userFilter = filter;
        }

        GroupEnumUnitsSelected(this.dummyGroup, whichPlayer, proxyFilter);

        return this.resultList;
    }
}