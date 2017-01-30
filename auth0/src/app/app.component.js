"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent(auth, authHttp) {
        this.auth = auth;
        this.authHttp = authHttp;
        this.title = 'app works!';
    }
    AppComponent.prototype.showProfile = function () {
        console.log(this.auth.userProfile);
    };
    AppComponent.prototype.updateProfile = function () {
        var url = 'https://' + 'filipbarak.eu.auth0.com' + '/api/v2/users/' + this.auth.userProfile.user_id;
        var data = {
            user_metadata: {
                location: 'Ohrid'
            }
        };
        this.authHttp.patch(url, data)
            .subscribe(function (res) {
            console.log(res.json());
        });
    };
    AppComponent.prototype.callApi = function () {
        this.authHttp.get('http://localhost:8080/authorize')
            .subscribe(function (res) { return console.log(res); });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map