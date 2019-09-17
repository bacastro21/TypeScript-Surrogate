import { Schedule } from "./Schedule";
import { Client } from "./Client";
import { InstructorArea } from "./InstructorArea";
import { InstructorLinking } from "./InstructorLinking";
export class Instructor {
    private _id: number;
    private _state: string;
    private _idClient: Client;
    private _scheduleList: Array<Schedule>;
    private _instructorAreaList: Array<InstructorArea>;
    private _instructorLinkingList: Array<InstructorLinking>;

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
    get scheduleList(): Array<Schedule> {
        return this._scheduleList;
    }
    set scheduleList(value: Array<Schedule>) {
        this._scheduleList = value;

    }
    get instructorAreaList(): Array<InstructorArea> {
        return this._instructorAreaList;
    }
    set instructorAreaList(value: Array<InstructorArea>) {
        this._instructorAreaList;
    }
    get instructorLinkingList(): Array<InstructorLinking> {
        return this._instructorLinkingList;
    }
    set instructorLinkingList(value: Array<InstructorLinking>) {
        this._instructorLinkingList = value;
    }

}