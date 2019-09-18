var CurrentQuarter = (function () {
    function CurrentQuarter() {
    }
    Object.defineProperty(CurrentQuarter.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentQuarter.prototype, "scheduleQuarter", {
        get: function () {
            return this._scheduleQuarter;
        },
        set: function (value) {
            this._scheduleQuarter = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentQuarter.prototype, "startDate", {
        get: function () {
            return this._startDate;
        },
        set: function (value) {
            this._startDate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentQuarter.prototype, "endDate", {
        get: function () {
            return this._endDate;
        },
        set: function (value) {
            this._endDate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentQuarter.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentQuarter.prototype, "idYear", {
        get: function () {
            return this._idYear;
        },
        set: function (value) {
            this._idYear = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrentQuarter.prototype, "scheduleVersionList", {
        get: function () {
            return this._scheduleVersionList;
        },
        set: function (value) {
            this._scheduleVersionList = value;
        },
        enumerable: true,
        configurable: true
    });
    return CurrentQuarter;
})();
exports.CurrentQuarter = CurrentQuarter;
