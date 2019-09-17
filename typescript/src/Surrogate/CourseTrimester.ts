import { Course } from "./Course";
import { ResultSeen } from "./ResultSeen";
import { Schedule } from "./Schedule";
import { Trimester } from "./Trimester";

export class CourseTrimester {
    private _id: number;
    private _idCourse: Course;
    private _idTrimester: Trimester;
    private _resultSeenList: Array<ResultSeen>;
    private _scheduleList:Array<Schedule>;

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get idCourse(): Course {
        return this._idCourse;
    }

    set idCourse(value: Course) {
        this._idCourse = value;
    }

    get idTrimester(): Trimester {
        return this._idTrimester;
    }

    set idTrimester(value: Trimester) {
        this._idTrimester = value;
    }

    get resultSeenList(): Array<ResultSeen> {
        return this._resultSeenList;
    }

    set resultSeenList(value: Array<ResultSeen>) {
        this._resultSeenList = value;
    }

    get scheduleList(): Array<Schedule> {
        return this._scheduleList;
    }

    set scheduleList(value: Array<Schedule>) {
        this._scheduleList = value;
    }
}