import { InstructorLinking } from "./InstructorLinking";
import { WorkingDayInstructor } from "./WorkingDayInstructor";

export class ScheduleAvailability {
    private _id: number;
    private _idInstructorLinking: InstructorLinking;
    private _idWorkingDayInstructor: WorkingDayInstructor;

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get idInstructorLinking(): InstructorLinking {
        return this._idInstructorLinking;
    }

    set idInstructorLinking(value: InstructorLinking) {
        this._idInstructorLinking = value;
    }

    get idWorkingDayInstructor(): WorkingDayInstructor {
        return this._idWorkingDayInstructor;
    }

    set idWorkingDayInstructor(value: WorkingDayInstructor) {
        this._idWorkingDayInstructor = value;
    }
}