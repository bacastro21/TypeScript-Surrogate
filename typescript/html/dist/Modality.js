var Modality = (function () {
    function Modality() {
    }
    Object.defineProperty(Modality.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modality.prototype, "modalityName", {
        get: function () {
            return this._modalityName;
        },
        set: function (value) {
            this._modalityName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modality.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modality.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Modality.prototype, "scheduleList", {
        get: function () {
            return this._scheduleList;
        },
        set: function (value) {
            this._scheduleList = value;
        },
        enumerable: true,
        configurable: true
    });
    return Modality;
})();
exports.Modality = Modality;
