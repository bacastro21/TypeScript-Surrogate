import {CurrentQuarter} from "./CurrentQuarter";
import {InstructorLinking} from "./InstructorLinking";

export class Year {
    private _id: number;
    private _numberYear: number;
    private _state: string;
    private _currentQuarterList: Array<CurrentQuarter>;
    private _instructorLinkingList: Array<InstructorLinking>;

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get numberYear(): number {
        return this._numberYear;
    }

    set numberYear(value: number) {
        this._numberYear = value;
    }

    get state(): string {
        return this._state;
    }

    set state(value: string) {
        this._state = value;
    }

    get currentQuarterList(): Array<CurrentQuarter> {
        return this._currentQuarterList;
    }

    set currentQuarterList(value: Array<CurrentQuarter>) {
        this._currentQuarterList = value;
    }

    get instructorLinkingList(): Array<InstructorLinking> {
        return this._instructorLinkingList;
    }

    set instructorLinkingList(value: Array<InstructorLinking>) {
        this._instructorLinkingList = value;
    }
}