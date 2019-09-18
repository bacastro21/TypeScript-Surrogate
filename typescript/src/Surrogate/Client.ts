import {DocumentType} from "./DocumentType";

export class Client {
    private _id: number;
    private _documentNumber: string;
    private _firstName: string;
    private _secondName: string;
    private _fistLastName: string;
    private _secondLastName: string;
    private _idDocumentType: DocumentType;


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get documentNumber(): string {
        return this._documentNumber;
    }

    set documentNumber(value: string) {
        this._documentNumber = value;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get secondName(): string {
        return this._secondName;
    }

    set secondName(value: string) {
        this._secondName = value;
    }

    get fistLastName(): string {
        return this._fistLastName;
    }

    set fistLastName(value: string) {
        this._fistLastName = value;
    }

    get secondLastName(): string {
        return this._secondLastName;
    }

    set secondLastName(value: string) {
        this._secondLastName = value;
    }

    get idDocumentType(): DocumentType {
        return this._idDocumentType;
    }

    set idDocumentType(value: DocumentType) {
        this._idDocumentType = value;
    }
}