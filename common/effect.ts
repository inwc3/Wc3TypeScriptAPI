import { int, xy, xyz, rgb, rgba } from "./util";

declare enum EffectType {
    EFFECT_TYPE_EFFECT,
    EFFECT_TYPE_TARGET,
    EFFECT_TYPE_CASTER,
    EFFECT_TYPE_SPECIAL,
    EFFECT_TYPE_AREA_EFFECT,
    EFFECT_TYPE_MISSILE,
    EFFECT_TYPE_LIGHTNING
}

class Effect {
    static create(modelName: string, xy: xy): Effect {
        return new Effect(AddSpecialEffect(modelName, xy[0], xy[1]));
    }
    static createTarget(modelName: string, targetWidget: widget, attachPointName: string): Effect {
        return new Effect(AddSpecialEffectTarget(modelName, targetWidget, attachPointName));
    }
    constructor(sfx: effect) {
        this.sfx = sfx;
    }
    destroy(): void {
        DestroyEffect(this.sfx);
    }

    sfx: effect;

    static createByAbility(abilId: number, t: effecttype, xy: xy): Effect {
        return new Effect(AddSpellEffectById(abilId, t, xy[0], xy[1]));
    }
    static createTargetBySpell(abilId: number, t: effecttype, targetWidget: widget, attachPoint: string): Effect {
        return new Effect(AddSpellEffectTargetById(abilId, t, targetWidget, attachPoint));
    }

    setAlpha(alpha: number): void {
        BlzSetSpecialEffectAlpha(this.sfx, alpha);
    }
    setColorRGB(rgb: rgb): void {
        BlzSetSpecialEffectColor(this.sfx, rgb[0], rgb[1], rgb[2]);
    }
    setColorRGB(rgba: rgba): void {
        this.setColorRGB(this.sfx, [rgba[0], rgba[1], rgba[2]]);
        this.setAlpha(rgba[3]);
    }
    setColorByPlayer(whichPlayer: player): void {
        BlzSetSpecialEffectColorByPlayer(this.sfx, whichPlayer);
    }

    setHeight(height: number): void {
        BlzSetSpecialEffectHeight(this.sfx, height);
    }
    setTime(time: number): void {
        BlzSetSpecialEffectTime(this.sfx, time);
    }
    setTimeScale(timeScale: number): void {
        BlzSetSpecialEffectTimeScale(this.sfx, timeScale);
    }

    setRoll(roll: number): void {
        BlzSetSpecialEffectRoll(this.sfx, roll);
    }
    setPitch(pitch: number): void {
        BlzSetSpecialEffectPitch(this.sfx, pitch);
    }
    setYaw(yaw: number): void {
        BlzSetSpecialEffectYaw(this.sfx, yaw);
    }
    setOrientation(rollPitchYaw: xyz): void {
        BlzSetSpecialEffectOrientation(this.sfx, rollPitchYaw[2], rollPitchYaw[1], rollPitchYaw[0]);
    }

    localX(): number {
        return BlzGetLocalSpecialEffectX(this.sfx);
    }
    localY(): number {
        return BlzGetLocalSpecialEffectY(this.sfx);
    }
    localZ(): number {
        return BlzGetLocalSpecialEffectZ(this.sfx);
    }
    localXY(): xy {
        return [this.localX(), this.localY()];
    }
    localXYZ(): xyz {
        return [this.localX(), this.localY(), this.localZ()];
    }
    setX(x: number): void {
        BlzSetSpecialEffectX(this.sfx, x);
    }
    setY(y: number): void {
        BlzSetSpecialEffectY(this.sfx, y);
    }
    setZ(z: number): void {
        BlzSetSpecialEffectZ(this.sfx, z);
    }
    setXY(xy: xy): void {
        this.setX(xy[0]);
        this.setY(xy[1]);
    }
    setXYZ(xyz: xyz): void {
        BlzSetSpecialEffectPosition(this.sfx, xyz[0], xyz[1], xyz[2]);
    }
    clearSubAnimations(): void {
        BlzSpecialEffectClearSubAnimations(this.sfx);
    }
    removeSubAnimation(whichSubAnim: subanimtype): void {
        BlzSpecialEffectRemoveSubAnimation(this.sfx, whichSubAnim);
    }
    addSubAnimation(whichSubAnim: subanimtype): void {
        BlzSpecialEffectAddSubAnimation(this.sfx, whichSubAnim);
    }
    play(whichAnim: animtype): void {
        BlzPlaySpecialEffect(this.sfx, whichAnim);
    }
    playWithTimeScale(whichAnim: animtype, timeScale: number): void {
        BlzPlaySpecialEffectWithTimeScale(this.sfx, whichAnim, timeScale);
    }

