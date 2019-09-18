var TimeStudy = (function () {
    function TimeStudy() {
    }
    Object.defineProperty(TimeStudy.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeStudy.prototype, "startTime", {
        get: function () {
            return this._startTime;
        },
        set: function (value) {
            this._startTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeStudy.prototype, "endTime", {
        get: function () {
            return this._endTime;
        },
        set: function (value) {
            this._endTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeStudy.prototype, "idDay", {
        get: function () {
            return this._idDay;
        },
        set: function (value) {
            this._idDay = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeStudy.prototype, "idWorkingDayInstructor", {
        get: function () {
            return this._idWorkingDayInstructor;
        },
        set: function (value) {
            this._idWorkingDayInstructor = value;
        },
        enumerable: true,
        configurable: true
    });
    return TimeStudy;
})();
exports.TimeStudy = TimeStudy;
