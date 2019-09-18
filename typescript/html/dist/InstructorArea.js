var InstructorArea = (function () {
    function InstructorArea() {
    }
    Object.defineProperty(InstructorArea.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InstructorArea.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InstructorArea.prototype, "idArea", {
        get: function () {
            return this._idArea;
        },
        set: function (value) {
            this._idArea = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InstructorArea.prototype, "idInstructor", {
        get: function () {
            return this._idInstructor;
        },
        set: function (value) {
            this._idInstructor = value;
        },
        enumerable: true,
        configurable: true
    });
    return InstructorArea;
})();
exports.InstructorArea = InstructorArea;
