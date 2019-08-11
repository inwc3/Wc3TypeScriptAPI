import { int, xy, xyz, rgb, rgba } from "./util";

enum ImageType {
    SELECTION,
    INDICATOR,
    OCCLUSION_MASK,
    UBERSPLAT
}

class Image {
    static create(file: string, sizeXYZ: xyz, posXYZ: xyz, originXYZ: xyz, imageType: ImageType): Image {
        return new Image(CreateImage(file, sizeXYZ[0], sizeXYZ[1], sizeXYZ[2], posXYZ[0], posXYZ[1], posXYZ[2], originXYZ[0], originXYZ[1], originXYZ[2], imageType));
    }
    constructor(img: image) {
        this.img = img;
    }
    destroy(): void {
        DestroyImage(this.img);
    }

    img: image;

    setConstHeight(flag: boolean, height: number): void {
        SetImageConstantHeight(this.img, flag, height);
    }
    setXY(xy: xy): void {
        SetImagePosition(this.img, xy[0], xy[1], 0);
    }
    setXYZ(xyz: xyz): void {
        SetImagePosition(this.img, xyz[0], xyz[1], xyz[2]);
    }
    setColor(rgba: rgba): void {
        SetImageColor(this.img, rgba[0], rgba[1], rgba[2], rgba[3]);
    }
    show(flag: boolean): void {
        SetImageRenderAlways(this.img, flag);
    }
    setAboveWater(flag: boolean, useWaterAlpha: boolean): void {
        SetImageAboveWater(this.img, flag, useWaterAlpha);
    }
    setType(imageType: ImageType): void {
        SetImageType(this.img, imageType);
    }
}