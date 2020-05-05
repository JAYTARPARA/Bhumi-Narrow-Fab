(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border class=\"animated fadeInDown\">\n  <ion-toolbar color='dark' mode=\"ios\">\n    <ion-title>My Profile</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"ionViewWillEnter(1)\"><ion-icon name=\"refresh\"></ion-icon></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n  \n<ion-content class=\"ion-padding profilepage animated bounceInLeft slow\">\n\n  <!-- Profile picture -->\n  <!-- <div class=\"ion-text-center\">\n    <img [src]=\"profileimg\" class=\"edit-avatar\" alt=\"\">\n    <p class=\"change-text\">Change Photo</p>\n  </div> -->\n  <!-- Profile picture -->\n\n  <!-- Form -->\n  <form (ngSubmit)=\"saveProfile()\" #saveForm=\"ngForm\" >\n    <div class=\"ion-margin-top ion-padding-top\">\n      <h4 class=\"info-text no-margin no-padding\"><b>Basic Information</b></h4>\n      <hr class=\"custom-hr\" color=\"gray\">\n    </div>\n\n    <ion-item>\n      <ion-label> \n        <ion-icon name=\"person\" color=\"medium\"></ion-icon>\n      </ion-label>\n      <ion-input type=\"text\" mode=\"md\" [(ngModel)]=\"name\" clearInput name=\"name\" placeholder=\"Name*\"></ion-input>\n    </ion-item>\n    \n    <ion-input type=\"hidden\" [(ngModel)]=\"id\" name=\"id\"></ion-input>\n\n    <!-- Private information form -->\n    <div class=\"ion-margin-top ion-padding-top\">\n      <h4 class=\"info-text no-margin no-padding\"><b>Private Information</b></h4>\n      <hr class=\"custom-hr\" color=\"gray\">\n    </div>\n    \n    <ion-item>\n      <ion-label>\n        <ion-icon name=\"globe\" color=\"medium\"></ion-icon>\n      </ion-label>\n      <ion-textarea autoGrow=true placeholder=\"Address\" mode=\"md\" clearInput name=\"address\" [(ngModel)]=\"address\" placeholder=\"Address*\"></ion-textarea>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label> \n        <ion-icon name=\"phone-portrait\" color=\"medium\"></ion-icon>\n      </ion-label>\n      <ion-input type=\"tel\" name=\"phone\" mode=\"md\" mask=\"00000 00000\" [(ngModel)]=\"phone\" placeholder=\"Phone\" readonly style=\"pointer-events: none;\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label> \n        <ion-icon name=\"clipboard\" color=\"medium\"></ion-icon>\n      </ion-label>\n      <ion-input type=\"text\" clearInput mode=\"md\" name=\"gst\" maxLength=\"15\" [(ngModel)]=\"gst\" placeholder=\"GSTIN*\" style=\"text-transform: uppercase;\"></ion-input>\n    </ion-item>\n    <!-- Private information form -->\n    <ion-row style=\"margin-top: 25px;\">\n      <ion-label color=\"danger\" mode=\"ios\" position=\"stacked\">\n        <h6>*YOU NEED TO SUBMIT ALL ABOVE DETAILS BEFORE ORDER</h6>\n      </ion-label>\n    </ion-row>\n    \n    <ion-row>\n      <ion-col class=\"signup-col\">\n        <ion-button color='dark' class='savebtn' expand=\"block\" fill=\"outline\" type=\"submit\">SAVE PROFILE</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n  <!-- Form -->\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");







