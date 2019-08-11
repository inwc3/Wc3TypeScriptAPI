class Quest {
    constructor() {
        this.quest = CreateQuest();
    }
    destroy(): void {
        DestroyQuest(this.quest);
    }

    quest: quest;

    setTitle(title: string): void {
        QuestSetTitle(this.quest, title);
    }
    setDescription(description: string): void {
        QuestSetDescription(this.quest, description);
    }
    setIconPath(iconPath: string): void {
        QuestSetIconPath(this.quest, iconPath);
    }

    required(): boolean {
        return IsQuestRequired(this.quest);
    }
    setRequired(required: boolean): void {
        QuestSetRequired(this.quest, required);
    }
    completed(): boolean {
        return IsQuestCompleted(this.quest);
    }
    setCompleted(completed: boolean): void {
        QuestSetCompleted(this.quest, completed);
    }
    discovered(): boolean {
        return IsQuestDiscovered(this.quest);
    }
    setDiscovered(discovered: boolean): void {
        QuestSetDiscovered(this.quest, discovered);
    }
    failed(): boolean {
        return IsQuestFailed(this.quest);
    }

    setFailed(failed: boolean): void {
        QuestSetFailed(this.quest, failed);
    }
    enabled(): boolean {
        return IsQuestEnabled(this.quest);
    }
    setEnabled(enabled: boolean): void {
        QuestSetEnabled(this.quest, enabled);
    }

    flashDialogButton(): void {
        FlashQuestDialogButton()
    }
    forceDialogUpdate(): void {
        ForceQuestDialogUpdate()
    }
}

class QuestItem {
    static create(whichQuest : Quest): QuestItem {
        return new QuestItem(QuestCreateItem(whichQuest.quest));
    }
    constructor(item: questitem) {
        this.item = item;
    }

    item: questitem;

    setDescription(description: string): void {
        QuestItemSetDescription(this.item, description);
    }
    completed(): boolean {
        return IsQuestItemCompleted(this.item);
    }
    setCompleted(completed: boolean): void {
        QuestItemSetCompleted(this.item, completed);
    }
}

class DefeatCondition {
    constructor() {
        this.cond = CreateDefeatCondition();
    }
    destroy(): void {
        DestroyDefeatCondition(this.cond);
    }

    cond: defeatcondition;

    setDescription(description: string): void {
        DefeatConditionSetDescription(this.cond, description);
    }
}