import { int, xy, xyz, rgb, rgba } from "./util";

function pingMinimap(xy: xy, duration: number): void {
    PingMinimap(xy[0], xy[1], duration);
}
function pingMinimapEx(xy: xy, duration: number, rgb: rgb, extraEffects: boolean): void {
    PingMinimapEx(xy[0], xy[1], duration, rgb[0], rgb[1], rgb[2], extraEffects);
}
function setAltMinimapIcon(iconPath: string): void {
    SetAltMinimapIcon(iconPath);
}
function changeMinimapTerrainTex(texFile: string): boolean {
    return changeMinimapTerrainTex(texFile);
}