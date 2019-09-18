var Instructor = (function () {
    function Instructor() {
    }
    Object.defineProperty(Instructor.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Instructor.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Instructor.prototype, "idClient", {
        get: function () {
            return this.idClient;
        },
        set: function (value) {
            this._idClient = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Instructor.prototype, "scheduleList", {
        get: function () {
            return this._scheduleList;
        },
        set: function (value) {
            this._scheduleList = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Instructor.prototype, "instructorAreaList", {
        get: function () {
            return this._instructorAreaList;
        },
        set: function (value) {
            this._instructorAreaList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Instructor.prototype, "instructorLinkingList", {
        get: function () {
            return this._instructorLinkingList;
        },
        set: function (value) {
            this._instructorLinkingList = value;
        },
        enumerable: true,
        configurable: true
    });
    return Instructor;
})();
exports.Instructor = Instructor;
