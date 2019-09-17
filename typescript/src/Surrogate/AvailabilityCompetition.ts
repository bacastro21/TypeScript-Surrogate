import {Competition} from "./Competition";
import {InstructorLinking} from "./InstructorLinking";

export class AvailabilityCompetition {
    private _id: number;
    private _idCompetition: Competition;
    private _idInstructorLimking: InstructorLinking;


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get idCompetition(): Competition {
        return this._idCompetition;
    }

    set idCompetition(value: Competition) {
        this._idCompetition = value;
    }

    get idInstructorLimking(): InstructorLinking {
        return this._idInstructorLimking;
    }

    set idInstructorLimking(value: InstructorLinking) {
        this._idInstructorLimking = value;
    }
}