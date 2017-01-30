//YOU CAN COPY THIS SERVICE FROM Auth0.com
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
//looks at storage, finds jwt, decodes and look expiry
//if not expired returns true;
var angular2_jwt_1 = require('angular2-jwt');
var AuthService = (function () {
    function AuthService() {
        var _this = this;
        //client key, client domain, and empty object
        //for providing aditional config
        this.lock = new Auth0Lock('bcuv15WrWre2NAnNI4SmaAWvu4TWCAmO', 'filipbarak.eu.auth0.com', {
            auth: {
                params: {
                    scope: 'openid profile',
                    audience: 'https://api.barak.com'
                }
            }
        });
        this.userProfile = JSON.parse(localStorage.getItem('profile'));
        //subscribe and raising the event when user logs in
        this.lock.on('authenticated', function (authResult) {
            //setting the token to local storage
            localStorage.setItem('id_token', authResult.accessToken);
            _this.lock.getUserInfo(authResult.accessToken, function (error, profile) {
                if (error) {
                    console.log('error!', error);
                    return;
                }
                localStorage.setItem('profile', JSON.stringify(profile));
                _this.userProfile = profile;
            });
        });
    }
    AuthService.prototype.login = function () {
        this.lock.show();
    };
    //call this to see if user is logged in
    //or not and act upon it
    AuthService.prototype.isAuthenticated = function () {
        return angular2_jwt_1.tokenNotExpired();
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
        this.userProfile = null;
    };
    AuthService = __decorate([
        core_1.Injectable()
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map