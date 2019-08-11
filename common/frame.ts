declare enum OriginFrameType {
    ORIGIN_FRAME_GAME_UI,
    ORIGIN_FRAME_COMMAND_BUTTON,
    ORIGIN_FRAME_HERO_BAR,
    ORIGIN_FRAME_HERO_BUTTON,
    ORIGIN_FRAME_HERO_HP_BAR,
    ORIGIN_FRAME_HERO_MANA_BAR,
    ORIGIN_FRAME_HERO_BUTTON_INDICATOR,
    ORIGIN_FRAME_ITEM_BUTTON,
    ORIGIN_FRAME_MINIMAP,
    ORIGIN_FRAME_MINIMAP_BUTTON,
    ORIGIN_FRAME_SYSTEM_BUTTON,
    ORIGIN_FRAME_TOOLTIP,
    ORIGIN_FRAME_UBERTOOLTIP,
    ORIGIN_FRAME_CHAT_MSG,
    ORIGIN_FRAME_UNIT_MSG,
    ORIGIN_FRAME_TOP_MSG,
    ORIGIN_FRAME_PORTRAIT,
    ORIGIN_FRAME_WORLD_FRAME
}

declare enum FramePointType {
    FRAMEPOINT_TOPLEFT,
    FRAMEPOINT_TOP,
    FRAMEPOINT_TOPRIGHT,
    FRAMEPOINT_LEFT,
    FRAMEPOINT_CENTER,
    FRAMEPOINT_RIGHT,
    FRAMEPOINT_BOTTOMLEFT,
    FRAMEPOINT_BOTTOM,
    FRAMEPOINT_BOTTOMRIGHT
}

declare enum TextAlignType {
    TEXT_JUSTIFY_TOP,
    TEXT_JUSTIFY_MIDDLE,
    TEXT_JUSTIFY_BOTTOM,
    TEXT_JUSTIFY_LEFT,
    TEXT_JUSTIFY_CENTER,
    TEXT_JUSTIFY_RIGHT
}

declare enum FrameEventType {
    FRAMEEVENT_CONTROL_CLICK,
    FRAMEEVENT_MOUSE_ENTER,
    FRAMEEVENT_MOUSE_LEAVE,
    FRAMEEVENT_MOUSE_UP,
    FRAMEEVENT_MOUSE_DOWN,
    FRAMEEVENT_MOUSE_WHEEL,
    FRAMEEVENT_CHECKBOX_CHECKED,
    FRAMEEVENT_CHECKBOX_UNCHECKED,
    FRAMEEVENT_EDITBOX_TEXT_CHANGED,
    FRAMEEVENT_POPUPMENU_ITEM_CHANGED,
    FRAMEEVENT_MOUSE_DOUBLECLICK,
    FRAMEEVENT_SPRITE_ANIM_UPDATE,
    FRAMEEVENT_SLIDER_VALUE_CHANGED,
    FRAMEEVENT_DIALOG_CANCEL,
    FRAMEEVENT_DIALOG_ACCEPT,
    FRAMEEVENT_EDITBOX_ENTER
}

function originFrame(frameType: originframetype, index: number): framehandle {
    return BlzGetOriginFrame(frameType, index);
}
function hideOriginFrames(enable: boolean): void {
    BlzHideOriginFrames(enable);
}

class Frame {
    private constructor(frame: framehandle) {
        this.frame = frame;
    }
    static byFrame(frame: framehandle) {
        return new Frame(frame);
    }
    static loadTOCFile(TOCFile: string): boolean {
        return BlzLoadTOCFile(TOCFile);
    }
    static create(name: string, owner: framehandle, priority: number, createContext: number): Frame {
        return new Frame(BlzCreateFrame(name, owner, priority, createContext));
    }
    static createSimple(name: string, owner: framehandle, createContext: number): Frame {
        return new Frame(BlzCreateSimpleFrame(name, owner, createContext));
    }
    static createByType(typeName: string, name: string, owner: framehandle, inherits: string, createContext: number): Frame {
        return new Frame(BlzCreateFrameByType(typeName, name, owner, inherits, createContext));
    }
    static byName(name: string, createContext: number): Frame {
        return this.byFrame(BlzGetFrameByName(name, createContext));
    }
    destroy(): void {
        BlzDestroyFrame(this.frame);
    }

