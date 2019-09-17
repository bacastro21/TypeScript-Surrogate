import { CourseState } from "./CourseState";
import { CourseTrimester } from "./CourseTrimester";
import { Program } from "./Program";
import { WorkingDay } from "./WorkingDay";

export class Course {
    private _id: number;
    private _courseNumber: string;
    private _startDate: string;
    private _endDate: string;
    private _route: string;
    private _idCourseState: CourseState;
    private _idProgram: Program;
    private _idWorkingDay: WorkingDay;
    private _courseTrimesterList: Array<CourseTrimester>;

}