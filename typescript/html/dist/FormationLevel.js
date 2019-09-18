var FormationLevel = (function () {
    function FormationLevel() {
    }
    Object.defineProperty(FormationLevel.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormationLevel.prototype, "level", {
        get: function () {
            return this._level;
        },
        set: function (value) {
            this._level = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormationLevel.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormationLevel.prototype, "programList", {
        get: function () {
            return this._programList;
        },
        set: function (value) {
            this._programList = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormationLevel.prototype, "trimesterList", {
        get: function () {
            return this._trimesterList;
        },
        set: function (value) {
            this._trimesterList = value;
        },
        enumerable: true,
        configurable: true
    });
    return FormationLevel;
})();
exports.FormationLevel = FormationLevel;
