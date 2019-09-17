import { Client } from "./Client";
import { Rol } from "./Rol";

export class Users {
    private _id: number;
    private _login: string;
    private _password: string;
    private _email: string;
    private _activated: number;
    private _langKey: string;
    private _imagenUrl: string;
    private _activationKey: string;
    private _resetKey: string;
    private _resetDate: any;
    private _rolList: Rol;
    private _idClient: Client;


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get login(): string {
        return this._login;
    }

    set login(value: string) {
        this._login = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get activated(): number {
        return this._activated;
    }

    set activated(value: number) {
        this._activated = value;
    }

    get langKey(): string {
        return this._langKey;
    }

    set langKey(value: string) {
        this._langKey = value;
    }

    get imagenUrl(): string {
        return this._imagenUrl;
    }

    set imagenUrl(value: string) {
        this._imagenUrl = value;
    }

    get activationKey(): string {
        return this._activationKey;
    }

    set activationKey(value: string) {
        this._activationKey = value;
    }

    get resetKey(): string {
        return this._resetKey;
    }

    set resetKey(value: string) {
        this._resetKey = value;
    }

    get resetDate(): any {
        return this._resetDate;
    }

    set resetDate(value: any) {
        this._resetDate = value;
    }

    get rolList(): Rol {
        return this._rolList;
    }

    set rolList(value: Rol) {
        this._rolList = value;
    }

    get idClient(): Client {
        return this._idClient;
    }

    set idClient(value: Client) {
        this._idClient = value;
    }
}