import { int, xy, xyz, rgb, rgba } from "./util";

class Multiboard {
    constructor() {
        this._board = CreateMultiboard();
    }
    destroy(): void {
        DestroyMultiboard(this._board);
    }

    _board: multiboard;

    displayed(): boolean {
        return IsMultiboardDisplayed(this._board);
    }
    display(show: boolean): void {
        MultiboardDisplay(this._board, show);
    }
    minimized(): boolean {
        return IsMultiboardMinimized(this._board);
    }
    minimize(minimize: boolean): void {
        MultiboardMinimize(this._board, minimize);
    }
    clear(): void {
        MultiboardClear(this._board);
    }
    titleText(): string {
        return MultiboardGetTitleText(this._board);
    }
    setTitleText(label: string): void {
        MultiboardSetTitleText(this._board, label);
    }
    setTitleTextColor(rgba: rgba): void {
        MultiboardSetTitleTextColor(this._board, rgba[0], rgba[1], rgba[2], rgba[3]);
    }
    rowCount(): number {
        return MultiboardGetRowCount(this._board);
    }
    setRowCount(count: number): void {
        MultiboardSetRowCount(this._board, count);
    }
    columnCount(): number {
        return MultiboardGetColumnCount(this._board);
    }
    setColumnCount(count: number): void {
        MultiboardSetColumnCount(this._board, count);
    }

    setItemsStyle(showValues: boolean, showIcons: boolean): void {
        MultiboardSetItemsStyle(this._board, showValues, showIcons);
    }
    setItemsValue(value: string): void {
        MultiboardSetItemsValue(this._board, value);
    }
    setItemsValueColor(rgba: rgba): void {
        MultiboardSetItemsValueColor(this._board, rgba[0], rgba[1], rgba[2], rgba[3]);
    }
    setItemsWidth(width: number): void {
        MultiboardSetItemsWidth(this._board, width);
    }
    setItemsIcon(iconPath: string): void {
        MultiboardSetItemsIcon(this._board, iconPath);
    }

    createItem(row: number, column: number): MultiboardItem {
        return MultiboardItem.byItem(MultiboardGetItem(this._board, row, column));
    }

    static suppressDisplay(flag: boolean): void {
        MultiboardSuppressDisplay(flag);
    }
}

class MultiboardItem {
    static _byItem: Map<multiboarditem, MultiboardItem> = new Map<multiboarditem, MultiboardItem>();

    static byItem(item: multiboarditem) {
        return this._byItem.has(item) ? this._byItem.get(item) as MultiboardItem : new MultiboardItem(item);
    }
    constructor(item: multiboarditem) {
        this._item = item;
    }
    destroy(): void {
        MultiboardReleaseItem(this._item);
    }

    _item: multiboarditem;

    setItemStyle(showValue: boolean, showIcon: boolean): void {
        MultiboardSetItemStyle(this._item, showValue, showIcon);
    }
    setItemValue(val: string): void {
        MultiboardSetItemValue(this._item, val);
    }
    setItemValueColor(rgba: rgba): void {
        MultiboardSetItemValueColor(this._item, rgba[0], rgba[1], rgba[2], rgba[3]);
    }
    setItemWidth(width: number): void {
        MultiboardSetItemWidth(this._item, width);
    }
    setItemIcon(iconFileName: string): void {
        MultiboardSetItemIcon(this._item, iconFileName);
    }
}