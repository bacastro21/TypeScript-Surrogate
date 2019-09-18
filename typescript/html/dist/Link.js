var Link = (function () {
    function Link() {
    }
    Object.defineProperty(Link.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Link.prototype, "linkType", {
        get: function () {
            return this._linkType;
        },
        set: function (value) {
            this._linkType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Link.prototype, "hours", {
        get: function () {
            return this._hours;
        },
        set: function (value) {
            this._hours = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Link.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (value) {
            this._state = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Link.prototype, "instructorLinkingList", {
        get: function () {
            return this._instructorLinkingList;
        },
        set: function (value) {
            this._instructorLinkingList = value;
        },
        enumerable: true,
        configurable: true
    });
    return Link;
})();
exports.Link = Link;
