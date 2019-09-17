import { Ambient } from "./Ambient";
import { LearningResult } from "./LearningResult";

export class LimitationEnviroment {
    private _id: number;
    private _learningResultList: Array<LearningResult>;
    private _ambientList: Array<Ambient>;

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get learningResultList(): Array<LearningResult> {
        return this._learningResultList;
    }

    set learningResultList(value: Array<LearningResult>) {
        this._learningResultList = value;
    }

    get ambientList(): Array<Ambient> {
        return this._ambientList;
    }

    set ambientList(value: Array<Ambient>) {
        this._ambientList = value;
    }
}