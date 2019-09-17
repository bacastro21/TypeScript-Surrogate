import {ScheduleAvailability} from "./ScheduleAvailability";
import {TimeStudy} from "./TimeStudy";

export class WorkingDayInstructor {
    private _id : number;
    private _nameDay: string;
    private _description: string;
    private _scheduleAvailabilityList: Array<ScheduleAvailability>;
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

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get scheduleAvailabilityList(): Array<ScheduleAvailability> {
        return this._scheduleAvailabilityList;
    }

    set scheduleAvailabilityList(value: Array<ScheduleAvailability>) {
        this._scheduleAvailabilityList = value;
    }

    get timeStudyList(): Array<TimeStudy> {
        return this._timeStudyList;
    }

    set timeStudyList(value: Array<TimeStudy>) {
        this._timeStudyList = value;
    }
}