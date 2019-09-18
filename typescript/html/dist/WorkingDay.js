var WorkingDay = (function () {
    function WorkingDay() {
    }
    Object.defineProperty(WorkingDay.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkingDay.prototype, "initialWorkingDay", {
        get: function () {
            return this._initialWorkingDay;
        },
        set: function (value) {
            this._initialWorkingDay = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkingDay.prototype, "nameWorkingDay", {
        get: function () {
            return this._nameWorkingDay;
        },
        set: function (value) {
            this._nameWorkingDay = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkingDay.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkingDay.prototype, "imagenUrl", {
        get: function () {
            return this._imagenUrl;
        },
        set: function (value) {
            this._imagenUrl = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkingDay.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkingDay.prototype, "trimesterList", {
        get: function () {
            return this._trimesterList;
        },
        set: function (value) {
            this._trimesterList = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WorkingDay.prototype, "courseList", {
        get: function () {
            return this._courseList;
        },
        set: function (value) {
            this._courseList = value;
        },
        enumerable: true,
        configurable: true
    });
    return WorkingDay;
})();
exports.WorkingDay = WorkingDay;
