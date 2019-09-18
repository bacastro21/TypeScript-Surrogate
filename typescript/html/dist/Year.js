var Year = (function () {
    function Year() {
    }
    Object.defineProperty(Year.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Year.prototype, "numberYear", {
        get: function () {
            return this._numberYear;
        },
        set: function (value) {
            this._numberYear = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Year.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Year.prototype, "currentQuarterList", {
        get: function () {
            return this._currentQuarterList;
        },
        set: function (value) {
            this._currentQuarterList = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Year.prototype, "instructorLinkingList", {
        get: function () {
            return this._instructorLinkingList;
        },
        set: function (value) {
            this._instructorLinkingList = value;
        },
        enumerable: true,
        configurable: true
    });
    return Year;
})();
exports.Year = Year;
