import { Schedule } from "./Schedule";

export class Modality {
    private _id: number;
    private _modalityName: string;
    private _color: string;
    private _state: string;
    private _scheduleList: Array<Schedule>;
}