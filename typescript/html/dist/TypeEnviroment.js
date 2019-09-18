var TypeEnviroment = (function () {
    function TypeEnviroment() {
    }
    Object.defineProperty(TypeEnviroment.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeEnviroment.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeEnviroment.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeEnviroment.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeEnviroment.prototype, "ambientList", {
        get: function () {
            return this._ambientList;
        },
        set: function (value) {
            this._ambientList = value;
        },
        enumerable: true,
        configurable: true
    });
    return TypeEnviroment;
})();
exports.TypeEnviroment = TypeEnviroment;
