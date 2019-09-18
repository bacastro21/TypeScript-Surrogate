var DocumentType = (function () {
    function DocumentType() {
    }
    Object.defineProperty(DocumentType.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentType.prototype, "initial", {
        get: function () {
            return this._initial;
        },
        set: function (value) {
            this._initial = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentType.prototype, "documentName", {
        get: function () {
            return this._documentName;
        },
        set: function (value) {
            this._documentName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentType.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentType.prototype, "clientList", {
        get: function () {
            return this._clientList;
        },
        set: function (value) {
            this._clientList = value;
        },
        enumerable: true,
        configurable: true
    });
    return DocumentType;
})();
exports.DocumentType = DocumentType;
