var CourseState = (function () {
    function CourseState() {
    }
    Object.defineProperty(CourseState.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CourseState.prototype, "nameState", {
        get: function () {
            return this._nameState;
        },
        set: function (value) {
            this._nameState = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CourseState.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CourseState.prototype, "courseList", {
        get: function () {
            return this._courseList;
        },
        set: function (value) {
            this._courseList = value;
        },
        enumerable: true,
        configurable: true
    });
    return CourseState;
})();
exports.CourseState = CourseState;
