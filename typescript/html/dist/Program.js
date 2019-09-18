var Program = (function () {
    function Program() {
    }
    Object.defineProperty(Program.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Program.prototype, "code", {
        get: function () {
            return this._code;
        },
        set: function (value) {
            this._code = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Program.prototype, "version", {
        get: function () {
            return this._version;
        },
        set: function (value) {
            this._version = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Program.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Program.prototype, "acronym", {
        get: function () {
            return this._acronym;
        },
        set: function (value) {
            this._acronym = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Program.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Program.prototype, "competitionList", {
        get: function () {
            return this._competitionList;
        },
        set: function (value) {
            this._competitionList = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Program.prototype, "idFormationLevel", {
        get: function () {
            return this._idFormationLevel;
        },
        set: function (value) {
            this._idFormationLevel = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Program.prototype, "courseList", {
        get: function () {
            return this._courseList;
        },
        set: function (value) {
            this._courseList = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Program.prototype, "proyectList", {
        get: function () {
            return this._proyectList;
        },
        set: function (value) {
            this._proyectList = value;
        },
        enumerable: true,
        configurable: true
    });
    return Program;
})();
exports.Program = Program;
