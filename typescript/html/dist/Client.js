var Client = (function () {
    function Client() {
    }
    Object.defineProperty(Client.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "documentNumber", {
        get: function () {
            return this._documentNumber;
        },
        set: function (value) {
            this._documentNumber = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "secondName", {
        get: function () {
            return this._secondName;
        },
        set: function (value) {
            this._secondName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "fistLastName", {
        get: function () {
            return this._fistLastName;
        },
        set: function (value) {
            this._fistLastName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "secondLastName", {
        get: function () {
            return this._secondLastName;
        },
        set: function (value) {
            this._secondLastName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "idDocumentType", {
        get: function () {
            return this._idDocumentType;
        },
        set: function (value) {
            this._idDocumentType = value;
        },
        enumerable: true,
        configurable: true
    });
    return Client;
})();
exports.Client = Client;
