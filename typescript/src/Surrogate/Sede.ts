import {Ambient} from "./Ambient";

export class Sede {
    private _id: number;
    private _nameSede: string;
    private _description: string;
    private _state: string;
    private _ambientList: Array<Ambient>;


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

    get ambientList(): Array<Ambient> {
        return this._ambientList;
    }

    set ambientList(value: Array<Ambient>) {
        this._ambientList = value;
    }
}