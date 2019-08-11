import { int, xy, xyz, rgb, rgba } from "./util";

declare enum MouseButtonType {
    MOUSE_BUTTON_TYPE_LEFT,
    MOUSE_BUTTON_TYPE_MIDDLE,
    MOUSE_BUTTON_TYPE_RIGHT
}

class MouseButtonTypeHelper {
    static triggerPlayerMouseButton(): mousebuttontype {
        return BlzGetTriggerPlayerMouseButton();
    }
}

function setMousePos(xy: xy): void {
    BlzSetMousePos(xy[0], xy[1]);
}
function mouseFocusUnit(): unit {
    return BlzGetMouseFocusUnit();
}