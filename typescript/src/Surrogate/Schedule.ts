import { Ambient } from "./Ambient";
import { CourseTrimester } from "./CourseTrimester";
import { CurrentQuarter } from "./CurrentQuarter";
import { Day } from "./Day";
import { Instructor } from "./Instructor";
import { Modality } from "./Modality";

export class Schedule {
    private _id: number;
    private _startDate: any;
    private _endDate: any;
    private _idAmbient: Ambient;
    private _idDay: Day;
    private _idCourseTrimester: CourseTrimester;
    private _idInstructor: Instructor;
    private _idModality: Modality;
    private _idCurrentQuarter: CurrentQuarter

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

    get endDate(): any {
        return this._endDate;
    }

    set endDate(value: any) {
        this._endDate = value;
    }

    get idAmbient(): Ambient {
        return this._idAmbient;
    }

    set idAmbient(value: Ambient) {
        this._idAmbient = value;
    }

    get idDay(): Day {
        return this._idDay;
    }

    set idDay(value: Day) {
        this._idDay = value;
    }

    get idCourseTrimester(): CourseTrimester {
        return this._idCourseTrimester;
    }

    set idCourseTrimester(value: CourseTrimester) {
        this._idCourseTrimester = value;
    }

    get idInstructor(): Instructor {
        return this._idInstructor;
    }

    set idInstructor(value: Instructor) {
        this._idInstructor = value;
    }

    get idModality(): Modality {
        return this._idModality;
    }

    set idModality(value: Modality) {
        this._idModality = value;
    }

    get idCurrentQuarter(): CurrentQuarter {
        return this._idCurrentQuarter;
    }

    set idCurrentQuarter(value: CurrentQuarter) {
        this._idCurrentQuarter = value;
    }
}