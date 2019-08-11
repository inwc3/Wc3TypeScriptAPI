export type int = number & { __int__: void };
export type xy = [number, number];
export type xyz = [number, number, number];
export type rgb = [number, number, number];
export type rgba = [number, number, number, number];

function convertColor(rgba: rgba): int {
    return BlzConvertColor(rgba[3], rgba[0], rgba[1], rgba[2]) as int;
}
function fourCC(s: string): int {
    return FourCC(s) as int;
}
function objectName(objectId: int): string {
    return GetObjectName(objectId);
}
function r2SW(r: number, width: int, precision: int): string {
    return R2SW(r, width, precision);
}
function handleId(h: handle): int {
    return GetHandleId(h) as int;
}
function stringHash(s: string): int {
    return StringHash(s) as int;
}

function rgb2rgba(rgb: rgb, a: number) {
    return rgb.concat(a);
}
function rgba2rgb(rgba: rgba) {
    return rgba.splice(3, 1);
}