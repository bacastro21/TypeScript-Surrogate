import { Schedule } from "./Schedule";
import {TimeStudy} from "./TimeStudy";

export class Modality {
    private _id: number;
    private _modalityName: string;
    private _color: string;
    private _state: string;
    private _scheduleList: Schedule[];

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get modalityName(): string {
        return this._modalityName;
    }

    set modalityName(value: string) {
        this._modalityName = value;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    get state(): string {
        return this._state;
    }

    set state(value: string) {
        this._state = value;
    }

    get scheduleList(): Schedule[] {
        return this._scheduleList;
    }

    set scheduleList(value: Schedule[]) {
        this._scheduleList = value;
    }
}