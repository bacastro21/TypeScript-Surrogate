import { Schedule } from "./Schedule";

export class Modality {
    private _id: number;
    private _modalityName: string;
    private _color: string;
    private _state: string;
    private _scheduleList: Array<Schedule>;

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

    get scheduleList(): Array<Schedule> {
        return this._scheduleList;
    }

    set scheduleList(value: Array<Schedule>) {
        this._scheduleList = value;
    }
}