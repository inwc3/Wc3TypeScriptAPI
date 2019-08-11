declare enum AnimType {
    ANIM_TYPE_BIRTH,
    ANIM_TYPE_DEATH,
    ANIM_TYPE_DECAY,
    ANIM_TYPE_DISSIPATE,
    ANIM_TYPE_STAND,
    ANIM_TYPE_WALK,
    ANIM_TYPE_ATTACK,
    ANIM_TYPE_MORPH,
    ANIM_TYPE_SLEEP,
    ANIM_TYPE_SPELL,
    ANIM_TYPE_PORTRAIT
}

declare enum SubAnimType {
    SUBANIM_TYPE_ROOTED,
    SUBANIM_TYPE_ALTERNATE_EX,
    SUBANIM_TYPE_LOOPING,
    SUBANIM_TYPE_SLAM,
    SUBANIM_TYPE_THROW,
    SUBANIM_TYPE_SPIKED,
    SUBANIM_TYPE_FAST,
    SUBANIM_TYPE_SPIN,
    SUBANIM_TYPE_READY,
    SUBANIM_TYPE_CHANNEL,
    SUBANIM_TYPE_DEFEND,
    SUBANIM_TYPE_VICTORY,
    SUBANIM_TYPE_TURN,
    SUBANIM_TYPE_LEFT,
    SUBANIM_TYPE_RIGHT,
    SUBANIM_TYPE_FIRE,
    SUBANIM_TYPE_FLESH,
    SUBANIM_TYPE_HIT,
    SUBANIM_TYPE_WOUNDED,
    SUBANIM_TYPE_LIGHT,
    SUBANIM_TYPE_MODERATE,
    SUBANIM_TYPE_SEVERE,
    SUBANIM_TYPE_CRITICAL,
    SUBANIM_TYPE_COMPLETE,
    SUBANIM_TYPE_GOLD,
    SUBANIM_TYPE_LUMBER,
    SUBANIM_TYPE_WORK,
    SUBANIM_TYPE_TALK,
    SUBANIM_TYPE_FIRST,
    SUBANIM_TYPE_SECOND,
    SUBANIM_TYPE_THIRD,
    SUBANIM_TYPE_FOURTH,
    SUBANIM_TYPE_FIFTH,
    SUBANIM_TYPE_ONE,
    SUBANIM_TYPE_TWO,
    SUBANIM_TYPE_THREE,
    SUBANIM_TYPE_FOUR,
    SUBANIM_TYPE_FIVE,
    SUBANIM_TYPE_SMALL,
    SUBANIM_TYPE_MEDIUM,
    SUBANIM_TYPE_LARGE,
    SUBANIM_TYPE_UPGRADE,
    SUBANIM_TYPE_DRAIN,
    SUBANIM_TYPE_FILL,
    SUBANIM_TYPE_CHAINLIGHTNING,
    SUBANIM_TYPE_EATTREE,
    SUBANIM_TYPE_PUKE,
    SUBANIM_TYPE_FLAIL,
    SUBANIM_TYPE_OFF,
    SUBANIM_TYPE_SWIM,
    SUBANIM_TYPE_ENTANGLE,
    SUBANIM_TYPE_BERSERK
}

function animName(whichAnim: animtype): string {
    return BlzGetAnimName(whichAnim);
}

declare enum RarityControl {
    RARITY_FREQUENT,
    RARITY_RARE
}