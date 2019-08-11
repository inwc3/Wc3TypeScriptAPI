import { int, xy, xyz, rgb, rgba } from "./util";

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
    static setPos(xy: xy): void {
        SetCameraPosition(xy[0], xy[1]);
    }
    static setQuickPos(xy: xy): void {
        SetCameraQuickPosition(xy[0], xy[1]);
    }
    static stop(): void {
        StopCamera();
    }
    static resetToGame(duration?: number): void {
        ResetToGameCamera(duration == undefined ? 0 : duration);
    }
    static pan(xy: xy, duration?: number): void {
        if (duration == undefined) {
            PanCameraTo(xy[0], xy[1]);
        } else {
            PanCameraToTimed(xy[0], xy[1], duration);
        }
    }
    static panWithZ(xy: xy, zOffsetDest: number, duration?: number): void {
        if (duration == undefined) {
            PanCameraToWithZ(xy[0], xy[1], zOffsetDest);
        } else {
            PanCameraToTimedWithZ(xy[0], xy[1], zOffsetDest, duration)
        }
    }
    static setCinematic(cameraModelFile: string): void {
        SetCinematicCamera(cameraModelFile);
    }
    static setRotateMode(xy: xy, radiansToSweep: number, duration: number): void {
        SetCameraRotateMode(xy[0], xy[1], radiansToSweep, duration);
    }
    static setTargetController(whichUnit: unit, inheritOrientation: boolean, xyoffset: xy): void {
        SetCameraTargetController(whichUnit, xyoffset == undefined ? 0 : xyoffset[0], xyoffset == undefined ? 0 : xyoffset[1], inheritOrientation);
    }
    static setOrientController(whichUnit: unit, xyoffset?: xy): void {
        SetCameraOrientController(whichUnit, xyoffset == undefined ? 0 : xyoffset[0], xyoffset == undefined ? 0 : xyoffset[1]);
    }
    static setTargetNoise(mag: number, velocity: number, vertOnly?: boolean): void {
        if (vertOnly == undefined) {
            CameraSetTargetNoise(mag, velocity);
        } else {
            CameraSetTargetNoiseEx(mag, velocity, vertOnly);
        }
    }
    static setSourceNoise(mag: number, velocity: number, vertOnly?: boolean): void {
        if (vertOnly == undefined) {
            CameraSetSourceNoise(mag, velocity);
        } else {
            CameraSetSourceNoiseEx(mag, velocity, vertOnly);
        }
    }
    static setSmoothingFactor(factor: number): void {
        CameraSetSmoothingFactor(factor);
    }

    static minX(): number {
        return GetCameraBoundMinX();
    }
    static minY(): number {
        return GetCameraBoundMinY();
    }
    static minXY(): xy {
        return [this.minX(), this.minY()];
    }
    static maxX(): number {
        return GetCameraBoundMaxX();
    }
    static maxY(): number {
        return GetCameraBoundMaxY();
    }
    static maxXY(): xy {
        return [this.maxX(), this.maxY()];
    }
    static setBounds(xy1: xy, xy2: xy, xy3: xy, xy4: xy): void {
        SetCameraBounds(xy1[0], xy1[1], xy2[0], xy2[1], xy3[0], xy3[1], xy4[0], xy4[1]);
    }

    static field(whichField: camerafield): number {
        return GetCameraField(whichField);
    }
    static setField(whichField: camerafield, value: number, duration?: number): void {
        SetCameraField(whichField, value, duration == undefined ? 0 : duration);
    }
    static addField(whichField: camerafield, offset: number, duration: number): void {
        AdjustCameraField(whichField, offset, duration == undefined ? 0 : duration);
    }

    static targetPosX(): number {
        return GetCameraTargetPositionX();
    }
    static targetPosY(): number {
        return GetCameraTargetPositionY();
    }
    static targetPosXY(): xy {
        return [this.targetPosX(), this.targetPosY()];
    }
    static targetPosZ(): number {
        return GetCameraTargetPositionZ();
    }
    static targetPosXYZ(): xyz {
        return [this.targetPosX(), this.targetPosY(), this.targetPosZ()];
    }

    static eyePosX(): number {
        return GetCameraEyePositionX();
    }
    static eyePosY(): number {
        return GetCameraEyePositionY();
    }
    static eyePosXY(): xy {
        return [this.eyePosX(), this.eyePosY()];
    }
    static eyePosZ(): number {
        return GetCameraEyePositionZ();
    }
    static eyePosXYZ(): xyz {
        return [this.eyePosX(), this.eyePosY(), this.eyePosZ()];
    }

    static create(): Camera {
        return new Camera(CreateCameraSetup());
    }
    constructor(cam: camerasetup) {
        this.cam = cam;
    }

    cam: camerasetup;

    field(whichField: camerafield): number {
        return CameraSetupGetField(this.cam, whichField);
    }
    setField(whichField: camerafield, value: number, duration?: number): void {
        if (duration == undefined) {
            CameraSetupSetField(this.cam, whichField, value, 0);
        } else {
            CameraSetupSetField(this.cam, whichField, value, duration);
        }
    }

    destX(): number {
        return CameraSetupGetDestPositionX(this.cam);
    }
    destY(): number {
        return CameraSetupGetDestPositionY(this.cam);
    }
    destXY(): xy {
        return [this.destX(), this.destY()];
    }
    setDestXY(xy: xy, duration?: number): void {
        CameraSetupSetDestPosition(this.cam, xy[0], xy[1], duration == undefined ? 0 : duration);
    }

    static apply(whichSetup: camerasetup, doPan: boolean, panTimed: boolean): void {
        CameraSetupApply(whichSetup, doPan, panTimed);
    }
    static applyWithZ(whichSetup: camerasetup, zDestOffset: number): void {
        CameraSetupApplyWithZ(whichSetup, zDestOffset);
    }
    static applyForceDuration(whichSetup: camerasetup, doPan: boolean, forceDuration: number): void {
        CameraSetupApplyForceDuration(whichSetup, doPan, forceDuration);
    }
    static applyForceDurationWithZ(whichSetup: camerasetup, zDestOffset: number, forceDuration: number): void {
        CameraSetupApplyForceDurationWithZ(whichSetup, zDestOffset, forceDuration);
    }
    static applyForceDurationSmooth(whichSetup: camerasetup, doPan: boolean, forcedDuration: number, easeInDuration: number, easeOutDuration: number, smoothFactor: number): void {
        BlzCameraSetupApplyForceDurationSmooth(whichSetup, doPan, forcedDuration, easeInDuration, easeOutDuration, smoothFactor);
    }
}

declare enum CameraMargin {
    LEFT,
    RIGHT,
    TOP,
    BOTTOM
}

function cameraMargin(whichMargin: CameraMargin): number {
    return GetCameraMargin(whichMargin);
}