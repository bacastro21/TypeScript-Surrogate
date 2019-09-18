import { LearningResult } from "./LearningResult";
import { Planing } from "./Planing";
import { PlaninigActivity } from "./PlaningActivity";
import { Trimester } from "./Trimester";

export class TrimesterPlaning {
    private _id: number;
    private _idLearningResult: LearningResult;
    private _idTrimester: Trimester;
    private _idPlaning: Planing;
    private _planingActivityList: PlaninigActivity[];


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get idLearningResult(): LearningResult {
        return this._idLearningResult;
    }

    set idLearningResult(value: LearningResult) {
        this._idLearningResult = value;
    }

    get idTrimester(): Trimester {
        return this._idTrimester;
    }

    set idTrimester(value: Trimester) {
        this._idTrimester = value;
    }

    get idPlaning(): Planing {
        return this._idPlaning;
    }

    set idPlaning(value: Planing) {
        this._idPlaning = value;
    }

    get planingActivityList(): PlaninigActivity[] {
        return this._planingActivityList;
    }

    set planingActivityList(value: PlaninigActivity[]) {
        this._planingActivityList = value;
    }
}