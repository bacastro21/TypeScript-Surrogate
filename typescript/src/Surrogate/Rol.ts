import {Users} from "./Users";

export class Rol{
    private _name:string;
    private _usersList: Array<Users>;

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get usersList(): Array<Users> {
        return this._usersList;
    }

    set usersList(value: Array<Users>) {
        this._usersList = value;
    }
}