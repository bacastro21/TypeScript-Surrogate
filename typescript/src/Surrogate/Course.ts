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

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get courseNumber(): string {
        return this._courseNumber;
    }

    set courseNumber(value: string) {
        this._courseNumber = value;
    }

    get startDate(): string {
        return this._startDate;
    }

    set startDate(value: string) {
        this._startDate = value;
    }

    get endDate(): string {
        return this._endDate;
    }

    set endDate(value: string) {
        this._endDate = value;
    }

    get route(): string {
        return this._route;
    }

    set route(value: string) {
        this._route = value;
    }

    get idCourseState(): CourseState {
        return this._idCourseState;
    }

    set idCourseState(value: CourseState) {
        this._idCourseState = value;
    }

    get idProgram(): Program {
        return this._idProgram;
    }

    set idProgram(value: Program) {
        this._idProgram = value;
    }

    get idWorkingDay(): WorkingDay {
        return this._idWorkingDay;
    }

    set idWorkingDay(value: WorkingDay) {
        this._idWorkingDay = value;
    }

    get courseTrimesterList(): Array<CourseTrimester> {
        return this._courseTrimesterList;
    }

    set courseTrimesterList(value: Array<CourseTrimester>) {
        this._courseTrimesterList = value;
    }
}