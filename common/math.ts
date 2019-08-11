declare enum LimitOp {
    LESS_THAN,
    LESS_THAN_OR_EQUAL,
    EQUAL,
    GREATER_THAN_OR_EQUAL,
    GREATER_THAN,
    NOT_EQUAL
}

declare function bitOr(x: number, y: number): number {
    return BlzBitOr(x, y);
}
declare function bitAnd(x: number, y: number): number {
    return BlzBitAnd(x, y);
}
declare function bitXor(x: number, y: number): number {
    return BlzBitXor(x, y);
}

//declare class math

function randomInt(lowBound: int, highBound: int): int {
    return math.random(lowBound, highBound);
}
declare function randomReal(lowBound: number, highBound: number): number {
    return lowBound + math.random() % (highBound - lowBound);
}