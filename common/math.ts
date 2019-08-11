import { int, xy, xyz, rgb, rgba } from "./util";

declare enum LimitOp {
    LESS_THAN,
    LESS_THAN_OR_EQUAL,
    EQUAL,
    GREATER_THAN_OR_EQUAL,
    GREATER_THAN,
    NOT_EQUAL
}

function bitOr(xy: xy): number {
    return BlzBitOr(xy[0], xy[1]);
}
function bitAnd(xy: xy): number {
    return BlzBitAnd(xy[0], xy[1]);
}
function bitXor(xy: xy): number {
    return BlzBitXor(xy[0], xy[1]);
}

function randomInt(lowBound: int, highBound: int): int {
    return (Math.floor(Math.random() * (highBound - lowBound + 1)) + lowBound) as int;
}
function randomReal(lowBound: number, highBound: number): number {
    return lowBound + Math.random() % (highBound - lowBound + 1);
}

export type angle = number;
export type circle = [xy, number];