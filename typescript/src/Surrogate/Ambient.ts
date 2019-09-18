import {LimitationEnviroment} from "./LimitationEnviroment";
import {Schedule} from "./Schedule";
import {Sede} from "./Sede";
import {TypeEnviroment} from "./TypeEnviroment";

export class Ambient {
    private _id: number;
    private _roomNumber: string;
    private _description: string;
    private _state: string;
    private _limitation: string;
    private _idTypeEnviroment: TypeEnviroment;
    private _idSede: Sede;
    private _limitationEnviromentList: LimitationEnviroment[];
    private _scheduleList: Schedule[];

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get roomNumber(): string {
        return this._roomNumber;
    }

    set roomNumber(value: string) {
        this._roomNumber = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get state(): string {
        return this._state;
    }

    set state(value: string) {
        this._state = value;
    }

    get limitation(): string {
        return this._limitation;
    }

    set limitation(value: string) {
        this._limitation = value;
    }

    get idTypeEnviroment(): TypeEnviroment {
        return this._idTypeEnviroment;
    }

    set idTypeEnviroment(value: TypeEnviroment) {
        this._idTypeEnviroment = value;
    }

    get idSede(): Sede {
        return this._idSede;
    }

    set idSede(value: Sede) {
        this._idSede = value;
    }

    get limitationEnviromentList(): LimitationEnviroment[] {
        return this._limitationEnviromentList;
    }

    set limitationEnviromentList(value: LimitationEnviroment[] ) {
        this._limitationEnviromentList = value;
    }

    get scheduleList(): Schedule[] {
        return this._scheduleList;
    }

    set scheduleList(value: Schedule[]) {
        this._scheduleList = value;
    }
}