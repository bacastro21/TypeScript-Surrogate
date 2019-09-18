var Day = (function () {
    function Day() {
    }
    Object.defineProperty(Day.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Day.prototype, "nameDay", {
        get: function () {
            return this._nameDay;
        },
        set: function (value) {
            this._nameDay = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Day.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Day.prototype, "scheduleList", {
        get: function () {
            return this._scheduleList;
        },
        set: function (value) {
            this._scheduleList = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Day.prototype, "timeStudyList", {
        get: function () {
            return this._timeStudyList;
        },
        set: function (value) {
            this._timeStudyList = value;
        },
        enumerable: true,
        configurable: true
    });
    return Day;
})();
exports.Day = Day;
