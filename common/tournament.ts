import { int, xy, xyz, rgb, rgba } from "./util";

function tournamentFinishSoonTimeRemaining(): number {
    return GetTournamentFinishSoonTimeRemaining();
}
function tournamentFinishNowRule(): int {
    return GetTournamentFinishNowRule() as int;
}

function registerTournamentFinishNow(trig: trigger) {
    TriggerRegisterGameEvent(trig, EVENT_GAME_TOURNAMENT_FINISH_NOW);
}
function registerTournamentFinishSoon(trig: trigger) {
    TriggerRegisterGameEvent(trig, EVENT_GAME_TOURNAMENT_FINISH_SOON);
}