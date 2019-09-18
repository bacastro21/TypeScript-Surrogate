var Area = (function () {
    function Area() {
    }
    Object.defineProperty(Area.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Area.prototype, "nameArea", {
        get: function () {
            return this._nameArea;
        },
        set: function (value) {
            this._nameArea = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Area.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Area.prototype, "instructorArea", {
        get: function () {
            return this._instructorAreaList;
        },
        set: function (value) {
            this._instructorAreaList = value;
        },
        enumerable: true,
        configurable: true
    });
    return Area;
})();
exports.Area = Area;
