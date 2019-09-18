var Users = (function () {
    function Users() {
    }
    Object.defineProperty(Users.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Users.prototype, "login", {
        get: function () {
            return this._login;
        },
        set: function (value) {
            this._login = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Users.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Users.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Users.prototype, "activated", {
        get: function () {
            return this._activated;
        },
        set: function (value) {
            this._activated = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Users.prototype, "langKey", {
        get: function () {
            return this._langKey;
        },
        set: function (value) {
            this._langKey = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Users.prototype, "imagenUrl", {
        get: function () {
            return this._imagenUrl;
        },
        set: function (value) {
            this._imagenUrl = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Users.prototype, "activationKey", {
        get: function () {
            return this._activationKey;
        },
        set: function (value) {
            this._activationKey = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Users.prototype, "resetKey", {
        get: function () {
            return this._resetKey;
        },
        set: function (value) {
            this._resetKey = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Users.prototype, "resetDate", {
        get: function () {
            return this._resetDate;
        },
        set: function (value) {
            this._resetDate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Users.prototype, "rolList", {
        get: function () {
            return this._rolList;
        },
        set: function (value) {
            this._rolList = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Users.prototype, "idClient", {
        get: function () {
            return this._idClient;
        },
        set: function (value) {
            this._idClient = value;
        },
        enumerable: true,
        configurable: true
    });
    return Users;
})();
exports.Users = Users;
