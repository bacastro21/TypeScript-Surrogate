import { LearningResult } from "./LearningResult";
import { Planing } from "./Planing";
import { PlaninigActivity } from "./PlaningActivity";
import { Trimester } from "./Trimester";

export class TrimesterPlaning{
    private _id:number;
    private _idLearningResult: LearningResult;
    private _idTrimester: Trimester;
    private _idPlaning: Planing;
    private _planingActivityList:Array<PlaninigActivity>;
    
}