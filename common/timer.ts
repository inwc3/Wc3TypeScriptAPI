import { int, xy, xyz, rgb, rgba } from "./util";

class Timer {
    static instByTrig: Map<timer, Timer> = new Map<timer, Timer>();

    constructor(timer?: timer) {
        this.timer = timer == undefined ? CreateTimer() : timer;

        Timer.instByTrig.set(this.timer, this);
    }
    static byTimer(timer: timer): Timer {
        if (Timer.instByTrig.has(timer)) {
            return Timer.instByTrig.get(timer) as Timer;
        }

        return new Timer(timer);
    }
    destroy(): void {
        DestroyTimer(this.timer)
    }

    timer: timer;

    static expiredTimer(): Timer {
        return Timer.byTimer(GetExpiredTimer());
    }

    start(timeout: number, periodic: boolean, handlerFunc: () => void): void {
        TimerStart(this.timer, timeout, periodic, handlerFunc);
    }
    elapsed(): number {
        return TimerGetElapsed(this.timer);
    }
    remaining(): number {
        return TimerGetRemaining(this.timer);
    }
    timeout(): number {
        return TimerGetTimeout(this.timer);
    }
    pauseTimer(): void {
        PauseTimer(this.timer);
    }
    resumeTimer(): void {
        ResumeTimer(this.timer);
    }
}

class TimerDialog {
    constructor(t: timer) {
        this.dialog = CreateTimerDialog(t);
    }
    destroyTimerDialog(): void {
        DestroyTimerDialog(this.dialog);
    }

    dialog: timerdialog;

    setTitle(title: string): void {
        TimerDialogSetTitle(this.dialog, title);
    }
    setTitleColor(rgba: rgba): void {
        TimerDialogSetTitleColor(this.dialog, rgba[0], rgba[1], rgba[2], rgba[3]);
    }
    setTimeColor(rgba: rgba): void {
        TimerDialogSetTimeColor(this.dialog, rgba[0], rgba[1], rgba[2], rgba[3]);
    }
    setSpeed(speedMultFactor: number): void {
        TimerDialogSetSpeed(this.dialog, speedMultFactor);
    }
    setRealTimeRemaining(timeRemaining: number): void {
        TimerDialogSetRealTimeRemaining(this.dialog, timeRemaining);
    }

    display(display: boolean): void {
        TimerDialogDisplay(this.dialog, display);
    }
    displayed(): boolean {
        return IsTimerDialogDisplayed(this.dialog);
    }
}