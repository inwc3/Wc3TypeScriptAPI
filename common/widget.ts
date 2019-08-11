import { int, xy, xyz, rgb, rgba } from "./util";

export abstract class Widget {
    static _byWidget: Map<widget, Widget> = new Map<widget, Widget>();
    protected constructor(widget: widget) {
        this.widget = widget;
    }
    static byWidget(widget: widget): Widget {
        return this._byWidget.get(widget) as Widget;
    }

    static orderTarget(): Widget {
        return this.byWidget(GetOrderTarget());
    }
    static triggerWidget(): Widget {
        return this.byWidget(GetTriggerWidget());
    }

    widget: widget;

    abstract life(): number
    abstract setLife(newLife: number): void
    x(): number {
        return GetWidgetX(this.widget);
    }
    y(): number {
        return GetWidgetY(this.widget);
    }
    xy(): xy {
        return [this.x(), this.y()];
    }
    addIndicator(rgba: rgba): void {
        AddIndicator(this.widget, rgba[0], rgba[1], rgba[2], rgba[3]);
    }
}

declare enum WidgetEvent {
    EVENT_WIDGET_DEATH
}