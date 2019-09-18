import { CourseTrimester } from "./CourseTrimester";
import { LearningResult } from "./LearningResult";

export class ResultSeen {
    private _id: number;
    private _idCourseTrimester: CourseTrimester;
    private _idLearningResult: LearningResult;

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get idCourseTrimester(): CourseTrimester {
        return this._idCourseTrimester;
    }

    set idCourseTrimester(value: CourseTrimester) {
        this._idCourseTrimester = value;
    }

    get idLearningResult(): LearningResult {
        return this._idLearningResult;
    }

    set idLearningResult(value: LearningResult) {
        this._idLearningResult = value;
    }
}