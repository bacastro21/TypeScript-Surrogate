import { TrimesterPlaning } from "./TrimesterPlaning";

export class Planing{
    private _id:number;
    private _code:string;
    private _date:any;
    private _state:string;
    private _trimesterPlaningList:Array<TrimesterPlaning>;

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get code(): string {
        return this._code;
    }

    set code(value: string) {
        this._code = value;
    }

    get date(): any {
        return this._date;
    }

    set date(value: any) {
        this._date = value;
    }

    get state(): string {
        return this._state;
    }

    set state(value: string) {
        this._state = value;
    }

    get trimesterPlaningList(): Array<TrimesterPlaning> {
        return this._trimesterPlaningList;
    }

    set trimesterPlaningList(value: Array<TrimesterPlaning>) {
        this._trimesterPlaningList = value;
    }
}