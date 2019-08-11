import { } from "../std/common";

class Leaderboard {
    constructor() {
        this.board = CreateLeaderboard();
    }
    destroy(): void {
        DestroyLeaderboard(this.board);
    }

    static playerSetLeaderboard(toPlayer: player, lb: Leaderboard): void
    static playerGetLeaderboard(toPlayer: player): Leaderboard

    board: leaderboard

    display(show: boolean): void {
        LeaderboardDisplay(this.board, true)
    }
    displayed(): boolean {
        return IsLeaderboardDisplayed(this.board);
    }
    itemCount(): number {
        return LeaderboardGetItemCount(this.board);
    }
    setSizeByItemCount(count: number): void {
        return LeaderboardSetSizeByItemCount(this.board, count);
    }
    addItem(label: string, value: number, p: player): void {
        LeaderboardAddItem(this.board, label, value, p);
    }
    removeItem(index: number): void {
        LeaderboardRemoveItem(this.board, index);
    }
    removePlayerItem(p: player): void {
        LeaderboardRemovePlayerItem(this.board, p);
    }
    clear(): void {
        LeaderboardClear(this.board);
    }
    sortItemsByValue(ascending: boolean): void
    sortItemsByPlayer(ascending: boolean): void
    sortItemsByLabel(ascending: boolean): void
    containsPlayerItem(p: player): boolean
    playerIndex(p: player): number
    setLabel(label: string): void
    labelText(): string
    setLabelColor(red: number, green: number, blue: number, alpha: number): void
    setValueColor(red: number, green: number, blue: number, alpha: number): void
    setStyle(showLabel: boolean, showNames: boolean, showValues: boolean, showIcons: boolean): void
    setItemValue(whichItem: number, val: number): void
    setItemLabel(whichItem: number, val: string): void
    setItemStyle(whichItem: number, showLabel: boolean, showValue: boolean, showIcon: boolean): void
    setItemLabelColor(whichItem: number, red: number, green: number, blue: number, alpha: number): void
    setItemValueColor(whichItem: number, red: number, green: number, blue: number, alpha: number): void
}

declare class Multiboard {
    static create(): Multiboard
    destroy(): void

    display(show: boolean): void
    displayed(): boolean
    minimize(minimize: boolean): void
    minimized(): boolean
    clear(): void
    setTitleText(label: string): void
    titleText(): string
    setTitleTextColor(red: number, green: number, blue: number, alpha: number): void
    rowCount(): number
    columnCount(): number
    setColumnCount(count: number): void
    setRowCount(count: number): void
    setItemsStyle(showValues: boolean, showIcons: boolean): void
    setItemsValue(value: string): void
    setItemsValueColor(red: number, green: number, blue: number, alpha: number): void
    setItemsWidth(width: number): void
    setItemsIcon(iconPath: string): void

    createItem(row: number, column: number): MultiboardItem
    suppressDisplay(flag: boolean): void
}

declare class MultiboardItem {
    destroy(): void

    setItemStyle(showValue: boolean, showIcon: boolean): void
    setItemValue(val: string): void
    setItemValueColor(red: number, green: number, blue: number, alpha: number): void
    setItemWidth(width: number): void
    setItemIcon(iconFileName: string): void
}