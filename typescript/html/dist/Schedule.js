var Schedule = (function () {
    function Schedule() {
    }
    Object.defineProperty(Schedule.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Schedule.prototype, "startDate", {
        get: function () {
            return this._startDate;
        },
        set: function (value) {
            this._startDate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Schedule.prototype, "endDate", {
        get: function () {
            return this._endDate;
        },
        set: function (value) {
            this._endDate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Schedule.prototype, "idAmbient", {
        get: function () {
            return this._idAmbient;
        },
        set: function (value) {
            this._idAmbient = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Schedule.prototype, "idDay", {
        get: function () {
            return this._idDay;
        },
        set: function (value) {
            this._idDay = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Schedule.prototype, "idCourseTrimester", {
        get: function () {
            return this._idCourseTrimester;
        },
        set: function (value) {
            this._idCourseTrimester = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Schedule.prototype, "idInstructor", {
        get: function () {
            return this._idInstructor;
        },
        set: function (value) {
            this._idInstructor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Schedule.prototype, "idModality", {
        get: function () {
            return this._idModality;
        },
        set: function (value) {
            this._idModality = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Schedule.prototype, "idCurrentQuarter", {
        get: function () {
            return this._idCurrentQuarter;
        },
        set: function (value) {
            this._idCurrentQuarter = value;
        },
        enumerable: true,
        configurable: true
    });
    return Schedule;
})();
exports.Schedule = Schedule;
