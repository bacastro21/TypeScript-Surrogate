import { Ambient } from "./Ambient";

export class TypeEnviroment {
    private _id: number;
    private _type: string;
    private _description: string;
    private _state: string;
    private _ambientList: Array<Ambient>;
}