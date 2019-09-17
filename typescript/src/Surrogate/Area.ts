import {InstructorArea} from "./InstructorArea";

export class Area {
    private _id: number;
    private _nameArea: string;
    private _state: string;
    private _instructorAreaList: Array<InstructorArea>;

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get nameArea(): string {
        return this._nameArea;
    }

    set nameArea(value: string) {
        this._nameArea = value;
    }

    get state(): string {
        return this._state;
    }

    set state(value: string) {
        this._state = value;
    }

    get instructorArea(): Array<InstructorArea> {
        return this._instructorAreaList;
    }

    set instructorArea(value: Array<InstructorArea>) {
        this._instructorAreaList = value;
    }
}