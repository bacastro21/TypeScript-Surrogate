var Sede = (function () {
    function Sede() {
    }
    Object.defineProperty(Sede.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sede.prototype, "nameSede", {
        get: function () {
            return this._nameSede;
        },
        set: function (value) {
            this._nameSede = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sede.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sede.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sede.prototype, "ambientList", {
        get: function () {
            return this._ambientList;
        },
        set: function (value) {
            this._ambientList = value;
        },
        enumerable: true,
        configurable: true
    });
    return Sede;
})();
exports.Sede = Sede;
