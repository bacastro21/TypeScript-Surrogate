import { Program } from "./Program";
import { Trimester } from "./Trimester";

export class FormationLevel {
    private _id: number;
    private _level: string;
    private _state: string;
    private _programList: Array<Program>
    private _trimesterList: Array<Trimester>;

}