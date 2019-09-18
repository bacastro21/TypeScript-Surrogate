var PlaninigActivity = (function () {
    function PlaninigActivity() {
    }
    Object.defineProperty(PlaninigActivity.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaninigActivity.prototype, "idTrimesterPlaning", {
        get: function () {
            return this._idTrimesterPlaning;
        },
        set: function (value) {
            this._idTrimesterPlaning = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlaninigActivity.prototype, "idProyectActivity", {
        get: function () {
            return this._idProyectActivity;
        },
        set: function (value) {
            this._idProyectActivity = value;
        },
        enumerable: true,
        configurable: true
    });
    return PlaninigActivity;
})();
exports.PlaninigActivity = PlaninigActivity;
