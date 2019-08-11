import { int, xy, xyz, rgb, rgba } from "./util";

function showInterface(flag: boolean, fadeDuration: number): void {
    ShowInterface(flag, fadeDuration);
}
function enableOcclusion(flag: boolean): void {
    EnableOcclusion(flag);
}

function setDayNightModels(terrainDNCFile: string, unitDNCFile: string): void {
    SetDayNightModels(terrainDNCFile, unitDNCFile);
}
function setSkyModel(skyModelFile: string): void {
    SetSkyModel(skyModelFile);
}
function enableUserControl(b: boolean): void {
    EnableUserControl(b);
}
function enableUserUI(b: boolean): void {
    EnableUserUI(b);
}

function enableWorldFogBoundary(b: boolean): void {
    EnableWorldFogBoundary(b);
}
function displayLoadDialog(): void {
    DisplayLoadDialog();
}

function isSelectionEnabled(): boolean {
    return BlzIsSelectionEnabled();
}
function isSelectionCircleEnabled(): boolean {
    return BlzIsSelectionCircleEnabled();
}
function enableSelections(enableSelection: boolean, enableSelectionCircle: boolean): void {
    BlzEnableSelections(enableSelection, enableSelectionCircle);
}
function isTargetIndicatorEnabled(): boolean {
    return BlzIsTargetIndicatorEnabled();
}
function enableTargetIndicator(enable: boolean): void {
    BlzEnableTargetIndicator(enable);
}
function enableUIAutoPosition(enable: boolean): void {
    BlzEnableUIAutoPosition(enable);
}

function enableCursor(enable: boolean): void {
    BlzEnableCursor(enable);
}

namespace Local {
    function localClientWidth(): number {
        return BlzGetLocalClientWidth();
    }
    function localClientHeight(): number {
        return BlzGetLocalClientHeight();
    }
    function isLocalClientActive(): boolean {
        return BlzIsLocalClientActive();
    }
    function locale(): string {
        return BlzGetLocale();
    }
    function localizedString(source: string): string {
        return GetLocalizedString(source);
    }
}