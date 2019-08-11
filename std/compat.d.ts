/** @noSelfInFile **/

declare abstract class ceres {
    static addHook(this:void, s: string, f: Function): void;
}

declare abstract class debug {
    static getinfo(this:void, i: number): {currentline: string};
}

declare function FourCC(i: string): number;
declare var print: (msg:string) => void;
//declare var print: Function