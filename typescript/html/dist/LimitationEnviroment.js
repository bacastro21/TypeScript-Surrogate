var LimitationEnviroment = (function () {
    function LimitationEnviroment() {
    }
    Object.defineProperty(LimitationEnviroment.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LimitationEnviroment.prototype, "learningResultList", {
        get: function () {
            return this._learningResultList;
        },
        set: function (value) {
            this._learningResultList = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LimitationEnviroment.prototype, "ambientList", {
        get: function () {
            return this._ambientList;
        },
        set: function (value) {
            this._ambientList = value;
        },
        enumerable: true,
        configurable: true
    });
    return LimitationEnviroment;
})();
exports.LimitationEnviroment = LimitationEnviroment;
