import { Phase } from "./Phase";
import { PlaninigActivity } from "./PlaningActivity";

export class ProyectActivity{
    private _id:number;
    private _numberActivity: string;
    private _descriptionActivity: string;
    private _state:string;
    private _idPhase:Phase;
    private _planingActivityList: Array<PlaninigActivity>;

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get numberActivity(): string {
        return this._numberActivity;
    }

    set numberActivity(value: string) {
        this._numberActivity = value;
    }

    get descriptionActivity(): string {
        return this._descriptionActivity;
    }

    set descriptionActivity(value: string) {
        this._descriptionActivity = value;
    }

    get state(): string {
        return this._state;
    }

    set state(value: string) {
        this._state = value;
    }

    get idPhase(): Phase {
        return this._idPhase;
    }

    set idPhase(value: Phase) {
        this._idPhase = value;
    }

    get planingActivityList(): Array<PlaninigActivity> {
        return this._planingActivityList;
    }

    set planingActivityList(value: Array<PlaninigActivity>) {
        this._planingActivityList = value;
    }
}