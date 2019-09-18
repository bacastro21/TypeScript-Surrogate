var AvailabilityCompetition = (function () {
    function AvailabilityCompetition() {
    }
    Object.defineProperty(AvailabilityCompetition.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AvailabilityCompetition.prototype, "idCompetition", {
        get: function () {
            return this._idCompetition;
        },
        set: function (value) {
            this._idCompetition = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AvailabilityCompetition.prototype, "idInstructorLimking", {
        get: function () {
            return this._idInstructorLimking;
        },
        set: function (value) {
            this._idInstructorLimking = value;
        },
        enumerable: true,
        configurable: true
    });
    return AvailabilityCompetition;
})();
exports.AvailabilityCompetition = AvailabilityCompetition;
