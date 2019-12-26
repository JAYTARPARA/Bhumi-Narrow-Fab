(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border class=\"animated fadeInDown\">\n  <ion-toolbar color='primary' mode=\"ios\">\n      <!-- <ion-buttons slot=\"start\"> -->\n        <!-- <ion-back-button defaultHref=\"home\"></ion-back-button> -->\n      <!-- </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div id=\"recaptcha-container\"></div>\n  <ion-img class='loginimage animated bounceInLeft slow' src='./assets/images/login_page_user.png'></ion-img>\n  <div class=\"animated bounceInRight slow\">\n    <h1>Hello there!</h1>\n    <h6>Signin to continue with your mobile number</h6>\n    <ion-label color=\"danger\" mode=\"ios\" position=\"stacked\"><h6>PLEASE PROVIDE YOUR WHATSAPP NUMBER</h6></ion-label>\n    <ion-input class=\"mobilenumber\" type=\"tel\" prefix=\"(+91) \" mask=\"00000-00000\" placeholder=\"(+91) 12345-67890\" [(ngModel)]=\"phone\"></ion-input>\n    <ion-label class=\"ion-text-wrap\" color=\"medium\" mode=\"ios\">\n      A 6 digits OTP will be sent via SMS to verify your mobile number!\n    </ion-label>\n    <!-- [disabled]=\"continue\" -->\n    <ion-button color='dark' *ngIf=\"!showError\" class=\"continuebtn\" expand=\"block\" fill=\"outline\" (click)=\"sendotp(this.phone)\">CONTINUE</ion-button>\n    <ion-button *ngIf=\"showError\" class=\"ion-padding loginbtn\" color='dark' expand=\"block\" fill=\"outline\" style=\"pointer-events: none;\">Loading...</ion-button>\n  </div>\n  <br/>\n  <div *ngIf=\"showOTPInput\" class=\"animated bounceInRight slow\">\n    <ion-label color=\"dark\" position=\"stacked\">OTP</ion-label>\n    <div style=\"border-bottom: 1px solid;\">\n      <ion-input class=\"otpinput\" type=\"tel\" mask=\"000000\" name=\"OTP\" [(ngModel)]=\"OTP\"></ion-input>\n      <!-- <ion-input class=\"otpinput\" type=\"tel\" name=\"OTP\" [(ngModel)]=\"OTP\" maxlength=\"6\"></ion-input> -->\n    </div>\n    <ion-row>\n      <ion-col>\n        <ion-text class=\"small\">{{ OTPmessage }}</ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-button color='dark' class=\"continuebtn\" #OTPInput expand=\"block\" fill=\"outline\" (click)=\"confirmUser()\" [disabled]=\"submitted\">VERIFY</ion-button>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var ngx_mask_ionic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mask-ionic */ "./node_modules/ngx-mask-ionic/fesm2015/ngx-mask-ionic.js");








const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ngx_mask_ionic__WEBPACK_IMPORTED_MODULE_7__["NgxMaskIonicModule"],
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n  color: black;\n}\n\n.loginimage {\n  width: 80px;\n  height: 80px;\n  margin-top: 10%;\n}\n\n.otpinput, .mobilenumber {\n  margin: 15px 0 15px 0;\n  padding-left: 10px;\n  --background: #ffffff;\n  border: 1px solid gray;\n  border-radius: 5px;\n}\n\n.continuebtn {\n  margin-top: 15px;\n  height: 40px;\n}\n\n.otpinput {\n  letter-spacing: 38px;\n  -webkit-padding-end: 0;\n  --padding-end: 0;\n  font-size: 30px;\n  border: none;\n  background: white;\n}\n\n.OTP-border ion-col div {\n  border-bottom: 1px solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFByb2plY3RzXFxNeSBJb25pYyBQcm9qZWN0c1xcYmh1bWluYXJyb3dmYWIvc3JjXFxhcHBcXHBhZ2VzXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLHdDQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUNBSjs7QURHQTtFQUNJLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURLTTtFQUNFLHdCQUFBO0FDRlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmxvZ2luaW1hZ2Uge1xyXG4gICAgLy8gbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDgwcHg7IFxyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcblxyXG4ub3RwaW5wdXQsIC5tb2JpbGVudW1iZXIge1xyXG4gICAgbWFyZ2luOiAxNXB4IDAgMTVweCAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmNvbnRpbnVlYnRuIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5vdHBpbnB1dCB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMzhweDtcclxuICAgIC13ZWJraXQtcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5PVFAtYm9yZGVyIHtcclxuICAgIGlvbi1jb2wge1xyXG4gICAgICBkaXYge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5sb2dpbmltYWdlIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG4ub3RwaW5wdXQsIC5tb2JpbGVudW1iZXIge1xuICBtYXJnaW46IDE1cHggMCAxNXB4IDA7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5jb250aW51ZWJ0biB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLm90cGlucHV0IHtcbiAgbGV0dGVyLXNwYWNpbmc6IDM4cHg7XG4gIC13ZWJraXQtcGFkZGluZy1lbmQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLk9UUC1ib3JkZXIgaW9uLWNvbCBkaXYge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../services/authentication.service */ "./src/app/services/authentication.service.ts");


// tslint:disable-next-line:max-line-length







let LoginPage = class LoginPage {
    constructor(navCtrl, alertCtrl, loadingControllerLogin, router, fireAuth, toastCtrl, http, nativeHttp, plt, auth, menu) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingControllerLogin = loadingControllerLogin;
        this.router = router;
        this.fireAuth = fireAuth;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.nativeHttp = nativeHttp;
        this.plt = plt;
        this.auth = auth;
        this.menu = menu;
        this.code = '';
        this.OTP = '';
        this.showOTPInput = false;
        // showOTPInput = true;
        this.OTPmessage = '';
        this.hideOTP = true;
        this.submitted = false;
        this.continue = false;
        this.showError = false;
    }
    ngOnInit() {
        this.menu.enable(false);
        this.fireAuth.auth.onAuthStateChanged(user => {
            if (user) {
                this.showError = true;
                const chkadmin = user.phoneNumber.replace('+91', '');
                let redirectUrl = '';
                if (chkadmin == '8888888888') {
                    redirectUrl = '/all-materials';
                }
                else {
                    redirectUrl = '/material/mobile/' + chkadmin;
                }
                this.navCtrl.navigateForward(redirectUrl);
                // setTimeout(() => {
                //   this.navCtrl.navigateForward(redirectUrl);
                // }, 600);
            }
        });
        this.recaptchaVerifier = new firebase__WEBPACK_IMPORTED_MODULE_4__["auth"].RecaptchaVerifier('recaptcha-container', { size: 'invisible' });
    }
    presentToast(message, showbutton, position, duration) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: message,
                showCloseButton: showbutton,
                position: position,
                duration: duration,
                color: 'medium',
                mode: 'ios'
            });
            toast.present();
        });
    }
    sendotp(phone) {
        if (phone == undefined || phone == '') {
            this.auth.presentToast('Please enter mobile number first', false, 'bottom', 1500, 'danger');
        }
        else {
            this.showLoader();
            this.continue = true;
            let phoneNumber = phone.replace('(+91)', '+91');
            phoneNumber = phoneNumber.replace(' ', '');
            phoneNumber = phoneNumber.replace('-', '');
            const appVerifier = this.recaptchaVerifier;
            const chkPhoneNumber = phoneNumber.replace('+91', '');
            this.auth.checkUserStatus(chkPhoneNumber).then(response => {
                console.log(response);
                if (response['success'] == 1 && response['status'] == 0) {
                    setTimeout(() => {
                        this.hideLoader();
                    }, 1000);
                    this.auth.presentToast('You are blocked by admin', false, 'bottom', 1500, 'danger');
                    this.router.navigate(['/home']);
                }
                else {
                    firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().signInWithPhoneNumber(phoneNumber, appVerifier).then(confirmationResult => {
                        this.hideLoader();
                        // Enable this for web test
                        // this.showAlertForCode(confirmationResult, '');
                        this.showOTPInput = true;
                        this.hideOTP = false;
                        this.OTPmessage = 'An OTP is sent to your number. You should receive it in 15s';
                        this.presentToast('Waiting for OTP', false, 'middle', 1000);
                        // Enable this for app test
                        this.confirmationResultOTP = confirmationResult;
                        // this.start();
                    }).catch((error) => {
                        this.hideLoader();
                        this.showAlertForError(error.message);
                    });
                }
            });
        }
    }
    showAlertForError(error) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const errorAlert = yield this.alertCtrl.create({
                header: 'Error!!!',
                message: error,
                mode: 'ios',
                buttons: ['OK']
            });
            yield errorAlert.present();
        });
    }
    confirmUser() {
        console.log(this.phone);
        if (this.OTP == undefined || this.OTP == '') {
            this.auth.presentToast('Please enter OTP first', false, 'bottom', 1500, 'danger');
        }
        else {
            this.submitted = true;
            const confirmationResult = this.confirmationResultOTP;
            const receivedOTP = this.OTP;
            confirmationResult
                .confirm(receivedOTP)
                .then((result) => {
                // User signed in successfully.
                console.log(result.user);
                firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().setPersistence(firebase__WEBPACK_IMPORTED_MODULE_4__["auth"].Auth.Persistence.LOCAL);
                // Redirect to the profile with details
                this.fireAuth.auth.onAuthStateChanged(user => {
                    if (user) {
                        // Save user to database if not added
                        const mobile = user.phoneNumber.replace('+91', '');
                        if (mobile == '8888888888') {
                            this.navCtrl.navigateForward('/all-materials');
                        }
                        else {
                            this.auth.addUser(mobile).then(data => {
                                console.log(data);
                                if (data['success'] == 0) {
                                    this.auth.createNewUserWithMobile(mobile).then(response => {
                                        console.log(response);
                                        if (response['success'] == 1) {
                                            this.navCtrl.navigateForward('/profile/mobile/' + mobile);
                                        }
                                        else if (response['success'] == 2) {
                                            this.submitted = false;
                                            this.auth.presentToast(response['message'], false, 'bottom', 2500, 'danger');
                                        }
                                        else {
                                            this.submitted = false;
                                            this.auth.presentToast(response['message'], false, 'bottom', 2500, 'danger');
                                        }
                                    });
                                }
                                else if (data['success'] == 2) {
                                    this.submitted = false;
                                    this.auth.presentToast(data['message'], false, 'bottom', 2500, 'danger');
                                }
                                else if (data['success'] == 1) {
                                    this.navCtrl.navigateForward('/material/mobile/' + mobile);
                                }
                            });
                        }
                    }
                    else {
                        this.router.navigate(['/home']);
                    }
                });
            })
                .catch((error) => {
                // User couldn't sign in (bad verification code?)
                this.submitted = false;
                this.showAlertForError(error.message);
            });
        }
    }
    showLoader() {
        this.loadingControllerLogin.create({
            message: 'Sending OTP',
            mode: 'ios'
        }).then((res) => {
            res.present();
            res.onDidDismiss().then((dis) => { });
        });
        this.hideLoader();
    }
    hideLoader() {
        this.loadingControllerLogin.dismiss();
    }
    start() {
        SMSReceive.startWatch(() => {
            document.addEventListener('onSMSArrive', (e) => {
                const IncomingSMS = e.data;
                this.processSMS(IncomingSMS);
            });
        }, () => { console.log('watch start failed'); });
    }
    stop() {
        SMSReceive.stopWatch(() => { console.log('watch stopped'); }, () => { console.log('watch stop failed'); });
    }
    processSMS(data) {
        // Check SMS for a specific string sequence to identify it is you SMS
        // Design your SMS in a way so you can identify the OTP quickly i.e. first 6 letters
        // In this case, I am keeping the first 6 letters as OTP
        const message = data.body;
        if (message && message.indexOf('localhost') != -1) {
            this.OTP = data.body.slice(0, 6);
            console.log(this.OTP);
            this.presentToast('OTP is received', false, 'middle', 1000);
            this.OTPmessage = ' ';
            // $('.continuebtn').click();
            this.stop();
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"],
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__["HTTP"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map