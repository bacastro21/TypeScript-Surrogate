var ResultSeen = (function () {
    function ResultSeen() {
    }
    Object.defineProperty(ResultSeen.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResultSeen.prototype, "idCourseTrimester", {
        get: function () {
            return this._idCourseTrimester;
        },
        set: function (value) {
            this._idCourseTrimester = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResultSeen.prototype, "idLearningResult", {
        get: function () {
            return this._idLearningResult;
        },
        set: function (value) {
            this._idLearningResult = value;
        },
        enumerable: true,
        configurable: true
    });
    return ResultSeen;
})();
exports.ResultSeen = ResultSeen;
