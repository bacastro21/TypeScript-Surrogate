import { Course } from "./Course";

export class CourseState {
    private _id: number;
    private _nameState: string;
    private _state: string;
    private _courseList: Array<Course>;
}