class Timer {
    constructor() {
        this.timer = CreateTimer();
    }
    destroy(): void {
        DestorTimer(this.timer)
    }

    static expiredTimer(): timer

    start(timeout: number, periodic: boolean, handlerFunc: () => void): void
    elapsed(): number
    remaining(): number
    timeout(): number
    pauseTimer(): void
    resumeTimer(): void
}

class TimerDialog {
    constructor(t: timer): Timerdialog {
        this.dialog = CreateTimerDialog(t);
    }
    destroyTimerDialog(): void {
        DestroyTimerDialog(this.dialog);
    }

    setTitle(title: string): void
    setTitleColor(red: number, green: number, blue: number, alpha: number): void
    setTimeColor(red: number, green: number, blue: number, alpha: number): void
    setSpeed(speedMultFactor: number): void
    setRealTimeRemaining(timeRemaining: number): void

    display(display: boolean): void
    displayed(): boolean
}