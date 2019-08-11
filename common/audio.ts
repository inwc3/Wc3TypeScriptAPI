import { int, xy, xyz, rgb, rgba } from "./util";

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
    private constructor(group: volumegroup) {
        this.group = group;
    }
    static get(group: volumegroup) : VolumeGroupHelper {
        return new VolumeGroupHelper(group);
    }

    group: volumegroup;

    setVolume(scale: number): void {
        VolumeGroupSetVolume(this.group, scale)
    }

    static resetAll(): void {
        VolumeGroupReset();
    }
}

declare enum SoundType {
    SOUND_TYPE_EFFECT,
    SOUND_TYPE_EFFECT_LOOPED
}

declare enum SoundChannel {

}

class Eax {
    constructor(name: string) {
        this._name = name;
    }

    _name: string;

    name(): string {
        return this._name;
    }

    CombatSoundsEAX: Eax = new Eax("CombatSoundsEAX");
    KotoDrumsEAX = new Eax("KotoDrumsEAX");
    SpellsEAX = new Eax("SpellsEAX");
    MissilesEAX = new Eax("MissilesEAX");
    HeroAcksEAX = new Eax("HeroAcksEAX");
    DoodadsEAX = new Eax("DoodadsEAX");
    DefaultEAXON = new Eax("DefaultEAXON");
}

class Sound {
    static bySound: Map<sound, Sound> = new Map<sound, Sound>();

    static create(fileName: string, looping: boolean, is3D: boolean, stopwhenoutofrange: boolean, fadeInOutRate: [number, number], eaxSetting: Eax): Sound {
        return new Sound(CreateSound(fileName, looping, is3D, stopwhenoutofrange, fadeInOutRate[0], fadeInOutRate[1], eaxSetting.name()));
    }
    static createFilenameWithLabel(fileName: string, looping: boolean, is3D: boolean, stopwhenoutofrange: boolean, fadeInOutRate: [number, number], SLKEntryName: string): Sound {
        return new Sound(CreateSoundFilenameWithLabel(fileName, looping, is3D, stopwhenoutofrange, fadeInOutRate[0], fadeInOutRate[1], SLKEntryName));
    }
    static createFromLabel(soundLabel: string, looping: boolean, is3D: boolean, stopwhenoutofrange: boolean, fadeInOutRate: [number, number]): Sound {
        return new Sound(CreateSoundFromLabel(soundLabel, looping, is3D, stopwhenoutofrange, fadeInOutRate[0], fadeInOutRate[1]));
    }
    static createMIDI(soundLabel: string, fadeInOutRate: [number, number]): Sound {
        return new Sound(CreateMIDISound(soundLabel, fadeInOutRate[0], fadeInOutRate[1]));
    }
    private constructor(sound: sound) {
        this.sound = sound;

        Sound.bySound.set(this.sound, this);
    }
    destroyWhenDone(): void {
        KillSoundWhenDone(this.sound);
    }

    sound: sound;

    setParamsFromLabel(soundLabel: string): void {
        SetSoundParamsFromLabel(this.sound, soundLabel);
    }
    setDistanceCutoff(cutoff: number): void {
        SetSoundDistanceCutoff(this.sound, cutoff);
    }
    setChannel(channel: SoundChannel): void {
        SetSoundChannel(this.sound, channel);
    }
    setVolume(volume: number): void {
        SetSoundVolume(this.sound, volume);
    }
    setPitch(pitch: number): void {
        SetSoundPitch(this.sound, pitch);
    }
    setPlayPosition(millisecs: number): void {
        SetSoundPlayPosition(this.sound, millisecs);
    }
    setDistancesMinMax(minMaxDist: [number, number]): void {
        SetSoundDistances(this.sound, minMaxDist[0], minMaxDist[1]);
    }
    setConeAngles(inside: number, outside: number, outsideVolume: number): void {
        SetSoundConeAngles(this.sound, inside, outside, outsideVolume);
    }
    setConeOrientationXYZ(xyz: xyz): void {
        SetSoundConeOrientation(this.sound, xyz[0], xyz[1], xyz[2]);
    }
    setXYZ(xyz: xyz): void {
        SetSoundPosition(this.sound, xyz[0], xyz[1], xyz[2]);
    }
    setVelocityXYZ(xyz: xyz): void {
        SetSoundVelocity(this.sound, xyz[0], xyz[1], xyz[2]);
    }
    attachToUnit(whichUnit: unit): void {
        AttachSoundToUnit(this.sound, whichUnit);
    }
    start(): void {
        StartSound(this.sound);
    }
    stop(killWhenDone: boolean, fadeOut: boolean): void {
        StopSound(this.sound, killWhenDone, fadeOut);
    }
    duration(): number {
        return GetSoundDuration(this.sound);
    }
    setDuration(duration: number): void {
        SetSoundDuration(this.sound, duration);
    }

    registerStacked(byPosition: boolean, rectwidthheight: xy): void {
        RegisterStackedSound(this.sound, byPosition, rectwidthheight[0], rectwidthheight[1]);
    }
    unregisterStacked(byPosition: boolean, rectwidthheight: xy): void {
        UnregisterStackedSound(this.sound, byPosition, rectwidthheight[0], rectwidthheight[1]);
    }

    playing(): boolean {
        return GetSoundIsPlaying(this.sound);
    }
    loading(): boolean {
        return GetSoundIsLoading(this.sound);
    }

    static fileDuration(musicFileName: string): number {
        return GetSoundFileDuration(musicFileName);
    }
}

function newSoundEnv(environmentName: string): void {
    NewSoundEnvironment(environmentName);
}

function setMapMusic(musicName: string, random: boolean, index: int): void {
    SetMapMusic(musicName, random, index);
}
function clearMapMusic(): void {
    ClearMapMusic();
}
function playMusic(musicName: string, fromTomsecs?: [int, int]): void {
    PlayMusic(musicName);
}
function stopMusic(fadeOut: boolean): void {
    StopMusic(fadeOut);
}
function resumeMusic(): void {
    ResumeMusic();
}
function playThematicMusic(musicFileName: string, frommsecs?: int): void {
    if (frommsecs == undefined) {
        PlayThematicMusic(musicFileName);
    } else {
        PlayThematicMusicEx(musicFileName, frommsecs);
    }
}
function endThematicMusic(): void {
    EndThematicMusic();
}
function setMusicVolume(volume: number): void {
    SetMusicVolume(volume);
}
function setMusicPlayPosition(millisecs: number): void {
    SetMusicPlayPosition(millisecs);
}
function setThematicMusicPlayPosition(millisecs: number): void {
    SetThematicMusicPlayPosition(millisecs);
}