"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/Rx');
var api_service_1 = require('../shared/services/api.service');
var url_constants_service_1 = require('../shared/services/url-constants.service');
var user_1 = require('../shared/models/user');
var LoginService = (function () {
    function LoginService(apiService, urlConstants) {
        this.apiService = apiService;
        this.urlConstants = urlConstants;
        this._baseUrl = this.urlConstants.getBaseUrl();
    }
    LoginService.prototype.authenticate = function (userData) {
        var _this = this;
        return this.apiService.post(this._baseUrl + '/stakeholder/login/', userData)
            .map(function (res) {
            var userInfo = res.json();
            var token = userInfo.token;
            localStorage.setItem('authToken', token);
            _this.apiService.setAuthHeader();
        });
    };
    LoginService.prototype.getStakeholderDetail = function () {
        var _this = this;
        return this.apiService.get(this._baseUrl + '/stakeholder/')
            .map(function (res) {
            _this.user = new user_1.User(res.json());
            return _this.user;
        });
    };
    LoginService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [api_service_1.ApiService, url_constants_service_1.UrlConstants])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map