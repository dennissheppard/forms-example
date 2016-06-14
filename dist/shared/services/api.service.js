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
var http_1 = require('@angular/http');
var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.headers = this.setAuthHeader();
        this.requestOptions = new http_1.RequestOptions({ headers: this.headers });
    }
    ApiService.prototype.get = function (url) {
        return this.http.get(url, this.requestOptions);
    };
    ApiService.prototype.put = function (url, data) {
        return this.http.put(url, JSON.stringify(data), this.requestOptions);
    };
    ApiService.prototype.post = function (url, data) {
        return this.http.post(url, JSON.stringify(data), this.requestOptions);
    };
    ApiService.prototype.remove = function (url) {
        return this.http.delete(url, this.getHeaders());
    };
    ApiService.prototype.patch = function (url, data) {
        return this.http.post(url, JSON.stringify(data), this.requestOptions);
    };
    ApiService.prototype.setAuthHeader = function () {
        if (localStorage.getItem('authToken')) {
            this.headers = new http_1.Headers({
                'AUTHORIZATION': 'Token 09195ed25cb1fed8d305c27ca7525e958db0dbfa',
                'Content-Type': 'application/json'
            });
            this.requestOptions = new http_1.RequestOptions({ headers: this.headers });
        }
    };
    ApiService.prototype.getHeaders = function () {
        return new http_1.Headers({
            'Content-Type': 'application/json'
        });
    };
    ApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map