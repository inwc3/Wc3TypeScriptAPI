class BoolExpr {
    and(operandA: boolexpr, operandB: boolexpr): boolexpr {
        return And(operandA, operandB);
    }
    or(operandA: boolexpr, operandB: boolexpr): boolexpr {
        return Or(operandA, operandB);
    }
    not(operand: boolexpr): boolexpr {
        return Not(operand);
    }
    create(func: () => boolean): boolexpr {
        return Condition(func);
    }
}

class Trigger {
    static instByTrig: Map<trigger, Trigger> = new Map<trigger, Trigger>();

    static create(): Trigger {
        return new Trigger(CreateTrigger());
    }
    constructor(trig: trigger) {
        this.trig = trig;

        Trigger.instByTrig.set(this.trig, this);

        TriggerWaitOnSleeps(this.trig, true);
    }
    static byTrig(trig: trigger): Trigger {
        if (Trigger.instByTrig.has(trig)) {
            return Trigger.instByTrig.get(trig) as Trigger;
        }

        return new Trigger(trig);
    }
    destroy(): void {
        DestroyTrigger(this.trig)
    }

    trig: trigger;

    static triggeringTrigger(): Trigger {
        return Trigger.byTrig(GetTriggeringTrigger());
    }
    static triggerEventId(): eventid {
        return this.triggerEventId();
    }

    reset(): void {
        ResetTrigger(this.trig)
    }
    enable(enable: boolean): void {
        IsTriggerEnabled(this.trig)
    }
    enabled(): boolean {
        return IsTriggerEnabled(this.trig)
    }
    //waitOnSleep(enable: boolean): void
    //waitsOnSleep(): boolean
    //evalCount(): int
    //execCount(): int

    addCondition(condition: boolexpr): triggercondition {
        return TriggerAddCondition(this.trig, condition);
    }
    removeCondition(whichCondition: triggercondition): void {
        TriggerRemoveCondition(this.trig, whichCondition);
    }
    clearConditions(): void {
        TriggerClearConditions(this.trig);
    }
    addAction(actionFunc: () => void): triggeraction {
        return TriggerAddAction(this.trig, actionFunc);
    }
    removeAction(whichAction: triggeraction): void {
        TriggerRemoveAction(this.trig, whichAction);
    }
    clearActions(): void {
        TriggerClearActions(this.trig);
    }
    sleep(timeout: number): void {
        TriggerSleepAction(timeout);
    }
    waitForSound(s: sound, offset: number): void {
        TriggerWaitForSound(s, offset);
    }
    eval(): boolean {
        return TriggerEvaluate(this.trig)
    }
    exec(): void {
        TriggerExecute(this.trig)
    }
    execWait(): void {
        TriggerExecuteWait(this.trig)
    }
    syncStart(): void {
        TriggerSyncStart()
    }
    syncReady(): void {
        TriggerSyncReady()
    }

    registerVariableEvent(varName: string, opcode: limitop, limitval: number): event {
        return TriggerRegisterVariableEvent(this.trig, varName, opcode, limitval);
    }
    registerTimerEvent(timeout: number, periodic: boolean): event {
        return TriggerRegisterTimerEvent(this.trig, timeout, periodic);
    }
    registerTimerExpireEvent(t: timer): event {
        return TriggerRegisterTimerExpireEvent(this.trig, t);
    }
    registerGameStateEvent(whichState: gamestate, opcode: limitop, limitval: number): event {
        return TriggerRegisterGameStateEvent(this.trig, whichState, opcode, limitval);
    }
    registerDialogEvent(whichDialog: dialog): event {
        return TriggerRegisterDialogEvent(this.trig, whichDialog);
    }
    registerDialogButtonEvent(whichButton: button): event {
        return TriggerRegisterDialogButtonEvent(this.trig, whichButton);
    }
    registerPlayerEvent(whichPlayer: player, whichPlayerEvent: playerevent): event {
        return TriggerRegisterPlayerEvent(this.trig, whichPlayer, whichPlayerEvent);
    }
    registerPlayerUnitEvent(whichPlayer: player, whichPlayerUnitEvent: playerunitevent, filter?: boolexpr): event {
        return TriggerRegisterPlayerUnitEvent(this.trig, whichPlayer, whichPlayerUnitEvent, filter == undefined ? null : filter);
    }
    registerGameEvent(whichGameEvent: gameevent): event {
        return TriggerRegisterGameEvent(this.trig, whichGameEvent);
    }
    registerEnterRegion(whichRegion: region, filter?: boolexpr): event {
        return TriggerRegisterEnterRegion(this.trig, whichRegion, filter == undefined ? null : filter);
    }
    registerLeaveRegion(whichRegion: region, filter?: boolexpr): event {
        return TriggerRegisterLeaveRegion(this.trig, whichRegion, filter == undefined ? null : filter);
    }
    registerTrackableHitEvent(t: trackable): event {
        return TriggerRegisterTrackableHitEvent(this.trig, t);
    }
    registerTrackableTrackEvent(t: trackable): event {
        return TriggerRegisterTrackableTrackEvent(this.trig, t);
    }
    registerPlayerAllianceChange(whichPlayer: player, whichAlliance: alliancetype): event {
        return TriggerRegisterPlayerAllianceChange(this.trig, whichPlayer, whichAlliance);
    }
    registerPlayerStateEvent(whichPlayer: player, whichState: playerstate, opcode: limitop, limitval: number): event {
        return TriggerRegisterPlayerStateEvent(this.trig, whichPlayer, whichState, opcode, limitval);
    }
    registerPlayerChatEvent(whichPlayer: player, chatMessageToDetect: string, exactMatchOnly: boolean): event {
        return TriggerRegisterPlayerChatEvent(this.trig, whichPlayer, chatMessageToDetect, exactMatchOnly);
    }
    registerDeathEvent(whichWidget: widget): event {
        return TriggerRegisterDeathEvent(this.trig, whichWidget);
    }
    registerUnitStateEvent(whichUnit: unit, whichState: unitstate, opcode: limitop, limitval: number): event {
        return TriggerRegisterUnitStateEvent(this.trig, whichUnit, whichState, opcode, limitval);
    }
    registerUnitEvent(whichUnit: unit, whichEvent: unitevent, filter?: boolexpr): event {
        if (filter == undefined) {
            return TriggerRegisterUnitEvent(this.trig, whichUnit, whichEvent);
        } else {
            return TriggerRegisterFilterUnitEvent(this.trig, whichUnit, whichEvent, filter);
        }
    }
    registerUnitInRange(whichUnit: unit, range: number, filter?: boolexpr): event {
        return TriggerRegisterUnitInRange(this.trig, whichUnit, range, filter == undefined ? null : filter);
    }
    registerFrameEvent(frame: framehandle, eventId: frameeventtype): event {
        return BlzTriggerRegisterFrameEvent(this.trig, frame, eventId);
    }
    registerPlayerSyncEvent(whichPlayer: player, prefix: string, fromServer: boolean): event {
        return BlzTriggerRegisterPlayerSyncEvent(this.trig, whichPlayer, prefix, fromServer);
    }
    registerPlayerKeyEvent(whichPlayer: player, key: oskeytype, metaKey: number, keyDown: boolean): event {
        return BlzTriggerRegisterPlayerKeyEvent(this.trig, whichPlayer, key, metaKey, keyDown);
    }
}

function execFunc(funcName: string): void {
    ExecuteFunc(funcName);
}