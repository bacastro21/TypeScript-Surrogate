import { Course } from "./Course";
import { ResultSeen } from "./ResultSeen";
import { Schedule } from "./Schedule";
import { Trimester } from "./Trimester";

export class CourseTrimester {
    private _id: number;
    private _idCourse: Course;
    private _idTrimester: Trimester;
    private _resultSeenList: Array<ResultSeen>;
    private _scheduleList:Array<Schedule>;
}