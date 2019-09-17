import { Phase } from "./Phase";
import { Program } from "./Program";

export class Proyect{
    private _id: number;
    private _code:string;
    private _state:string;
    private _phaseList: Array<Phase>;
    private _idProgram: Program;

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

    get state(): string {
        return this._state;
    }

    set state(value: string) {
        this._state = value;
    }

    get phaseList(): Array<Phase> {
        return this._phaseList;
    }

    set phaseList(value: Array<Phase>) {
        this._phaseList = value;
    }

    get idProgram(): Program {
        return this._idProgram;
    }

    set idProgram(value: Program) {
        this._idProgram = value;
    }
}