var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profilepage .edit-avatar {\n  border-radius: 100%;\n  width: 25%;\n}\n.profilepage .change-text {\n  font-size: 13px;\n  color: #659CF2;\n}\n.profilepage .info-text {\n  font-family: Arial, Helvetica, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9DOlxcUHJvamVjdHNcXE15IElvbmljIFByb2plY3RzXFxiaHVtaW5hcnJvd2ZhYi9zcmNcXGFwcFxccGFnZXNcXHByb2ZpbGVcXHByb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksbUJBQUE7RUFDQSxVQUFBO0FDQVI7QURHSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDRFI7QURJSTtFQUNJLHlDQUFBO0FDRlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGVwYWdlIHtcclxuICAgIC5lZGl0LWF2YXRhciB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY2hhbmdlLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBjb2xvcjogIzY1OUNGMjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmluZm8tdGV4dCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbn0iLCIucHJvZmlsZXBhZ2UgLmVkaXQtYXZhdGFyIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgd2lkdGg6IDI1JTtcbn1cbi5wcm9maWxlcGFnZSAuY2hhbmdlLXRleHQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjNjU5Q0YyO1xufVxuLnByb2ZpbGVwYWdlIC5pbmZvLXRleHQge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");







var ProfilePage = /** @class */ (function () {
    function ProfilePage(fireAuth, router, platform, activatedRoute, auth, toastCtrl, loadingController, menu, nativePageTransitions, nav) {
        this.fireAuth = fireAuth;
        this.router = router;
        this.platform = platform;
        this.activatedRoute = activatedRoute;
        this.auth = auth;
        this.toastCtrl = toastCtrl;
        this.loadingController = loadingController;
        this.menu = menu;
        this.nativePageTransitions = nativePageTransitions;
        this.nav = nav;
        this.key = "7yZ2AVzT76cie7ralb9YZcLsrjq2";
    }
    ProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        this.menu.enable(true, "user");
        this.value = this.activatedRoute.snapshot.paramMap.get("id");
        this.type = this.activatedRoute.snapshot.paramMap.get("type");
        this.auth.usermobile = this.value;
        this.auth.getTotalOrders(this.value).then(function (msg) {
            if (msg["success"]) {
                _this.auth.totalOrders = msg["total"];
            }
            else {
                _this.auth.totalOrders = 0;
            }
        });
    };
    ProfilePage.prototype.ionViewWillEnter = function (callit) {
        if (callit) {
            this.ionViewDidEnter();
        }
        this.nativePageTransitions
            .slide(this.auth.optionsRight)
            .then()
            .catch(function (errr) {
            console.log(errr);
        });
    };
    ProfilePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.loadingController
            .create({
            message: "Loading your profile",
            mode: "ios",
        })
            .then(function (res) {
            res.present();
        });
        this.auth.getUser(this.value, this.type).then(function (response) {
            console.log(response);
            _this.id = _this.value;
            if (response["success"] == 1) {
                _this.name = response["name"];
                _this.address = response["address"];
                _this.gst = response["gst"];
                _this.phone = response["mobile"];
                _this.oldGST = response["gst"];
                _this.loadingController.dismiss();
            }
            else if (response["success"] == 2) {
                _this.loadingController.dismiss();
                _this.auth.presentToast(response["message"], false, "bottom", 2500, "danger");
            }
        });
        setTimeout(function () {
            _this.loadingController.getTop().then(function (chk) {
                if (chk) {
                    _this.loadingController.dismiss();
                }
            });
        }, 1500);
    };
    ProfilePage.prototype.saveProfile = function () {
        var name = this.name == "" ? "" : this.name;
        var gst = this.gst == "" ? "" : this.gst.toUpperCase();
        var phone = this.phone == "" ? "" : this.phone;
        var address = this.address == "" ? "" : this.address;
        if (name == "" || gst == "" || phone == "" || address == "") {
            this.auth.presentToast("Please fill all required fields", false, "bottom", 1000, "danger");
        }
        else {
            var regex = new RegExp(/^([0-9]{2}[a-zA-Z]{4}([a-zA-Z]{1}|[0-9]{1})[0-9]{4}[a-zA-Z]{1}([a-zA-Z]|[0-9]){3}){0,15}$/);
            this.saveProfileWithGST(phone, name, gst, address);
            // if (this.oldGST != gst) {
            // if (regex.test(gst)) {
            // this.saveProfileWithGST(phone, name, gst, address);
            // } else {
            //   this.auth.presentToast('Please enter valid GSTIN', false, 'bottom', 1000, 'danger');
            // }
            // } else {
            //   this.saveProfileWithGST(phone, name, gst, address);
            // }
        }
    };
    ProfilePage.prototype.saveProfileWithGST = function (phone, name, gst, address) {
        var _this = this;
        this.auth.updateUser(phone, name, gst, address).then(function (response) {
            _this.loadingController
                .create({
                message: "Saving your data",
                mode: "ios",
            })
                .then(function (res) {
                console.log(response);
                if (response["success"] == 1) {
                    setTimeout(function () {
                        _this.loadingController.dismiss();
                    }, 1500);
                    _this.auth.presentToast(response["message"], false, "bottom", 1000, "success");
                }
                else if (response["success"] == 2) {
                    _this.loadingController.dismiss();
                    _this.auth.presentToast(response["message"], false, "bottom", 2500, "danger");
                }
                else {
                    _this.loadingController.dismiss();
                    _this.auth.presentToast(response["message"], false, "bottom", 1000, "danger");
                }
                res.present();
                res.onDidDismiss().then(function (dis) {
                    if (response["success"] == 1) {
                        _this.nav.navigateForward("/material/mobile/" + phone);
                    }
                    else {
                        _this.ngOnInit();
                    }
                });
            });
        });
    };
    ProfilePage.prototype.checkGST = function (GST, key, phone, name, gst, address) {
        var _this = this;
        this.loadingController
            .create({
            message: "Checking GSTIN number",
            mode: "ios",
        })
            .then(function (res) {
            res.present();
        });
        this.auth.validateGST(GST, key).then(function (gstResponse) {
            _this.loadingController.dismiss();
            if (gstResponse["error"] != undefined) {
                if (_this.platform.is("cordova")) {
                    gstResponse["error"] = JSON.parse(gstResponse["error"]);
                }
                // tslint:disable-next-line:max-line-length
                if (gstResponse["message"] != undefined &&
                    gstResponse["message"].includes("Limit Exceed")) {
                    _this.key = "HVEhpveprHeKSIc61xuOHlTd8dG2";
                    _this.checkGST(_this.gst, _this.key, phone, name, gst, address);
                }
                else {
                    _this.auth.presentToast(gstResponse["error"]["message"], false, "bottom", 1000, "danger");
                }
            }
            else {
                console.log("Name: " + gstResponse["taxpayerInfo"]["lgnm"]);
                console.log("GSTIN: " + gstResponse["taxpayerInfo"]["gstin"]);
                console.log("Registered: " + gstResponse["taxpayerInfo"]["rgdt"]);
                console.log("Status: " + gstResponse["taxpayerInfo"]["sts"]);
                _this.saveProfileWithGST(phone, name, gst, address);
            }
        });
    };
    ProfilePage.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
        { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_6__["NativePageTransitions"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
    ]; };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-profile",
            template: __webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
            _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_6__["NativePageTransitions"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module-es5.js.map