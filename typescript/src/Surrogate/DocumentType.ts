import {Client} from "./Client";

export class DocumentType {
    private _id: number;
    private _initial: string;
    private _documentName: string;
    private _state: string;
    private _clientList: Client;


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get initial(): string {
        return this._initial;
    }

    set initial(value: string) {
        this._initial = value;
    }

    get documentName(): string {
        return this._documentName;
    }

    set documentName(value: string) {
        this._documentName = value;
    }

    get state(): string {
        return this._state;
    }

    set state(value: string) {
        this._state = value;
    }

    get clientList(): Client {
        return this._clientList;
    }

    set clientList(value: Client) {
        this._clientList = value;
    }
}