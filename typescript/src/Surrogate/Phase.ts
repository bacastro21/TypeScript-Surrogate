import { Proyect } from "./Proyect";
import { ProyectActivity } from "./ProyectActivity";

export class Phase{
    private _id: number;
    private _name:string;
    private _state:string;
    private _idPoyect:Proyect;
    private _proyectActivityList: Array<ProyectActivity>;
    
}