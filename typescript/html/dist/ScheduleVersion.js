var ScheduleVersion = (function () {
    function ScheduleVersion() {
    }
    Object.defineProperty(ScheduleVersion.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScheduleVersion.prototype, "numberVersion", {
        get: function () {
            return this._numberVersion;
        },
        set: function (value) {
            this._numberVersion = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScheduleVersion.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScheduleVersion.prototype, "idCurrentQuarter", {
        get: function () {
            return this._idCurrentQuarter;
        },
        set: function (value) {
            this._idCurrentQuarter = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScheduleVersion.prototype, "scheduleList", {
        get: function () {
            return this._scheduleList;
        },
        set: function (value) {
            this._scheduleList = value;
        },
        enumerable: true,
        configurable: true
    });
    return ScheduleVersion;
})();
exports.ScheduleVersion = ScheduleVersion;
