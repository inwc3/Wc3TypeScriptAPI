class CineFilter {
    constructor() {

    }

    setTex(filename: string): void
    setBlendMode(whichMode: blendmode): void
    setTexMapFlags(whichFlags: texmapflags): void
    setStartUV(minu: number, minv: number, maxu: number, maxv: number): void
    setEndUV(minu: number, minv: number, maxu: number, maxv: number): void
    setStartColor(red: number, green: number, blue: number, alpha: number): void
    setEndColor(red: number, green: number, blue: number, alpha: number): void
    setDuration(duration: number): void

    display(flag: boolean): void
    displayed(): boolean
}

declare function setCinematicScene(portraitUnitId: number, color: playercolor, speakerTitle: string, text: string, sceneDuration: number, voiceoverDuration: number): void
declare function endCinematicScene(): void
declare function forceCinematicSubtitles(flag: boolean): void

declare function playModelCinematic(modelName: string): void
declare function playCinematic(movieName: string): void