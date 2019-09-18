import { Course } from "./Course";
import {LearningResult} from "./LearningResult";

export class CourseState {
    private _id: number;
    private _nameState: string;
    private _state: string;
    private _courseList: Course[];

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get nameState(): string {
        return this._nameState;
    }

    set nameState(value: string) {
        this._nameState = value;
    }

    get state(): string {
        return this._state;
    }

    set state(value: string) {
        this._state = value;
    }

    get courseList(): Course[] {
        return this._courseList;
    }

    set courseList(value: Course[]) {
        this._courseList = value;
    }
}