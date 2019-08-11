function eventAttackType(): attacktype {
    return BlzGetEventAttackType();
}
function setEventAttackType(attackType: attacktype): boolean {
    return BlzSetEventAttackType(attackType);
}
function eventDamageType(): damagetype {
    return BlzGetEventDamageType();
}
function setEventDamageType(damageType: damagetype): boolean {
    return BlzSetEventDamageType(damageType);
}
function eventWeaponType(): weapontype {
    return BlzGetEventWeaponType();
}
function setEventWeaponType(weaponType: weapontype): boolean {
    return BlzSetEventWeaponType(weaponType);
}
function eventDamage(): number {
    return GetEventDamage();
}
function setEventDamage(damage: number): void {
    BlzSetEventDamage(damage);
}
function eventDamageTarget(): unit {
    return BlzGetEventDamageTarget();
}

declare enum AttackType {
    ATTACK_TYPE_NORMAL,
    ATTACK_TYPE_MELEE,
    ATTACK_TYPE_PIERCE,
    ATTACK_TYPE_SIEGE,
    ATTACK_TYPE_MAGIC,
    ATTACK_TYPE_CHAOS,
    ATTACK_TYPE_HERO
}

declare enum DamageType {
    DAMAGE_TYPE_UNKNOWN,
    DAMAGE_TYPE_NORMAL,
    DAMAGE_TYPE_ENHANCED,
    DAMAGE_TYPE_FIRE,
    DAMAGE_TYPE_COLD,
    DAMAGE_TYPE_LIGHTNING,
    DAMAGE_TYPE_POISON,
    DAMAGE_TYPE_DISEASE,
    DAMAGE_TYPE_DIVINE,
    DAMAGE_TYPE_MAGIC,
    DAMAGE_TYPE_SONIC,
    DAMAGE_TYPE_ACID,
    DAMAGE_TYPE_FORCE,
    DAMAGE_TYPE_DEATH,
    DAMAGE_TYPE_MIND,
    DAMAGE_TYPE_PLANT,
    DAMAGE_TYPE_DEFENSIVE,
    DAMAGE_TYPE_DEMOLITION,
    DAMAGE_TYPE_SLOW_POISON,
    DAMAGE_TYPE_SPIRIT_LINK,
    DAMAGE_TYPE_SHADOW_STRIKE,
    DAMAGE_TYPE_UNIVERSAL
}

declare enum WeaponType {
    WEAPON_TYPE_WHOKNOWS,
    WEAPON_TYPE_METAL_LIGHT_CHOP,
    WEAPON_TYPE_METAL_MEDIUM_CHOP,
    WEAPON_TYPE_METAL_HEAVY_CHOP,
    WEAPON_TYPE_METAL_LIGHT_SLICE,
    WEAPON_TYPE_METAL_MEDIUM_SLICE,
    WEAPON_TYPE_METAL_HEAVY_SLICE,
    WEAPON_TYPE_METAL_MEDIUM_BASH,
    WEAPON_TYPE_METAL_HEAVY_BASH,
    WEAPON_TYPE_METAL_MEDIUM_STAB,
    WEAPON_TYPE_METAL_HEAVY_STAB,
    WEAPON_TYPE_WOOD_LIGHT_SLICE,
    WEAPON_TYPE_WOOD_MEDIUM_SLICE,
    WEAPON_TYPE_WOOD_HEAVY_SLICE,
    WEAPON_TYPE_WOOD_LIGHT_BASH,
    WEAPON_TYPE_WOOD_MEDIUM_BASH,
    WEAPON_TYPE_WOOD_HEAVY_BASH,
    WEAPON_TYPE_WOOD_LIGHT_STAB,
    WEAPON_TYPE_WOOD_MEDIUM_STAB,
    WEAPON_TYPE_CLAW_LIGHT_SLICE,
    WEAPON_TYPE_CLAW_MEDIUM_SLICE,
    WEAPON_TYPE_CLAW_HEAVY_SLICE,
    WEAPON_TYPE_AXE_MEDIUM_CHOP,
    WEAPON_TYPE_ROCK_HEAVY_BASH
}

declare enum TargetFlag {
    NONE,
    GROUND,
    AIR,
    STRUCTURE,
    WARD,
    ITEM,
    TREE,
    WALL,
    DEBRIS,
    DECORATION,
    BRIDGE
}

declare enum DefenseType {
    LIGHT,
    MEDIUM,
    LARGE,
    FORT,
    NORMAL,
    HERO,
    DIVINE,
    NONE
}

declare enum ArmorType {
    WHOKNOWS,
    FLESH,
    METAL,
    WOOD,
    ETHREAL,
    STONE
}