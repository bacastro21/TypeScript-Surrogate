import { Course } from "./Course";
import { Trimester } from "./Trimester";

export class WorkingDay{
    private _id:number;
    private _initialWorkingDay:string;
    private _nameWorkingDay:string;
    private _description:string;
    private _imagenUrl:string;
    private _state:string;
    private _trimesterList:Array<Trimester>;
    private _courseList:Array<Course>;
    
}