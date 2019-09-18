var Ambient = (function () {
    function Ambient() {
    }
    Object.defineProperty(Ambient.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ambient.prototype, "roomNumber", {
        get: function () {
            return this._roomNumber;
        },
        set: function (value) {
            this._roomNumber = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ambient.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ambient.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ambient.prototype, "limitation", {
        get: function () {
            return this._limitation;
        },
        set: function (value) {
            this._limitation = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ambient.prototype, "idTypeEnviroment", {
        get: function () {
            return this._idTypeEnviroment;
        },
        set: function (value) {
            this._idTypeEnviroment = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ambient.prototype, "idSede", {
        get: function () {
            return this._idSede;
        },
        set: function (value) {
            this._idSede = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ambient.prototype, "limitationEnviromentList", {
        get: function () {
            return this._limitationEnviromentList;
        },
        set: function (value) {
            this._limitationEnviromentList = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ambient.prototype, "scheduleList", {
        get: function () {
            return this._scheduleList;
        },
        set: function (value) {
            this._scheduleList = value;
        },
        enumerable: true,
        configurable: true
    });
    return Ambient;
})();
exports.Ambient = Ambient;
