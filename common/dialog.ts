import { int, xy, xyz, rgb, rgba } from "./util";

class Button {
    constructor(btn: button) {
        this.btn = btn;
    }
    destroy(): void {
        this.onClickTrigs.forEach(onClickTrig => {
            onClickTrig.destroy();
        });
    }

    btn: button;
    onClickTrigs: Set<Trigger> = new Set<Trigger>();

    static clickedButton(): button {
        return GetClickedButton();
    }

    onClick(action: () => void): void {
        let trig = Trigger.create();

        this.onClickTrigs.add(trig);

        trig.addAction(action);

        trig.registerDialogButtonEvent(this.btn);
    }
}

class Dialog {
    static _byDialog: Map<dialog, Dialog> = new Map<dialog, Dialog>();

    constructor(dialog?: dialog) {
        this.dialog = dialog == undefined ? DialogCreate() : dialog;

        Dialog._byDialog.set(this.dialog, this);
    }
    static byDialog(dialog: dialog): Dialog {
        return this._byDialog.has(dialog) ? this._byDialog.get(dialog) as Dialog : new Dialog();
    }
    destroy(): void {
        DialogDestroy(this.dialog);
    }

    static clickedDialog(): Dialog {
        return this.byDialog(GetClickedDialog());
    }

    dialog: dialog;
    onClickTrigs: Set<Trigger> = new Set<Trigger>();
    btns: Set<Button> = new Set<Button>();

    clear(): void {
        this.btns.forEach(btn => {
            btn.destroy();
        });
        DialogClear(this.dialog);
    }
    setMessage(messageText: string): void {
        DialogSetMessage(this.dialog, messageText);
    }
    addButton(buttonText: string, hotkey: number): button {
        let btn: button = DialogAddButton(this.dialog, buttonText, hotkey);

        this.btns.add(new Button(btn));

        return btn;
    }
    addQuitButton(doScoreScreen: boolean, buttonText: string, hotkey: int): button {
        let btn: button = DialogAddQuitButton(this.dialog, doScoreScreen, buttonText, hotkey);

        this.btns.add(new Button(btn));

        return btn;
    }
    display(whichPlayer: player, flag: boolean): void {
        DialogDisplay(whichPlayer, this.dialog, flag);
    }
    onClick(action: () => void): void {
        let trig = Trigger.create();

        this.onClickTrigs.add(trig);

        trig.addAction(action);

        trig.registerDialogEvent(this.dialog);
    }
}