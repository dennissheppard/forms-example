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
var login_service_1 = require('./login.service');
var common_1 = require("@angular/common");
var email_taken_validator_1 = require('../shared/form-validators/email-taken.validator');
var LoginComponent = (function () {
    ///////////////////////
    //private members
    function LoginComponent(loginService, formBuilder) {
        this.loginService = loginService;
        this.formBuilder = formBuilder;
        this.loginForm = this.formBuilder.group({
            'email': ['', common_1.Validators.required, email_taken_validator_1.emailTakenValidator.emailTaken],
            'password': ['', common_1.Validators.required]
        });
    }
    //////////////////////////
    //Init function
    LoginComponent.prototype.ngOnInit = function () {
    };
    //////////////////////////////////
    //View/public functions
    LoginComponent.prototype.signIn = function (credentials) {
        var _this = this;
        console.log(credentials);
        this.loginService.authenticate(credentials)
            .subscribe(function () {
            _this.loginService.getStakeholderDetail()
                .subscribe(function (response) {
            });
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: 'src/app/login/login.component.html',
            directives: [],
            providers: [login_service_1.LoginService]
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, common_1.FormBuilder])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map