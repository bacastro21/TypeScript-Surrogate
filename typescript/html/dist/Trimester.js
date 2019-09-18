var Trimester = (function () {
    function Trimester() {
    }
    Object.defineProperty(Trimester.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Trimester.prototype, "trimesterName", {
        get: function () {
            return this._trimesterName;
        },
        set: function (value) {
            this._trimesterName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Trimester.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Trimester.prototype, "idWorkingDay", {
        get: function () {
            return this._idWorkingDay;
        },
        set: function (value) {
            this._idWorkingDay = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Trimester.prototype, "idFormationLevel", {
        get: function () {
            return this._idFormationLevel;
        },
        set: function (value) {
            this._idFormationLevel = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Trimester.prototype, "courseTrimesterList", {
        get: function () {
            return this._courseTrimesterList;
        },
        set: function (value) {
            this._courseTrimesterList = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Trimester.prototype, "trimesterPlaningList", {
        get: function () {
            return this._trimesterPlaningList;
        },
        set: function (value) {
            this._trimesterPlaningList = value;
        },
        enumerable: true,
        configurable: true
    });
    return Trimester;
})();
exports.Trimester = Trimester;
