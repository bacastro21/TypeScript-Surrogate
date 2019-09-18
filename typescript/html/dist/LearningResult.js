var LearningResult = (function () {
    function LearningResult() {
    }
    Object.defineProperty(LearningResult.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LearningResult.prototype, "resultCode", {
        get: function () {
            return this._resultCode;
        },
        set: function (value) {
            this._resultCode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LearningResult.prototype, "denomination", {
        get: function () {
            return this._denomination;
        },
        set: function (value) {
            this._denomination = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LearningResult.prototype, "limitationEnviromentList", {
        get: function () {
            return this._limitationEnviromentList;
        },
        set: function (value) {
            this._limitationEnviromentList = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LearningResult.prototype, "idCompetition", {
        get: function () {
            return this._idCompetition;
        },
        set: function (value) {
            this._idCompetition = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LearningResult.prototype, "trimesterPlaningList", {
        get: function () {
            return this._trimesterPlaningList;
        },
        set: function (value) {
            this._trimesterPlaningList = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LearningResult.prototype, "resultSeenList", {
        get: function () {
            return this._resultSeenList;
        },
        set: function (value) {
            this._resultSeenList = value;
        },
        enumerable: true,
        configurable: true
    });
    return LearningResult;
})();
exports.LearningResult = LearningResult;
