import { Competition } from "./Competition";
import { Course } from "./Course";
import { FormationLevel } from "./FormationLevel";
import { Proyect } from "./Proyect";

export class Program {
    private _id: number;
    private _code:string;
    private _version: string;
    private _name: string;
    private _acronym:string;
    private _state: string;
    private _competitionList:Array<Competition>;
    private _idFormationLevel: FormationLevel;
    private _courseList: Course;
    private _proyectList: Array<Proyect>;

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

    get version(): string {
        return this._version;
    }

    set version(value: string) {
        this._version = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get acronym(): string {
        return this._acronym;
    }

    set acronym(value: string) {
        this._acronym = value;
    }

    get state(): string {
        return this._state;
    }

    set state(value: string) {
        this._state = value;
    }

    get competitionList(): Array<Competition> {
        return this._competitionList;
    }

    set competitionList(value: Array<Competition>) {
        this._competitionList = value;
    }

    get idFormationLevel(): FormationLevel {
        return this._idFormationLevel;
    }

    set idFormationLevel(value: FormationLevel) {
        this._idFormationLevel = value;
    }

    get courseList(): Course {
        return this._courseList;
    }

    set courseList(value: Course) {
        this._courseList = value;
    }

    get proyectList(): Array<Proyect> {
        return this._proyectList;
    }

    set proyectList(value: Array<Proyect>) {
        this._proyectList = value;
    }
}