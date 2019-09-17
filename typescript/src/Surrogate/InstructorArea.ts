import {Area} from "./Area";
import {Instructor} from "./Instructor";

export class InstructorArea {
    private _id: number;
    private _state: string;
    private _idArea: Area;
    private _idInstructor: Instructor;

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get state(): string {
        return this._state;
    }

    set state(value: string) {
        this._state = value;

    }

    get idArea(): Area {
        return this._idArea;
    }

    set idArea(value: Area) {
        this._idArea = value;
    }

    get idInstructor(): Instructor {
        return this._idInstructor;
    }

    set idInstructor(value: Instructor) {
        this._idInstructor = value;
    }

}