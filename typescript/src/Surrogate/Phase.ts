import { Proyect } from "./Proyect";
import { ProyectActivity } from "./ProyectActivity";

export class Phase{
    private _id: number;
    private _name:string;
    private _state:string;
    private _idPoyect:Proyect;
    private _proyectActivityList: Array<ProyectActivity>;

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get state(): string {
        return this._state;
    }

    set state(value: string) {
        this._state = value;
    }

    get idPoyect(): Proyect {
        return this._idPoyect;
    }

    set idPoyect(value: Proyect) {
        this._idPoyect = value;
    }

    get proyectActivityList(): Array<ProyectActivity> {
        return this._proyectActivityList;
    }

    set proyectActivityList(value: Array<ProyectActivity>) {
        this._proyectActivityList = value;
    }
}