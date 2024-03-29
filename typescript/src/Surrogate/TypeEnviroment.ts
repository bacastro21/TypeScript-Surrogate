import { Ambient } from "./Ambient";
import {TimeStudy} from "./TimeStudy";

export class TypeEnviroment {
    private _id: number;
    private _type: string;
    private _description: string;
    private _state: string;
    private _ambientList: Ambient[];

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
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