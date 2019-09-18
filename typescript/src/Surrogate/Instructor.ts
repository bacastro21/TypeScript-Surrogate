import {Client} from "./Client";
import {InstructorArea} from "./InstructorArea";
import {InstructorLinking} from "./InstructorLinking";
import {Schedule} from "./Schedule";
import {TimeStudy} from "./TimeStudy";

export class Instructor {
    private _id: number;
    private _state: string;
    private _idClient: Client;
    private _scheduleList: Schedule[];
    private _instructorAreaList: InstructorArea[];
    private _instructorLinkingList: InstructorLinking[];

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get state(): string {
        return this._state;
    }

    set state(value: string) {
        this._state = value;
    }

    get idClient(): Client {
        return this.idClient;
    }

    set idClient(value: Client) {
        this._idClient = value;
    }

    get scheduleList(): Schedule[] {
        return this._scheduleList;
    }

    set scheduleList(value: Schedule[]) {
        this._scheduleList = value;

    }

    get instructorAreaList(): InstructorArea[] {
        return this._instructorAreaList;
    }

    set instructorAreaList(value: InstructorArea[]) {
        this._instructorAreaList = value;
    }

    get instructorLinkingList(): InstructorLinking[] {
        return this._instructorLinkingList;
    }

    set instructorLinkingList(value: InstructorLinking[]) {
        this._instructorLinkingList = value;
    }

}