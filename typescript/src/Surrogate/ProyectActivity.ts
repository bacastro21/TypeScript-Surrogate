import { Phase } from "./Phase";
import { PlaninigActivity } from "./PlaningActivity";

export class ProyectActivity{
    private _id:number;
    private _numberActivity: string;
    private _descriptionActivity: string;
    private _state:string;
    private _idPhase:Phase;
    private _planingActivityList: Array<PlaninigActivity>;
    
}