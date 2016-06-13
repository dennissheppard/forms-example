"use strict";
var UrlConstants = (function () {
    function UrlConstants() {
        this.localApi = "http://localdocker/v1";
        this.stagingApi = "https://api-staging.nexttiereducation.com/v1";
        this.prodApi = "https://api.nexttiereducation.com/v1";
    }
    UrlConstants.prototype.getBaseUrl = function () {
        //TODO: add in url or env logic. use staging for now
        return this.stagingApi;
    };
    return UrlConstants;
}());
exports.UrlConstants = UrlConstants;
//# sourceMappingURL=url-constants.service.js.map