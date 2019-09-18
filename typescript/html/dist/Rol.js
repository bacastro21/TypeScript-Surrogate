var Rol = (function () {
    function Rol() {
    }
    Object.defineProperty(Rol.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rol.prototype, "usersList", {
        get: function () {
            return this._usersList;
        },
        set: function (value) {
            this._usersList = value;
        },
        enumerable: true,
        configurable: true
    });
    return Rol;
})();
exports.Rol = Rol;
