"use strict";
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var url_constants_service_1 = require("./shared/services/url-constants.service");
exports.APP_PROVIDERS = [
    common_1.FORM_PROVIDERS,
    router_1.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    url_constants_service_1.UrlConstants
];
//# sourceMappingURL=app.providers.js.map