var Proyect = (function () {
    function Proyect() {
    }
    Object.defineProperty(Proyect.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Proyect.prototype, "code", {
        get: function () {
            return this._code;
        },
        set: function (value) {
            this._code = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Proyect.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Proyect.prototype, "phaseList", {
        get: function () {
            return this._phaseList;
        },
        set: function (value) {
            this._phaseList = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Proyect.prototype, "idProgram", {
        get: function () {
            return this._idProgram;
        },
        set: function (value) {
            this._idProgram = value;
        },
        enumerable: true,
        configurable: true
    });
    return Proyect;
})();
exports.Proyect = Proyect;
