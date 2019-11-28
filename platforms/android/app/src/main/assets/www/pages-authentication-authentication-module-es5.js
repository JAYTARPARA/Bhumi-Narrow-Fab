(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-authentication-authentication-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/authentication/authentication.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/authentication/authentication.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-img class=\"animated fadeInDown slow\" src=\"./assets/images/lock.jpg\" style=\"height: 250px; width: 250px;margin: 0 auto;\"></ion-img>\n  <div  class=\"ion-padding animated bounceInLeft delay-1s\"> \n      <h1>Welcome!!</h1>\n      <h6>This application is for private use only. Please enter passcode to use the application.</h6>\n      <ion-input class=\"mobilenumber\" type=\"number\" placeholder=\"Enter passcode\" [(ngModel)]=\"passcode\"></ion-input>\n      <ion-button class=\"ion-padding loginbtn\" color='dark' expand=\"block\" fill=\"outline\" (click)=\"verifyMe()\">UNLOCK IT</ion-button>\n    </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/authentication/authentication.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/authentication/authentication.module.ts ***!
  \***************************************************************/
/*! exports provided: AuthenticationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationPageModule", function() { return AuthenticationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _authentication_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentication.page */ "./src/app/pages/authentication/authentication.page.ts");







var routes = [
    {
        path: '',
        component: _authentication_page__WEBPACK_IMPORTED_MODULE_6__["AuthenticationPage"]
    }
];
var AuthenticationPageModule = /** @class */ (function () {
    function AuthenticationPageModule() {
    }
    AuthenticationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_authentication_page__WEBPACK_IMPORTED_MODULE_6__["AuthenticationPage"]]
        })
    ], AuthenticationPageModule);
    return AuthenticationPageModule;
}());



/***/ }),

/***/ "./src/app/pages/authentication/authentication.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/authentication/authentication.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mobilenumber {\n  margin: 15px 0 15px 0;\n  padding-left: 10px;\n  --background: #ffffff;\n  border: 1px solid gray;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aGVudGljYXRpb24vQzpcXFByb2plY3RzXFxNeSBJb25pYyBQcm9qZWN0c1xcYmh1bWluYXJyb3dmYWIvc3JjXFxhcHBcXHBhZ2VzXFxhdXRoZW50aWNhdGlvblxcYXV0aGVudGljYXRpb24ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdXRoZW50aWNhdGlvbi9hdXRoZW50aWNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9iaWxlbnVtYmVyIHtcclxuICAgIG1hcmdpbjogMTVweCAwIDE1cHggMDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn0iLCIubW9iaWxlbnVtYmVyIHtcbiAgbWFyZ2luOiAxNXB4IDAgMTVweCAwO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/authentication/authentication.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/authentication/authentication.page.ts ***!
  \*************************************************************/
/*! exports provided: AuthenticationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationPage", function() { return AuthenticationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var AuthenticationPage = /** @class */ (function () {
    function AuthenticationPage(auth, storage, router, platform) {
        this.auth = auth;
        this.storage = storage;
        this.router = router;
        this.platform = platform;
        this.passcode = '';
        this.platform.backButton.subscribeWithPriority(999999, function () {
            document.addEventListener('backbutton', function (event) {
                event.preventDefault();
                event.stopPropagation();
            }, false);
        });
    }
    AuthenticationPage.prototype.ngOnInit = function () {
    };
    AuthenticationPage.prototype.verifyMe = function () {
        console.log('passcode: ' + this.passcode);
        if (this.passcode == '') {
            this.auth.presentToast('Please enter passcode', false, 'bottom', 1500, 'danger');
        }
        else if (this.passcode == '123456') {
            this.storage.set('authentication', 'done');
            this.auth.presentToast('You can access application.', false, 'bottom', 1500, 'success');
            this.router.navigate(['/home']);
        }
        else {
            this.auth.presentToast('This passcode is wrong', false, 'bottom', 1500, 'danger');
            this.storage.set('authentication', 'wrong');
        }
    };
    AuthenticationPage.ctorParameters = function () { return [
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] }
    ]; };
    AuthenticationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-authentication',
            template: __webpack_require__(/*! raw-loader!./authentication.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/authentication/authentication.page.html"),
            styles: [__webpack_require__(/*! ./authentication.page.scss */ "./src/app/pages/authentication/authentication.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]])
    ], AuthenticationPage);
    return AuthenticationPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-authentication-authentication-module-es5.js.map