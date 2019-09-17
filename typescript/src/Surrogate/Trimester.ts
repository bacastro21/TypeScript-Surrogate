import { CourseTrimester } from "./CourseTrimester";
import { FormationLevel } from "./FormationLevel";
import { TrimesterPlaning } from "./TrimesterPlaning";
import { WorkingDay } from "./WorkingDay";

export class Trimester {
    private _id: number;
    private _trimesterName: string;
    private _state: string;
    private _idWorkingDay: WorkingDay;
    private _idFormationLevel: FormationLevel;
    private _courseTrimesterList: Array<CourseTrimester>;
    private _trimesterPlaningList: Array<TrimesterPlaning>;
}