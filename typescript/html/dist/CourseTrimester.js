var CourseTrimester = (function () {
    function CourseTrimester() {
    }
    Object.defineProperty(CourseTrimester.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CourseTrimester.prototype, "idCourse", {
        get: function () {
            return this._idCourse;
        },
        set: function (value) {
            this._idCourse = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CourseTrimester.prototype, "idTrimester", {
        get: function () {
            return this._idTrimester;
        },
        set: function (value) {
            this._idTrimester = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CourseTrimester.prototype, "resultSeenList", {
        get: function () {
            return this._resultSeenList;
        },
        set: function (value) {
            this._resultSeenList = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CourseTrimester.prototype, "scheduleList", {
        get: function () {
            return this._scheduleList;
        },
        set: function (value) {
            this._scheduleList = value;
        },
        enumerable: true,
        configurable: true
    });
    return CourseTrimester;
})();
exports.CourseTrimester = CourseTrimester;