    scale(): number {
        return BlzGetSpecialEffectScale(this.sfx);
    }
    setScale(scale: number): void {
        BlzSetSpecialEffectScale(this.sfx, scale);
    }
    setScaleXYZ(xyz: xyz): void {
        BlzSetSpecialEffectMatrixScale(this.sfx, xyz[0], xyz[1], xyz[2]);
    }
    resetScaleXYZ(): void {
        BlzResetSpecialEffectMatrix(this.sfx);
    }
}

class Lightning {
    static create(codeName: string, checkVisibility: boolean, xy1: xy, xy2: xy): Lightning {
        return new Lightning(AddLightning(codeName, checkVisibility, xy1[0], xy1[1], xy2[0], xy2[1]));
    }
    static createWithZ(codeName: string, checkVisibility: boolean, xyz1: xyz, xyz2: xyz): Lightning {
        return new Lightning(AddLightningEx(codeName, checkVisibility, xyz1[0], xyz1[1], xyz1[2], xyz2[0], xyz2[1], xyz2[2]));
    }
    constructor(bolt: lightning) {
        this._bolt = bolt;
    }
    destroy(): boolean {
        return DestroyLightning(this._bolt);
    }

    _bolt: lightning;

    move(checkVisibility: boolean, xy1: xy, xy2: xy): boolean {
        return MoveLightning(this._bolt, checkVisibility, xy1[0], xy1[1], xy2[0], xy2[1]);
    }
    moveWithZ(checkVisibility: boolean, xyz1: xyz, xyz2: xyz): boolean {
        return MoveLightningEx(this._bolt, checkVisibility, xyz1[0], xyz1[1], xyz1[2], xyz2[0], xyz2[1], xyz2[2]);
    }
    colorRGBA(): rgba {
        return [GetLightningColorR(this._bolt), GetLightningColorG(this._bolt), GetLightningColorB(this._bolt), GetLightningColorA(this._bolt)];
    }
    setColorRGBA(rgba: rgba): boolean {
        SetLightningColor(this._bolt, rgba[0], rgba[1], rgba[2], rgba[3]);
    }
}

class TextTag {
    constructor() {
        this._tag = CreateTextTag();
    }
    destroy(): void {
        DestroyTextTag(this._tag);
    }

    _tag: texttag;

    setText(s: string, fontSize: number): void {
        SetTextTagText(this._tag, s, fontSize);
    }
    setXY(xy: xy, heightOffset?: number): void {
        SetTextTagPos(this._tag, xy[0], xy[1], heightOffset == undefined ? 0 : heightOffset);
    }
    setAboveUnit(whichUnit: unit, heightOffset?: number): void {
        SetTextTagPosUnit(this._tag, whichUnit, heightOffset == undefined ? 0 : heightOffset);
    }
    setColor(rgba: rgba): void {
        SetTextTagColor(this._tag, rgba[0], rgba[1], rgba[2], rgba[3]);
    }
    setVelocity(xyvel: xy): void {
        SetTextTagVelocity(this._tag, xyvel[0], xyvel[1]);
    }
    setVisibility(flag: boolean): void {
        SetTextTagVisibility(this._tag, flag);
    }
    setSuspended(flag: boolean): void {
        SetTextTagSuspended(this._tag, flag);
    }
    setPermanent(flag: boolean): void {
        SetTextTagPermanent(this._tag, flag);
    }
    setAge(age: number): void {
        SetTextTagAge(this._tag, age);
    }
    setLifespan(lifespan: number): void {
        SetTextTagLifespan(this._tag, lifespan);
    }
    setFadepoint(fadepoint: number): void {
        SetTextTagFadepoint(this._tag, fadepoint);
    }
}

class WeatherEffect {
    constructor(where: rect, effectID: number) {
        this._sfx = AddWeatherEffect(where, effectID);
    }
    destroy(): void {
        RemoveWeatherEffect(this._sfx);
    }

    _sfx: weathereffect;

    enable(enable: boolean): void {
        EnableWeatherEffect(this._sfx, enable);
    }
}