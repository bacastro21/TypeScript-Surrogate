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
}