import { int, xy, xyz, rgb, rgba } from "./util";

class Ubersplat {
    constructor(xy: xy, name: string, rgba: rgba, forcePaused: boolean, noBirthTime: boolean) {
        this.splat = CreateUbersplat(xy[0], xy[1], name, rgba[0], rgba[1], rgba[2], rgba[3], forcePaused, noBirthTime);
    }
    destroy(): void {
        FinishUbersplat(this.splat);
    }

    splat: ubersplat;

    reset(): void {
        ResetUbersplat(this.splat);
    }
    finish(): void {
        FinishUbersplat(this.splat);
    }
    show(flag: boolean): void {
        ShowUbersplat(this.splat, flag);
    }
    setRender(flag: boolean): void {
        SetUbersplatRender(this.splat, flag);
    }
    setRenderAlways(flag: boolean): void {
        SetUbersplatRenderAlways(this.splat, flag);
    }
}