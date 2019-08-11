import { int } from "./util";

class TechId {
    static byId(id: int): TechId {
        return new TechId(id);
    }
    constructor(id: int) {
        this._id = id;
    }

    id(): int {
        return this._id;
    }

    _id: int;

    static researched(): TechId {
        return TechId.byId(GetResearched() as int);
    }
}