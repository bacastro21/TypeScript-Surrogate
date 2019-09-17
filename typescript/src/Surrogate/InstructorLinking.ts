import {Year} from "./Year";
import {Link} from "./Link";
import {Instructor} from "./Instructor";
import {ScheduleAvailability} from "./ScheduleAvailability";
import {AvailabilityCompetition} from "./AvailabilityCompetition";

export class InstructorLinking {
    private _id: number;
    private _startDate: any;
    private _endDtae: any;
    private _idYear: Year;
    private _idLimk: Link;
    private _idInstructor: Instructor;
    private _scheduleAvailabilityList: Array<ScheduleAvailability>;
    private _availabilityCompetitionList: Array<AvailabilityCompetition>;


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get startDate(): any {
        return this._startDate;
    }

    set startDate(value: any) {
        this._startDate = value;
    }

    get endDtae(): any {
        return this._endDtae;
    }

    set endDtae(value: any) {
        this._endDtae = value;
    }

    get idYear(): Year {
        return this._idYear;
    }

    set idYear(value: Year) {
        this._idYear = value;
    }

    get idLimk(): Link {
        return this._idLimk;
    }

    set idLimk(value: Link) {
        this._idLimk = value;
    }

    get idInstructor(): Instructor {
        return this._idInstructor;
    }

    set idInstructor(value: Instructor) {
        this._idInstructor = value;
    }

    get scheduleAvailabilityList(): Array<ScheduleAvailability> {
        return this._scheduleAvailabilityList;
    }

    set scheduleAvailabilityList(value: Array<ScheduleAvailability>) {
        this._scheduleAvailabilityList = value;
    }

    get availabilityCompetitionList(): Array<AvailabilityCompetition> {
        return this._availabilityCompetitionList;
    }

    set availabilityCompetitionList(value: Array<AvailabilityCompetition>) {
        this._availabilityCompetitionList = value;
    }
}