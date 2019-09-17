import {Schedule} from "./Schedule";
import {TimeStudy} from "./TimeStudy";

export class Day {
    private _id: number;
    private _nameDay: string;
    private _state: string;
    private _scheduleList: Array<Schedule>;
    private _timeStudyList: Array<TimeStudy>;

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get nameDay(): string {
        return this._nameDay;
    }

    set nameDay(value: string) {
        this._nameDay = value;
    }

    get state(): string {
        return this._state;
    }

    set state(value: string) {
        this._state = value;
    }

    get scheduleList(): Array<Schedule> {
        return this._scheduleList;
    }

    set scheduleList(value: Array<Schedule>) {
        this._scheduleList = value;
    }

    get timeStudyList(): Array<TimeStudy> {
        return this._timeStudyList;
    }

    set timeStudyList(value: Array<TimeStudy>) {
        this._timeStudyList = value;
    }
}