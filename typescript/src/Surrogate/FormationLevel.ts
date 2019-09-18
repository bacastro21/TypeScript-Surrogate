import { Program } from "./Program";
import { Trimester } from "./Trimester";

export class FormationLevel {
    private _id: number;
    private _level: string;
    private _state: string;
    private _programList: Program[];
    private _trimesterList: Trimester[];

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get level(): string {
        return this._level;
    }

    set level(value: string) {
        this._level = value;
    }

    get state(): string {
        return this._state;
    }

    set state(value: string) {
        this._state = value;
    }

    get programList(): Program[] {
        return this._programList;
    }

    set programList(value: Program[]) {
        this._programList = value;
    }

    get trimesterList(): Trimester[] {
        return this._trimesterList;
    }

    set trimesterList(value: Trimester[]) {
        this._trimesterList = value;
    }
}