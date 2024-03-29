import { LearningResult } from "./LearningResult";
import { Program } from "./Program";
import {Schedule} from "./Schedule";

export class Competition {
    private _id: number;
    private _competitionCode: string;
    private _denomination: string;
    private _idProgram: Program;
    private _learningResultList: LearningResult[];


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get competitionCode(): string {
        return this._competitionCode;
    }

    set competitionCode(value: string) {
        this._competitionCode = value;
    }

    get denomination(): string {
        return this._denomination;
    }

    set denomination(value: string) {
        this._denomination = value;
    }

    get idProgram(): Program {
        return this._idProgram;
    }

    set idProgram(value: Program) {
        this._idProgram = value;
    }

    get learningResultList(): LearningResult[] {
        return this._learningResultList;
    }

    set learningResultList(value: LearningResult[]) {
        this._learningResultList = value;
    }
}