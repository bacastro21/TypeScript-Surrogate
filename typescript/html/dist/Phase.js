var Phase = (function () {
    function Phase() {
    }
    Object.defineProperty(Phase.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Phase.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Phase.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Phase.prototype, "idPoyect", {
        get: function () {
            return this._idPoyect;
        },
        set: function (value) {
            this._idPoyect = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Phase.prototype, "proyectActivityList", {
        get: function () {
            return this._proyectActivityList;
        },
        set: function (value) {
            this._proyectActivityList = value;
        },
        enumerable: true,
        configurable: true
    });
    return Phase;
})();
exports.Phase = Phase;
