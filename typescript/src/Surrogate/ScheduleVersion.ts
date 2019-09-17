import {CurrentQuarter} from "./CurrentQuarter";
import {Schedule} from "./Schedule";

export class ScheduleVersion {
    private _id: number;
    private _numberVersion: string;
    private _state: string;
    private _idCurrentQuarter: CurrentQuarter;
    private _scheduleList: Array<Schedule>;


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

    get scheduleList(): Array<Schedule> {
        return this._scheduleList;
    }

    set scheduleList(value: Array<Schedule>) {
        this._scheduleList = value;
    }
}