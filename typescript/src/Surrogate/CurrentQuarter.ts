import { ScheduleVersion } from "./ScheduleVersion";
import { Year } from "./Year";

export class CurrentQuarter {
    private _id: number;
    private _scheduleQuarter: number;
    private _startDate: any;
    private _endDate: any;
    private _state: string;
    private _idYear: Year;
    private _scheduleVersionList: ScheduleVersion[];

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get scheduleQuarter(): number {
        return this._scheduleQuarter;
    }

    set scheduleQuarter(value: number) {
        this._scheduleQuarter = value;
    }

    get startDate(): any {
        return this._startDate;
    }

    set startDate(value: any) {
        this._startDate = value;
    }

    get endDate(): any {
        return this._endDate;
    }

    set endDate(value: any) {
        this._endDate = value;
    }

    get state(): string {
        return this._state;
    }

    set state(value: string) {
        this._state = value;
    }

    get idYear(): Year {
        return this._idYear;
    }

    set idYear(value: Year) {
        this._idYear = value;
    }

    get scheduleVersionList(): ScheduleVersion[] {
        return this._scheduleVersionList;
    }

    set scheduleVersionList(value: ScheduleVersion[]) {
        this._scheduleVersionList = value;
    }
}