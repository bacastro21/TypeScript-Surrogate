import { Competition } from "./Competition";
import { LimitationEnviroment } from "./LimitationEnviroment";
import { ResultSeen } from "./ResultSeen";
import { TrimesterPlaning } from "./TrimesterPlaning";

export class LearningResult {
    private _id: number;
    private _resultCode: string;
    private _denomination: string;
    private _limitationEnviromentList: LimitationEnviroment[];
    private _idCompetition: Competition;
    private _trimesterPlaningList: TrimesterPlaning[];
    private _resultSeenList: ResultSeen[];

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get resultCode(): string {
        return this._resultCode;
    }

    set resultCode(value: string) {
        this._resultCode = value;
    }

    get denomination(): string {
        return this._denomination;
    }

    set denomination(value: string) {
        this._denomination = value;
    }

    get limitationEnviromentList(): LimitationEnviroment[] {
        return this._limitationEnviromentList;
    }

    set limitationEnviromentList(value: LimitationEnviroment[]) {
        this._limitationEnviromentList = value;
    }

    get idCompetition(): Competition {
        return this._idCompetition;
    }

    set idCompetition(value: Competition) {
        this._idCompetition = value;
    }

    get trimesterPlaningList(): TrimesterPlaning[] {
        return this._trimesterPlaningList;
    }

    set trimesterPlaningList(value: TrimesterPlaning[]) {
        this._trimesterPlaningList = value;
    }

    get resultSeenList(): ResultSeen[] {
        return this._resultSeenList;
    }

    set resultSeenList(value: ResultSeen[]) {
        this._resultSeenList = value;
    }
}