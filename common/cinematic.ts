import { int, xy, xyz, rgb, rgba } from "./util";

declare enum TexMapFlags {
    TEXMAP_FLAG_NONE,
    TEXMAP_FLAG_WRAP_U,
    TEXMAP_FLAG_WRAP_V,
    TEXMAP_FLAG_WRAP_UV
}

class CineFilter {
    constructor() {
        this._tex = null;
        this._blendMode = BLEND_MODE_NONE;
        this._texMapFlags = TEXMAP_FLAG_NONE;
        this._startMinUV = [1, 1];
        this._startMaxUV = [1, 1];
        this._endMinUV = [1, 1];
        this._endMaxUV = [1, 1];
        this._startColor = [255, 255, 255, 255];
        this._endColor = [255, 255, 255, 255];
        this._duration = 0;
    }

    _tex: string | null;
    _blendMode: blendmode;
    _texMapFlags: texmapflags;
    _startMinUV: xy;
    _startMaxUV: xy;
    _endMinUV: xy;
    _endMaxUV: xy;
    _startColor: rgba;
    _endColor: rgba;
    _duration: number;

    static _filterDisplayed: CineFilter | null;

    setTex(filename: string): void {
        this._tex = filename;

        if (this.isDisplayed()) {
            SetCineFilterTexture(this._tex);
        }
    }
    setBlendMode(whichMode: blendmode): void {
        this._blendMode = whichMode;

        if (this.isDisplayed()) {
            SetCineFilterBlendMode(this._blendMode);
        }
    }
    setTexMapFlags(whichFlags: texmapflags): void {
        this._texMapFlags = whichFlags;

        if (this.isDisplayed()) {
            SetCineFilterTexMapFlags(this._texMapFlags);
        }
    }
    setStartUV(minuv: xy, maxuv: xy): void {
        this._startMinUV = minuv;
        this._startMaxUV = maxuv;

        if (this.isDisplayed()) {
            SetCineFilterStartUV(this._startMinUV[0], this._startMinUV[1], this._startMaxUV[0], this._startMaxUV[1]);
        }
    }
    setEndUV(minuv: xy, maxuv: xy): void {
        this._endMinUV = minuv;
        this._endMaxUV = maxuv;

        if (this.isDisplayed()) {
            SetCineFilterEndUV(this._endMinUV[0], this._endMinUV[1], this._endMaxUV[0], this._endMaxUV[1]);
        }
    }
    setStartColor(rgba: rgba): void {
        this._startColor = rgba;

        if (this.isDisplayed()) {
            SetCineFilterStartColor(this._startColor[0], this._startColor[1], this._startColor[2], this._startColor[3]);
        }
    }
    setEndColor(rgba: rgba): void {
        this._endColor = rgba;

        if (this.isDisplayed()) {
            SetCineFilterEndColor(this._endColor[0], this._endColor[1], this._endColor[2], this._endColor[3]);
        }
    }
    setDuration(duration: number): void {
        this._duration = duration;

        if (this.isDisplayed()) {
            SetCineFilterDuration(this._duration);
        }
    }

    isDisplayed(): boolean {
        return CineFilter.isAnyDisplayed() && CineFilter._filterDisplayed == this;
    }
    display(flag: boolean): void {
        if (flag) {
            CineFilter._filterDisplayed = this;

            SetCineFilterTexture(this._tex == null ? "" : this._tex);
            SetCineFilterBlendMode(this._blendMode);
            SetCineFilterTexMapFlags(this._texMapFlags);
            SetCineFilterStartUV(this._startMinUV[0], this._startMinUV[1], this._startMaxUV[0], this._startMaxUV[1]);
            SetCineFilterEndUV(this._endMinUV[0], this._endMinUV[1], this._endMaxUV[0], this._endMaxUV[1]);
            SetCineFilterStartColor(this._startColor[0], this._startColor[1], this._startColor[2], this._startColor[3]);
            SetCineFilterEndColor(this._endColor[0], this._endColor[1], this._endColor[2], this._endColor[3]);
            SetCineFilterDuration(this._duration);
        } else {
            CineFilter._filterDisplayed = null;
        }

        DisplayCineFilter(flag);
    }

    static isAnyDisplayed(): boolean {
        return IsCineFilterDisplayed();
    };
}

function setCinematicScene(portraitUnitId: number, color: playercolor, speakerTitle: string, text: string, sceneDuration: number, voiceoverDuration: number): void {
    SetCinematicScene(portraitUnitId, color, speakerTitle, text, sceneDuration, voiceoverDuration);
}
function endCinematicScene(): void {
    EndCinematicScene();
}
function forceCinematicSubtitles(flag: boolean): void {
    ForceCinematicSubtitles(flag);
}

function PlayModelCinematic(modelName: string): void {
    PlayModelCinematic(modelName);
}
function PlayCinematic(movieName: string): void {
    PlayCinematic(movieName);
}