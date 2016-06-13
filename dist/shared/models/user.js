"use strict";
var User = (function () {
    function User(params) {
        this.id = params.id;
        this.firstName = params.first_name;
        this.lastName = params.last_name;
        this.email = params.email;
        this.phase = params.phase;
        this.highschool = params.highschool;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map