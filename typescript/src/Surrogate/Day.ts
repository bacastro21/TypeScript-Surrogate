import { Schedule } from "./Schedule";
import { TimeStudy } from "./TimeStudy";

export class Day {
    private _id: number;
    private _nameDay: string;
    private _state: string;
    private _scheduleList: Schedule[];
    private _timeStudyList: TimeStudy[];

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

    get scheduleList(): Schedule[] {
        return this._scheduleList;
    }

    set scheduleList(value: Schedule[]) {
        this._scheduleList = value;
    }

    get timeStudyList(): TimeStudy[] {
        return this._timeStudyList;
    }

    set timeStudyList(value: TimeStudy[]) {
        this._timeStudyList = value;
    }
}