import { LimitationEnviroment } from "./LimitationEnviroment";
import { Schedule } from "./Schedule";
import { Sede } from "./Sede";
import { TypeEnviroment } from "./TypeEnviroment";

export class Ambient {
    private _id: number;
    private _roomNumber: string;
    private _description: string;
    private _state: string;
    private _limitation: string;
    private _idTypeEnviroment: TypeEnviroment;
    private _idSede: Sede;
    private _limitationEnviromentList: Array<LimitationEnviroment>;
    private _scheduleList: Array<Schedule>;

}