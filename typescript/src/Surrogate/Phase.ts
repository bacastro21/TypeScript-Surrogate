import { Proyect } from "./Proyect";
import { ProyectActivity } from "./ProyectActivity";
import {TimeStudy} from "./TimeStudy";

export class Phase {
    private _id: number;
    private _name: string;
    private _state: string;
    private _idPoyect: Proyect;
    private _proyectActivityList: ProyectActivity[];

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

    get proyectActivityList(): ProyectActivity[] {
        return this._proyectActivityList;
    }

    set proyectActivityList(value: ProyectActivity[]) {
        this._proyectActivityList = value;
    }
}