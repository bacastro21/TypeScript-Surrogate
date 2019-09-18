import {Ambient} from "./Ambient";
import {TimeStudy} from "./TimeStudy";

export class Sede {
    private _id: number;
    private _nameSede: string;
    private _description: string;
    private _state: string;
    private _ambientList: Ambient[];


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get nameSede(): string {
        return this._nameSede;
    }

    set nameSede(value: string) {
        this._nameSede = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get state(): string {
        return this._state;
    }

    set state(value: string) {
        this._state = value;
    }

    get ambientList(): Ambient[] {
        return this._ambientList;
    }

    set ambientList(value: Ambient[]) {
        this._ambientList = value;
    }
}