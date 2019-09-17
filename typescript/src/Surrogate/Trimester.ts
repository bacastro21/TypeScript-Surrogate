import { CourseTrimester } from "./CourseTrimester";
import { FormationLevel } from "./FormationLevel";
import { TrimesterPlaning } from "./TrimesterPlaning";
import { WorkingDay } from "./WorkingDay";

export class Trimester {
    private _id: number;
    private _trimesterName: string;
    private _state: string;
    private _idWorkingDay: WorkingDay;
    private _idFormationLevel: FormationLevel;
    private _courseTrimesterList: Array<CourseTrimester>;
    private _trimesterPlaningList: Array<TrimesterPlaning>;

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get trimesterName(): string {
        return this._trimesterName;
    }

    set trimesterName(value: string) {
        this._trimesterName = value;
    }

    get state(): string {
        return this._state;
    }

    set state(value: string) {
        this._state = value;
    }

    get idWorkingDay(): WorkingDay {
        return this._idWorkingDay;
    }

    set idWorkingDay(value: WorkingDay) {
        this._idWorkingDay = value;
    }

    get idFormationLevel(): FormationLevel {
        return this._idFormationLevel;
    }

    set idFormationLevel(value: FormationLevel) {
        this._idFormationLevel = value;
    }

    get courseTrimesterList(): Array<CourseTrimester> {
        return this._courseTrimesterList;
    }

    set courseTrimesterList(value: Array<CourseTrimester>) {
        this._courseTrimesterList = value;
    }

    get trimesterPlaningList(): Array<TrimesterPlaning> {
        return this._trimesterPlaningList;
    }

    set trimesterPlaningList(value: Array<TrimesterPlaning>) {
        this._trimesterPlaningList = value;
    }
}