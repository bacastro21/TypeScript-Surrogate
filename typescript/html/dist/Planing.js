var Planing = (function () {
    function Planing() {
    }
    Object.defineProperty(Planing.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Planing.prototype, "code", {
        get: function () {
            return this._code;
        },
        set: function (value) {
            this._code = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Planing.prototype, "date", {
        get: function () {
            return this._date;
        },
        set: function (value) {
            this._date = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Planing.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Planing.prototype, "trimesterPlaningList", {
        get: function () {
            return this._trimesterPlaningList;
        },
        set: function (value) {
            this._trimesterPlaningList = value;
        },
        enumerable: true,
        configurable: true
    });
    return Planing;
})();
exports.Planing = Planing;
