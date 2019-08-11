import { int } from "./util";

declare enum VolumeGroup {
    SOUND_VOLUMEGROUP_UNITMOVEMENT,
    SOUND_VOLUMEGROUP_UNITSOUNDS,
    SOUND_VOLUMEGROUP_COMBAT,
    SOUND_VOLUMEGROUP_SPELLS,
    SOUND_VOLUMEGROUP_UI,
    SOUND_VOLUMEGROUP_MUSIC,
    SOUND_VOLUMEGROUP_AMBIENTSOUNDS,
    SOUND_VOLUMEGROUP_FIRE
}

class VolumeGroupHelper {
    static get(vgroup, olumeGroup) : VolumeGroup;

    setVolume(scale: number): void

    static resetAll(): void
}

declare enum SoundType {
    SOUND_TYPE_EFFECT,
    SOUND_TYPE_EFFECT_LOOPED
}

declare enum SoundChannel {

}

class Sound {
    static create(fileName: string, looping: boolean, is3D: boolean, stopwhenoutofrange: boolean, fadeInRate: number, fadeOutRate: number, eaxSetting: string): Sound
    static createFilenameWithLabel(fileName: string, looping: boolean, is3D: boolean, stopwhenoutofrange: boolean, fadeInRate: number, fadeOutRate: number, SLKEntryName: string): Sound
    static createFromLabel(soundLabel: string, looping: boolean, is3D: boolean, stopwhenoutofrange: boolean, fadeInRate: number, fadeOutRate: number): Sound
    static createMIDI(soundLabel: string, fadeInRate: number, fadeOutRate: number): Sound
    destroyWhenDone(): void

    setParamsFromLabel(soundLabel: string): void
    setDistanceCutoff(cutoff: number): void
    setChannel(channel: SoundChannel): void
    setVolume(volume: number): void
    setPitch(pitch: number): void
    setPlayPosition(millisecs: number): void
    setDistances(minDist: number, maxDist: number): void
    setDistancesMinMax(minDist: [number, number]): void
    setConeAngles(inside: number, outside: number, outsideVolume: number): void
    setConeOrientation(x: number, y: number, z: number): void
    setConeOrientationXYZ(xyz: [number, number, number]): void
    setPos(x: number, y: number, z: number): void
    setPosXYZ(xyz: [number, number, number]): void
    setVelocity(x: number, y: number, z: number): void
    setVelocityXYZ(xyz: [number, number, number]): void
    attachToUnit(whichUnit: unit): void
    start(): void
    stop(killWhenDone: boolean, fadeOut: boolean): void
    setDuration(duration: number): void
    duration(): number

    registerStacked(byPosition: boolean, rectwidth: number, rectheight: number): void
    unregisterStacked(byPosition: boolean, rectwidth: number, rectheight: number): void

    playing(): boolean
    loading(): boolean

    static fileDuration(musicFileName: string): number
}

declare function newSoundEnv(environmentName: string): void

declare function setMapMusic(musicName: string, random: boolean, index: int): void
declare function clearMapMusic(): void
declare function playMusic(musicName: string, fromTomsecs?: [int, int]): void
declare function stopMusic(fadeOut: boolean): void
declare function resumeMusic(): void
declare function playThematicMusic(musicFileName: string, frommsecs?: int): void
declare function endThematicMusic(): void
declare function setMusicVolume(volume: number): void
declare function setMusicPlayPosition(millisecs: number): void
declare function setThematicMusicPlayPosition(millisecs: number): void