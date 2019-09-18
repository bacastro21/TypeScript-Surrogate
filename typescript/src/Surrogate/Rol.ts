import {Users} from "./Users";

export class Rol {
    private _name: string;
    private _usersList: Users[];

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get usersList(): Users[] {
        return this._usersList;
    }

    set usersList(value: Users[]) {
        this._usersList = value;
    }
}