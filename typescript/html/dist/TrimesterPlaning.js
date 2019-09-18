var TrimesterPlaning = (function () {
    function TrimesterPlaning() {
    }
    Object.defineProperty(TrimesterPlaning.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TrimesterPlaning.prototype, "idLearningResult", {
        get: function () {
            return this._idLearningResult;
        },
        set: function (value) {
            this._idLearningResult = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TrimesterPlaning.prototype, "idTrimester", {
        get: function () {
            return this._idTrimester;
        },
        set: function (value) {
            this._idTrimester = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TrimesterPlaning.prototype, "idPlaning", {
        get: function () {
            return this._idPlaning;
        },
        set: function (value) {
            this._idPlaning = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TrimesterPlaning.prototype, "planingActivityList", {
        get: function () {
            return this._planingActivityList;
        },
        set: function (value) {
            this._planingActivityList = value;
        },
        enumerable: true,
        configurable: true
    });
    return TrimesterPlaning;
})();
exports.TrimesterPlaning = TrimesterPlaning;
