import { Competition } from "./Competition";
import { LimitationEnviroment } from "./LimitationEnviroment";
import { ResultSeen } from "./ResultSeen";
import { TrimesterPlaning } from "./TrimesterPlaning";

export class LearningResult {
    private _id: number;
    private _resultCode: string;
    private _denomination: string;
    private _limitationEnviromentList: Array<LimitationEnviroment>;
    private _idCompetition: Competition;
    private _trimesterPlaningList: Array<TrimesterPlaning>;
    private _resultSeenList: Array<ResultSeen>;

}