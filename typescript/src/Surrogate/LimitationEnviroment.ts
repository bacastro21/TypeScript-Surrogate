import { Ambient } from "./Ambient";
import { LearningResult } from "./LearningResult";
import {TimeStudy} from "./TimeStudy";

export class LimitationEnviroment {
    private _id: number;
    private _learningResultList: LearningResult[];
    private _ambientList: Ambient[];

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get learningResultList(): LearningResult[] {
        return this._learningResultList;
    }

    set learningResultList(value: LearningResult[]) {
        this._learningResultList = value;
    }

    get ambientList(): Ambient[] {
        return this._ambientList;
    }

    set ambientList(value: Ambient[]) {
        this._ambientList = value;
    }
}