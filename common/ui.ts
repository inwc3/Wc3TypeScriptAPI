declare enum OriginFrameType {
    ORIGIN_FRAME_GAME_UI: originframetype
    ORIGIN_FRAME_COMMAND_BUTTON: originframetype
    ORIGIN_FRAME_HERO_BAR: originframetype
    ORIGIN_FRAME_HERO_BUTTON: originframetype
    ORIGIN_FRAME_HERO_HP_BAR: originframetype
    ORIGIN_FRAME_HERO_MANA_BAR: originframetype
    ORIGIN_FRAME_HERO_BUTTON_INDICATOR: originframetype
    ORIGIN_FRAME_ITEM_BUTTON: originframetype
    ORIGIN_FRAME_MINIMAP: originframetype
    ORIGIN_FRAME_MINIMAP_BUTTON: originframetype
    ORIGIN_FRAME_SYSTEM_BUTTON: originframetype
    ORIGIN_FRAME_TOOLTIP: originframetype
    ORIGIN_FRAME_UBERTOOLTIP: originframetype
    ORIGIN_FRAME_CHAT_MSG: originframetype
    ORIGIN_FRAME_UNIT_MSG: originframetype
    ORIGIN_FRAME_TOP_MSG: originframetype
    ORIGIN_FRAME_PORTRAIT: originframetype
    ORIGIN_FRAME_WORLD_FRAME: originframetype
}

declare enum FramePointType {
    FRAMEPOINT_TOPLEFT: framepointtype
    FRAMEPOINT_TOP: framepointtype
    FRAMEPOINT_TOPRIGHT: framepointtype
    FRAMEPOINT_LEFT: framepointtype
    FRAMEPOINT_CENTER: framepointtype
    FRAMEPOINT_RIGHT: framepointtype
    FRAMEPOINT_BOTTOMLEFT: framepointtype
    FRAMEPOINT_BOTTOM: framepointtype
    FRAMEPOINT_BOTTOMRIGHT: framepointtype
}

declare enum TextAlignType {
    TEXT_JUSTIFY_TOP: textaligntype
    TEXT_JUSTIFY_MIDDLE: textaligntype
    TEXT_JUSTIFY_BOTTOM: textaligntype
    TEXT_JUSTIFY_LEFT: textaligntype
    TEXT_JUSTIFY_CENTER: textaligntype
    TEXT_JUSTIFY_RIGHT: textaligntype
}

declare function BlzHideOriginFrames(enable: boolean): void
declare function BlzGetOriginFrame(frameType: originframetype, index: number): framehandle

declare class Frame {
    static loadTOCFile(TOCFile: string): boolean
    static create(name: string, owner: framehandle, priority: number, createContext: number): framehandle
    static createSimple(name: string, owner: framehandle, createContext: number): framehandle
    static createByType(typeName: string, name: string, owner: framehandle, inherits: string, createContext: number): framehandle
    destroy(): void

    setPoint(point: framepointtype, relative: framehandle, relativePoint: framepointtype, x: number, y: number): void
    setAbsPoint(point: framepointtype, x: number, y: number): void
    clearAllPoints(frame: framehandle): void
    setAllPoints(relative: framehandle): void
    setVisible(visible: boolean): void
    visible(frame: framehandle): boolean
    static byName(name: string, createContext: number): framehandle
    name(frame: framehandle): string
    click(frame: framehandle): void
    setText(text: string): void
    text(frame: framehandle): string
    setTextSizeLimit(size: number): void
    textSizeLimit(frame: framehandle): number
    setTextColor(color: number): void
    setFocus(flag: boolean): void
    setModel(modelFile: string, cameraIndex: number): void
    enable(enabled: boolean): void
    enabled(frame: framehandle): boolean
    setAlpha(alpha: number): void
    alpha(frame: framehandle): number
    setSpriteAnimate(primaryProp: number, flags: number): void
    setTex(texFile: string, flag: number, blend: boolean): void
    setScale(scale: number): void
    setTooltip(tooltip: framehandle | null): void
    cageMouse(enable: boolean): void
    setValue(value: number): void
    value(frame: framehandle): number
    setMinMaxValue(minValue: number, maxValue: number): void
    setStepSize(stepSize: number): void
    setSize(width: number, height: number): void
    setVertexColor(color: number): void
    setLevel(level: number): void
    setParent(parent: framehandle): void
    parent(frame: framehandle): framehandle
    height(frame: framehandle): number
    width(frame: framehandle): number
    setFont(fileName: string, height: number, flags: number): void
    setTextAlignment(vert: textaligntype, horz: textaligntype): void
    static trigger(): framehandle
    static triggerEvent(): frameeventtype
}

