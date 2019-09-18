import { ScheduleAvailability } from "./ScheduleAvailability";
import { TimeStudy } from "./TimeStudy";

export class WorkingDayInstructor {
    private _id: number;
    private _nameDay: string;
    private _description: string;
    private _scheduleAvailabilityList: ScheduleAvailability[];
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

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get scheduleAvailabilityList(): ScheduleAvailability[] {
        return this._scheduleAvailabilityList;
    }

    set scheduleAvailabilityList(value: ScheduleAvailability[]) {
        this._scheduleAvailabilityList = value;
    }

    get timeStudyList(): TimeStudy[] {
        return this._timeStudyList;
    }

    set timeStudyList(value: TimeStudy[]) {
        this._timeStudyList = value;
    }
}