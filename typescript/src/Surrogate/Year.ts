import { CurrentQuarter } from "./CurrentQuarter";
import { InstructorLinking } from "./InstructorLinking";
import {TimeStudy} from "./TimeStudy";

export class Year {
    private _id: number;
    private _numberYear: number;
    private _state: string;
    private _currentQuarterList: CurrentQuarter[];
    private _instructorLinkingList: InstructorLinking[];

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

    get currentQuarterList(): CurrentQuarter[] {
        return this._currentQuarterList;
    }

    set currentQuarterList(value: CurrentQuarter[]) {
        this._currentQuarterList = value;
    }

    get instructorLinkingList(): InstructorLinking[] {
        return this._instructorLinkingList;
    }

    set instructorLinkingList(value: InstructorLinking[]) {
        this._instructorLinkingList = value;
    }
}