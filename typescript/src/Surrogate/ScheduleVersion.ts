import {CurrentQuarter} from "./CurrentQuarter";
import {Schedule} from "./Schedule";
import {TimeStudy} from "./TimeStudy";

export class ScheduleVersion {
    private _id: number;
    private _numberVersion: string;
    private _state: string;
    private _idCurrentQuarter: CurrentQuarter;
    private _scheduleList: Schedule[];


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get numberVersion(): string {
        return this._numberVersion;
    }

    set numberVersion(value: string) {
        this._numberVersion = value;
    }

    get state(): string {
        return this._state;
    }

    set state(value: string) {
        this._state = value;
    }

    get idCurrentQuarter(): CurrentQuarter {
        return this._idCurrentQuarter;
    }

    set idCurrentQuarter(value: CurrentQuarter) {
        this._idCurrentQuarter = value;
    }

    get scheduleList(): Schedule[] {
        return this._scheduleList;
    }

    set scheduleList(value: Schedule[]) {
        this._scheduleList = value;
    }
}