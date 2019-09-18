import { Course } from "./Course";
import { Trimester } from "./Trimester";

export class WorkingDay {
    private _id: number;
    private _initialWorkingDay: string;
    private _nameWorkingDay: string;
    private _description: string;
    private _imagenUrl: string;
    private _state: string;
    private _trimesterList: Trimester[];
    private _courseList: Course[];

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get initialWorkingDay(): string {
        return this._initialWorkingDay;
    }

    set initialWorkingDay(value: string) {
        this._initialWorkingDay = value;
    }

    get nameWorkingDay(): string {
        return this._nameWorkingDay;
    }

    set nameWorkingDay(value: string) {
        this._nameWorkingDay = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get imagenUrl(): string {
        return this._imagenUrl;
    }

    set imagenUrl(value: string) {
        this._imagenUrl = value;
    }

    get state(): string {
        return this._state;
    }

    set state(value: string) {
        this._state = value;
    }

    get trimesterList(): Trimester[] {
        return this._trimesterList;
    }

    set trimesterList(value: Trimester[]) {
        this._trimesterList = value;
    }

    get courseList(): Course[] {
        return this._courseList;
    }

    set courseList(value: Course[]) {
        this._courseList = value;
    }
}