namespace Minimap {
    declare function pingMinimap(x: number, y: number, duration: number): void
    declare function pingMinimapEx(x: number, y: number, duration: number, red: number, green: number, blue: number, extraEffects: boolean): void
    declare function setAltMinimapIcon(iconPath: string): void
    declare function changeMinimapTerrainTex(texFile: string): boolean
}

declare function showInterface(flag: boolean, fadeDuration: number): void
declare function enableOcclusion(flag: boolean): void

declare function setDayNightModels(terrainDNCFile: string, unitDNCFile: string): void
declare function setSkyModel(skyModelFile: string): void
declare function enableUserControl(b: boolean): void
declare function enableUserUI(b: boolean): void

declare function enableWorldFogBoundary(b: boolean): void
declare function forceUIKey(key: string): void
declare function forceUICancel(): void
declare function displayLoadDialog(): void

declare function enableSelections(enableSelection: boolean, enableSelectionCircle: boolean): void
declare function isSelectionEnabled(): boolean
declare function isSelectionCircleEnabled(): boolean
declare function enableTargetIndicator(enable: boolean): void
declare function isTargetIndicatorEnabled(): boolean
declare function enableUIAutoPosition(enable: boolean): void

declare enum OSKeyType {
    OSKEY_BACKSPACE,
    OSKEY_TAB,
    OSKEY_CLEAR,
    OSKEY_RETURN,
    OSKEY_SHIFT,
    OSKEY_CONTROL,
    OSKEY_ALT,
    OSKEY_PAUSE,
    OSKEY_CAPSLOCK,
    OSKEY_KANA,
    OSKEY_HANGUL,
    OSKEY_JUNJA,
    OSKEY_FINAL,
    OSKEY_HANJA,
    OSKEY_KANJI,
    OSKEY_ESCAPE,
    OSKEY_CONVERT,
    OSKEY_NONCONVERT,
    OSKEY_ACCEPT,
    OSKEY_MODECHANGE,
    OSKEY_SPACE,
    OSKEY_PAGEUP,
    OSKEY_PAGEDOWN,
    OSKEY_END,
    OSKEY_HOME,
    OSKEY_LEFT,
    OSKEY_UP,
    OSKEY_RIGHT,
    OSKEY_DOWN,
    OSKEY_SELECT,
    OSKEY_PRINT,
    OSKEY_EXECUTE,
    OSKEY_PRINTSCREEN,
    OSKEY_INSERT,
    OSKEY_DELETE,
    OSKEY_HELP,
    OSKEY_0,
    OSKEY_1,
    OSKEY_2,
    OSKEY_3,
    OSKEY_4,
    OSKEY_5,
    OSKEY_6,
    OSKEY_7,
    OSKEY_8,
    OSKEY_9,
    OSKEY_A,
    OSKEY_B,
    OSKEY_C,
    OSKEY_D,
    OSKEY_E,
    OSKEY_F,
    OSKEY_G,
    OSKEY_H,
    OSKEY_I,
    OSKEY_J,
    OSKEY_K,
    OSKEY_L,
    OSKEY_M,
    OSKEY_N,
    OSKEY_O,
    OSKEY_P,
    OSKEY_Q,
    OSKEY_R,
    OSKEY_S,
    OSKEY_T,
    OSKEY_U,
    OSKEY_V,
    OSKEY_W,
    OSKEY_X,
    OSKEY_Y,
    OSKEY_Z,
    OSKEY_LMETA,
    OSKEY_RMETA,
    OSKEY_APPS,
    OSKEY_SLEEP,
    OSKEY_NUMPAD0,
    OSKEY_NUMPAD1,
    OSKEY_NUMPAD2,
    OSKEY_NUMPAD3,
    OSKEY_NUMPAD4,
    OSKEY_NUMPAD5,
    OSKEY_NUMPAD6,
    OSKEY_NUMPAD7,
    OSKEY_NUMPAD8,
    OSKEY_NUMPAD9,
    OSKEY_MULTIPLY,
    OSKEY_ADD,
    OSKEY_SEPARATOR,
    OSKEY_SUBTRACT,
    OSKEY_DECIMAL,
    OSKEY_DIVIDE,
    OSKEY_F1,
    OSKEY_F2,
    OSKEY_F3,
    OSKEY_F4,
    OSKEY_F5,
    OSKEY_F6,
    OSKEY_F7,
    OSKEY_F8,
    OSKEY_F9,
    OSKEY_F10,
    OSKEY_F11,
    OSKEY_F12,
    OSKEY_F13,
    OSKEY_F14,
    OSKEY_F15,
    OSKEY_F16,
    OSKEY_F17,
    OSKEY_F18,
    OSKEY_F19,
    OSKEY_F20,
    OSKEY_F21,
    OSKEY_F22,
    OSKEY_F23,
    OSKEY_F24,
    OSKEY_NUMLOCK,
    OSKEY_SCROLLLOCK,
    OSKEY_OEM_NEC_EQUAL,
    OSKEY_OEM_FJ_JISHO,
    OSKEY_OEM_FJ_MASSHOU,
    OSKEY_OEM_FJ_TOUROKU,
    OSKEY_OEM_FJ_LOYA,
    OSKEY_OEM_FJ_ROYA,
    OSKEY_LSHIFT,
    OSKEY_RSHIFT,
    OSKEY_LCONTROL,
    OSKEY_RCONTROL,
    OSKEY_LALT,
    OSKEY_RALT,
    OSKEY_BROWSER_BACK,
    OSKEY_BROWSER_FORWARD,
    OSKEY_BROWSER_REFRESH,
    OSKEY_BROWSER_STOP,
    OSKEY_BROWSER_SEARCH,
    OSKEY_BROWSER_FAVORITES,
    OSKEY_BROWSER_HOME,
    OSKEY_VOLUME_MUTE,
    OSKEY_VOLUME_DOWN,
    OSKEY_VOLUME_UP,
    OSKEY_MEDIA_NEXT_TRACK,
    OSKEY_MEDIA_PREV_TRACK,
    OSKEY_MEDIA_STOP,
    OSKEY_MEDIA_PLAY_PAUSE,
    OSKEY_LAUNCH_MAIL,
    OSKEY_LAUNCH_MEDIA_SELECT,
    OSKEY_LAUNCH_APP1,
    OSKEY_LAUNCH_APP2,
    OSKEY_OEM_1,
    OSKEY_OEM_PLUS,
    OSKEY_OEM_COMMA,
    OSKEY_OEM_MINUS,
    OSKEY_OEM_PERIOD,
    OSKEY_OEM_2,
    OSKEY_OEM_3,
    OSKEY_OEM_4,
    OSKEY_OEM_5,
    OSKEY_OEM_6,
    OSKEY_OEM_7,
    OSKEY_OEM_8,
    OSKEY_OEM_AX,
    OSKEY_OEM_102,
    OSKEY_ICO_HELP,
    OSKEY_ICO_00,
    OSKEY_PROCESSKEY,
    OSKEY_ICO_CLEAR,
    OSKEY_PACKET,
    OSKEY_OEM_RESET,
    OSKEY_OEM_JUMP,
    OSKEY_OEM_PA1,
    OSKEY_OEM_PA2,
    OSKEY_OEM_PA3,
    OSKEY_OEM_WSCTRL,
    OSKEY_OEM_CUSEL,
    OSKEY_OEM_ATTN,
    OSKEY_OEM_FINISH,
    OSKEY_OEM_COPY,
    OSKEY_OEM_AUTO,
    OSKEY_OEM_ENLW,
    OSKEY_OEM_BACKTAB,
    OSKEY_ATTN,
    OSKEY_CRSEL,
    OSKEY_EXSEL,
    OSKEY_EREOF,
    OSKEY_PLAY,
    OSKEY_ZOOM,
    OSKEY_NONAME,
    OSKEY_PA1,
    OSKEY_OEM_CLEAR
}

