import { ProyectActivity } from "./ProyectActivity";
import { TrimesterPlaning } from "./TrimesterPlaning";

export class PlaninigActivity {
    private _id: number;
    private _idTrimesterPlaning: TrimesterPlaning;
    private _idProyectActivity: ProyectActivity;

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get idTrimesterPlaning(): TrimesterPlaning {
        return this._idTrimesterPlaning;
    }

    set idTrimesterPlaning(value: TrimesterPlaning) {
        this._idTrimesterPlaning = value;
    }

    get idProyectActivity(): ProyectActivity {
        return this._idProyectActivity;
    }

    set idProyectActivity(value: ProyectActivity) {
        this._idProyectActivity = value;
    }
}