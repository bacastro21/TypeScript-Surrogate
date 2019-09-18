var Competition = (function () {
    function Competition() {
    }
    Object.defineProperty(Competition.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Competition.prototype, "competitionCode", {
        get: function () {
            return this._competitionCode;
        },
        set: function (value) {
            this._competitionCode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Competition.prototype, "denomination", {
        get: function () {
            return this._denomination;
        },
        set: function (value) {
            this._denomination = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Competition.prototype, "idProgram", {
        get: function () {
            return this._idProgram;
        },
        set: function (value) {
            this._idProgram = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Competition.prototype, "learningResultList", {
        get: function () {
            return this._learningResultList;
        },
        set: function (value) {
            this._learningResultList = value;
        },
        enumerable: true,
        configurable: true
    });
    return Competition;
})();
exports.Competition = Competition;
