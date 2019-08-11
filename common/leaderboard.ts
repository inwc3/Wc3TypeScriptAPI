import { int, xy, xyz, rgb, rgba } from "./util";

class Leaderboard {
    static _byBoard: Map<leaderboard, Leaderboard> = new Map<leaderboard, Leaderboard>();
    constructor(board?: leaderboard) {
        this.board = board == undefined ? CreateLeaderboard() : board;
    }
    static byBoard(board: leaderboard) {
        return this._byBoard.has(board) ? this._byBoard.get(board) as Leaderboard : new Leaderboard(board);
    }
    destroy(): void {
        DestroyLeaderboard(this.board);
    }

    static playerLeaderboard(toPlayer: player): Leaderboard {
        return this.byBoard(PlayerGetLeaderboard(toPlayer));
    }
    static playerSetLeaderboard(toPlayer: player, lb: Leaderboard): void {
        PlayerSetLeaderboard(toPlayer, lb.board);
    }

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
    sortItemsByValue(ascending: boolean): void {
        LeaderboardSortItemsByValue(this.board, ascending);
    }
    sortItemsByPlayer(ascending: boolean): void {
        LeaderboardSortItemsByPlayer(this.board, ascending);
    }
    sortItemsByLabel(ascending: boolean): void {
        LeaderboardSortItemsByLabel(this.board, ascending);
    }
    containsPlayerItem(p: player): boolean {
        return LeaderboardHasPlayerItem(this.board, p);
    }
    playerIndex(p: player): int {
        return LeaderboardGetPlayerIndex(this.board, p) as int;
    }
    label(): string {
        return LeaderboardGetLabelText(this.board);
    }
    setLabel(label: string): void {
        LeaderboardSetLabel(this.board, label);
    }
    setLabelColor(rgba: rgba): void {
        LeaderboardSetLabelColor(this.board, rgba[0], rgba[1], rgba[2], rgba[3]);
    }
    setValueColor(rgba: rgba): void {
        LeaderboardSetValueColor(this.board, rgba[0], rgba[1], rgba[2], rgba[3]);
    }
    setStyle(showLabel: boolean, showNames: boolean, showValues: boolean, showIcons: boolean): void {
        LeaderboardSetStyle(this.board, showLabel, showNames, showValues, showIcons);
    }

    setItemValue(whichItem: number, val: number): void {
        LeaderboardSetItemValue(this.board, whichItem, val);
    }
    setItemLabel(whichItem: number, val: string): void {
        LeaderboardSetItemLabel(this.board, whichItem, val);
    }
    setItemStyle(whichItem: number, showLabel: boolean, showValue: boolean, showIcon: boolean): void {
        LeaderboardSetItemStyle(this.board, whichItem, showLabel, showValue, showIcon);
    }
    setItemLabelColor(whichItem: number, rgba: rgba): void {
        LeaderboardSetItemLabelColor(this.board, whichItem, rgba[0], rgba[1], rgba[2], rgba[3]);
    }
    setItemValueColor(whichItem: number, rgba: rgba): void {
        LeaderboardSetItemValueColor(this.board, whichItem, rgba[0], rgba[1], rgba[2], rgba[3]);
    }
}