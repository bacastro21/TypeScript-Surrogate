var ProyectActivity = (function () {
    function ProyectActivity() {
    }
    Object.defineProperty(ProyectActivity.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProyectActivity.prototype, "numberActivity", {
        get: function () {
            return this._numberActivity;
        },
        set: function (value) {
            this._numberActivity = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProyectActivity.prototype, "descriptionActivity", {
        get: function () {
            return this._descriptionActivity;
        },
        set: function (value) {
            this._descriptionActivity = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProyectActivity.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProyectActivity.prototype, "idPhase", {
        get: function () {
            return this._idPhase;
        },
        set: function (value) {
            this._idPhase = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProyectActivity.prototype, "planingActivityList", {
        get: function () {
            return this._planingActivityList;
        },
        set: function (value) {
            this._planingActivityList = value;
        },
        enumerable: true,
        configurable: true
    });
    return ProyectActivity;
})();
exports.ProyectActivity = ProyectActivity;
