var Course = (function () {
    function Course() {
    }
    Object.defineProperty(Course.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "courseNumber", {
        get: function () {
            return this._courseNumber;
        },
        set: function (value) {
            this._courseNumber = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "startDate", {
        get: function () {
            return this._startDate;
        },
        set: function (value) {
            this._startDate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "endDate", {
        get: function () {
            return this._endDate;
        },
        set: function (value) {
            this._endDate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "route", {
        get: function () {
            return this._route;
        },
        set: function (value) {
            this._route = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "idCourseState", {
        get: function () {
            return this._idCourseState;
        },
        set: function (value) {
            this._idCourseState = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "idProgram", {
        get: function () {
            return this._idProgram;
        },
        set: function (value) {
            this._idProgram = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "idWorkingDay", {
        get: function () {
            return this._idWorkingDay;
        },
        set: function (value) {
            this._idWorkingDay = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "courseTrimesterList", {
        get: function () {
            return this._courseTrimesterList;
        },
        set: function (value) {
            this._courseTrimesterList = value;
        },
        enumerable: true,
        configurable: true
    });
    return Course;
})();
exports.Course = Course;