declare function triggerPlayerKey(): oskeytype
declare function triggerPlayerMetaKey(): number
declare function triggerPlayerIsKeyDown(): boolean

declare function enableCursor(enable: boolean): void

namespace Local {
    declare function localClientWidth(): number
    declare function localClientHeight(): number
    declare function isLocalClientActive(): boolean
    declare function locale(): string
    declare function localizedString(source: string): string
    declare function localizedHotkey(source: string): int
}

declare enum MouseButtonType {
    MOUSE_BUTTON_TYPE_LEFT,
    MOUSE_BUTTON_TYPE_MIDDLE,
    MOUSE_BUTTON_TYPE_RIGHT
}

declare class MouseButtonTypeHelper {
    static triggerPlayerMouseButton(): mousebuttontype
}

declare function setMousePos(x: number, y: number): void
declare function mouseFocusUnit(): unit

class Button {
    static clickedButton(): button
}

class Dialog {
    constructor() {
        DialogCreate();
    }
    destroy(): void

    static clickedDialog(): dialog

    clear(): void
    setMessage(messageText: string): void
    addButton(buttonText: string, hotkey: number): button
    addQuitButton(doScoreScreen: boolean, buttonText: string, hotkey: number): button
    display(whichPlayer: player, flag: boolean): void
}