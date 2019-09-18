import {InstructorLinking} from "./InstructorLinking";
import {TimeStudy} from "./TimeStudy";

export class Link {
    private _id: number;
    private _linkType: string;
    private _hours: number;
    private _state: string;
    private _instructorLinkingList: InstructorLinking[];

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get linkType(): string {
        return this._linkType;
    }

    set linkType(value: string) {
        this._linkType = value;
    }

    get hours(): number {
        return this._hours;
    }

    set hours(value: number) {
        this._hours = value;
    }

    get state(): string {
        return this._state;
    }

    set state(value: string) {
        this._state = value;
    }

    get instructorLinkingList(): InstructorLinking[] {
        return this._instructorLinkingList;
    }

    set instructorLinkingList(value: InstructorLinking[]) {
        this._instructorLinkingList = value;
    }
}