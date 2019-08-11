class Quest {
    constructor() {
        this.quest = CreateQuest();
    }
    destroy(): void {
        DestroyQuest(this.quest);
    }

    questSetTitle(title: string): void
    questSetDescription(description: string): void
    questSetIconPath(iconPath: string): void
    questSetRequired(required: boolean): void
    questSetCompleted(completed: boolean): void
    questSetDiscovered(discovered: boolean): void
    questSetFailed(failed: boolean): void
    questSetEnabled(enabled: boolean): void
    required(): boolean
    completed(): boolean
    discovered(): boolean
    failed(): boolean
    enabled(): boolean

    flashDialogButton(): void {
        FlashQuestDialogButton()
    }
    forceDialogUpdate(): void {
        ForceQuestDialogUpdate()
    }
}

class QuestItem {
    static create(whichQuest : Quest): questitem

    setDescription(description: string): void
    setCompleted(completed: boolean): void
    completed(): boolean
}

class DefeatCondition {
    constructor() {
        this.cond = CreateDefeatCondition();
    }
    destroy(): void {
        DestroyDefeatCondition(this.cond)
    }

    setDescription(description: string): void
}