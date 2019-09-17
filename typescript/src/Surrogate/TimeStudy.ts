import { Day } from "./Day";
import { WorkingDayInstructor } from "./WorkingDayInstructor";

export class TimeStudy {
    private _id: number;
    private _startTime: any;
    private _endTime: any;
    private _idDay: Day;
    private _idWorkingDayInstructor: WorkingDayInstructor;

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get startTime(): any {
        return this._startTime;
    }

    set startTime(value: any) {
        this._startTime = value;
    }

    get endTime(): any {
        return this._endTime;
    }

    set endTime(value: any) {
        this._endTime = value;
    }

    get idDay(): Day {
        return this._idDay;
    }

    set idDay(value: Day) {
        this._idDay = value;
    }

    get idWorkingDayInstructor(): WorkingDayInstructor {
        return this._idWorkingDayInstructor;
    }

    set idWorkingDayInstructor(value: WorkingDayInstructor) {
        this._idWorkingDayInstructor = value;
    }
}