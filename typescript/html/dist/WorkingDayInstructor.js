var WorkingDayInstructor = (function () {
    function WorkingDayInstructor() {
    }
    Object.defineProperty(WorkingDayInstructor.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkingDayInstructor.prototype, "nameDay", {
        get: function () {
            return this._nameDay;
        },
        set: function (value) {
            this._nameDay = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkingDayInstructor.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkingDayInstructor.prototype, "scheduleAvailabilityList", {
        get: function () {
            return this._scheduleAvailabilityList;
        },
        set: function (value) {
            this._scheduleAvailabilityList = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkingDayInstructor.prototype, "timeStudyList", {
        get: function () {
            return this._timeStudyList;
        },
        set: function (value) {
            this._timeStudyList = value;
        },
        enumerable: true,
        configurable: true
    });
    return WorkingDayInstructor;
})();
exports.WorkingDayInstructor = WorkingDayInstructor;
