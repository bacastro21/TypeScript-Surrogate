var ScheduleAvailability = (function () {
    function ScheduleAvailability() {
    }
    Object.defineProperty(ScheduleAvailability.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScheduleAvailability.prototype, "idInstructorLinking", {
        get: function () {
            return this._idInstructorLinking;
        },
        set: function (value) {
            this._idInstructorLinking = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScheduleAvailability.prototype, "idWorkingDayInstructor", {
        get: function () {
            return this._idWorkingDayInstructor;
        },
        set: function (value) {
            this._idWorkingDayInstructor = value;
        },
        enumerable: true,
        configurable: true
    });
    return ScheduleAvailability;
})();
exports.ScheduleAvailability = ScheduleAvailability;
