declare enum CameraField {
    CAMERA_FIELD_TARGET_DISTANCE,
    CAMERA_FIELD_FARZ,
    CAMERA_FIELD_ANGLE_OF_ATTACK,
    CAMERA_FIELD_FIELD_OF_VIEW,
    CAMERA_FIELD_ROLL,
    CAMERA_FIELD_ROTATION,
    CAMERA_FIELD_ZOFFSET,
    CAMERA_FIELD_NEARZ,
    CAMERA_FIELD_LOCAL_PITCH,
    CAMERA_FIELD_LOCAL_YAW,
    CAMERA_FIELD_LOCAL_ROLL
}

class Camera {
    static setPosition(x: number, y: number): void
    static setQuickPos(x: number, y: number): void
    static setBounds(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): void
    static stop(): void
    static resetToGame(duration: number): void
    static panTo(x: number, y: number): void
    static panToTimed(x: number, y: number, duration: number): void
    static panToWithZ(x: number, y: number, zOffsetDest: number): void
    static panToTimedWithZ(x: number, y: number, zOffsetDest: number, duration: number): void
    static setCinematic(cameraModelFile: string): void
    static setRotateMode(x: number, y: number, radiansToSweep: number, duration: number): void
    static setField(whichField: camerafield, value: number, duration: number): void
    static addField(whichField: camerafield, offset: number, duration: number): void
    static setTargetController(whichUnit: unit, xoffset: number, yoffset: number, inheritOrientation: boolean): void
    static setOrientController(whichUnit: unit, xoffset: number, yoffset: number): void
    static setTargetNoise(mag: number, velocity: number, vertOnly?: boolean): void
    static setSourceNoise(mag: number, velocity: number, vertOnly?: boolean): void
    static setSmoothingFactor(factor: number): void

    static minX(): number
    static minY(): number
    static minXY(): [number, number]
    static maxX(): number
    static maxY(): number
    static maxXY(): [number, number]

    static field(whichField: camerafield): number
    static targetPosX(): number
    static targetPosY(): number
    static targetPosZ(): number
    static targetPosXYZ(): [number, number, number]
    static eyePosX(): number
    static eyePosY(): number
    static eyePosXY(): [number, number]
    static eyePosZ(): number
    static eyePosXYZ(): [number, number, number]

    static create(): camerasetup

    setField(whichField: camerafield, value: number, duration: number): void
    field(whichField: camerafield): number
    setDest(x: number, y: number, duration: number): void
    setDestXY(xy: [number, number], duration: number): void
    destPositionX(): number
    destPositionY(): number
    destPositionXY(): [number, number]

    static apply(whichSetup: camerasetup, doPan: boolean, panTimed: boolean): void
    static applyWithZ(whichSetup: camerasetup, zDestOffset: number): void
    static applyForceDuration(whichSetup: camerasetup, doPan: boolean, forceDuration: number): void
    static applyForceDurationWithZ(whichSetup: camerasetup, zDestOffset: number, forceDuration: number): void
    static applyForceDurationSmooth(whichSetup: camerasetup, doPan: boolean, forcedDuration: number, easeInDuration: number, easeOutDuration: number, smoothFactor: number): void
}

declare enum CameraMargin {
    LEFT,
    RIGHT,
    TOP,
    BOTTOM
}

declare function cameraMargin(whichMargin: CameraMargin): number