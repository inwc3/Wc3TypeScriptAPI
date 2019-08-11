import { int, xy, xyz, rgb, rgba } from "./util";

class Trackable {
    static _byTrackable: Map<trackable, Trackable> = new Map<trackable, Trackable>();

    static create(trackableModelPath: string, xy: xy, facing: number): Trackable {
        return new Trackable(CreateTrackable(trackableModelPath, xy[0], xy[1], facing));
    }
    constructor(trackable: trackable) {
        this.trackable = trackable;

        Trackable._byTrackable.set(this.trackable, this);
    }
    static byTrackable(trackable: trackable): Trackable {
        return Trackable._byTrackable.has(trackable) ? Trackable._byTrackable.get(trackable) as Trackable : new Trackable(trackable);
    }

    trackable: trackable;

    static triggeringTrackable(): Trackable {
        return Trackable.byTrackable(GetTriggeringTrackable());
    }

    static registerTrack(trig: trigger) {
        TriggerRegisterGameEvent(trig, EVENT_GAME_TRACKABLE_TRACK);
    }
    static registerHit(trig: trigger) {
        TriggerRegisterGameEvent(trig, EVENT_GAME_TRACKABLE_HIT);
    }
}