    frame: framehandle;

    setPoint(point: framepointtype, relative: framehandle, relativePoint: framepointtype, x: number, y: number): void {
        BlzFrameSetPoint(this.frame, point, relative, relativePoint, x, y);
    }
    setAbsPoint(point: framepointtype, x: number, y: number): void {
        BlzFrameSetAbsPoint(this.frame, point, x, y);
    }
    clearAllPoints(): void {
        BlzFrameClearAllPoints(this.frame);
    }
    setAllPoints(relative: framehandle): void {
        BlzFrameSetAllPoints(this.frame, relative);
    }
    visible(): boolean {
        return BlzFrameIsVisible(this.frame);
    }
    setVisible(visible: boolean): void {
        BlzFrameSetVisible(this.frame, visible);
    }
    name(): string {
        return BlzFrameGetName(this.frame);
    }
    click(): void {
        BlzFrameClick(this.frame);
    }
    text(): string {
        return BlzFrameGetText(this.frame);
    }
    setText(text: string): void {
        BlzFrameSetText(this.frame, text);
    }
    textSizeLimit(): number {
        return BlzFrameGetTextSizeLimit(this.frame);
    }
    setTextSizeLimit(size: number): void {
        BlzFrameSetTextSizeLimit(this.frame, size);
    }
    setTextColor(color: number): void {
        BlzFrameSetTextColor(this.frame, color);
    }
    setFocus(flag: boolean): void {
        BlzFrameSetFocus(this.frame, flag);
    }
    setModel(modelFile: string, cameraIndex: number): void {
        BlzFrameSetModel(this.frame, modelFile, cameraIndex);
    }
    enabled(): boolean {
        return BlzFrameGetEnable(this.frame);
    }
    enable(enabled: boolean): void {
        BlzFrameSetEnable(this.frame, enabled);
    }
    alpha(): number {
        return BlzFrameGetAlpha(this.frame);
    }
    setAlpha(alpha: number): void {
        BlzFrameSetAlpha(this.frame, alpha);
    }
    setSpriteAnimate(primaryProp: number, flags: number): void {
        BlzFrameSetSpriteAnimate(this.frame, primaryProp, flags);
    }
    setTex(texFile: string, flag: number, blend: boolean): void {
        BlzFrameSetTexture(this.frame, texFile, flag, blend);
    }
    setScale(scale: number): void {
        BlzFrameSetScale(this.frame, scale);
    }
    setTooltip(tooltip: framehandle | null): void {
        BlzFrameSetTooltip(this.frame, tooltip);
    }
    cageMouse(enable: boolean): void {
        BlzFrameCageMouse(this.frame, enable);
    }
    value(): number {
        return BlzFrameGetValue(this.frame);
    }
    setValue(value: number): void {
        BlzFrameSetValue(this.frame, value);
    }
    setMinMaxValue(minValue: number, maxValue: number): void {
        BlzFrameSetMinMaxValue(this.frame, minValue, maxValue);
    }
    setStepSize(stepSize: number): void {
        BlzFrameSetStepSize(this.frame, stepSize);
    }
    setSize(width: number, height: number): void {
        BlzFrameSetSize(this.frame, width, height);
    }
    setVertexColor(color: number): void {
        BlzFrameSetVertexColor(this.frame, color);
    }
    setLevel(level: number): void {
        BlzFrameSetLevel(this.frame, level);
    }
    parent(): Frame {
        return Frame.byFrame(BlzFrameGetParent(this.frame));
    }
    setParent(parent: framehandle): void {
        BlzFrameSetParent(this.frame, parent);
    }
    height(): number {
        return BlzFrameGetHeight(this.frame);
    }
    width(): number {
        return BlzFrameGetWidth(this.frame);
    }
    setFont(fileName: string, height: number, flags: number): void {
        BlzFrameSetFont(this.frame, fileName, height, flags);
    }
    setTextAlignment(vert: textaligntype, horz: textaligntype): void {
        BlzFrameSetTextAlignment(this.frame, vert, horz);
    }

    static trigger(): Frame {
        return this.byFrame(BlzGetTriggerFrame());
    }
    static triggerEvent(): frameeventtype {
        return BlzGetTriggerFrameEvent();
    }
}