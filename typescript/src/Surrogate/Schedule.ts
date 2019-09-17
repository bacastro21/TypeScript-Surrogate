import { Ambient } from "./Ambient";
import { CourseTrimester } from "./CourseTrimester";
import { CurrentQuarter } from "./CurrentQuarter";
import { Day } from "./Day";
import { Instructor } from "./Instructor";
import { Modality } from "./Modality";

export class Schedule {
    private _id: number;
    private _startDate: any;
    private _endDate: any;
    private _idAmbient: Ambient;
    private _idDay: Day;
    private _idCourseTrimester: CourseTrimester;
    private _idInstructor: Instructor;
    private _idModality: Modality;
    private _idCurrentQuarter: CurrentQuarter;
}