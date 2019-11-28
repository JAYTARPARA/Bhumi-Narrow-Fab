(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-all-users-all-users-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/admin/all-users/all-users.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/admin/all-users/all-users.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border class=\"animated fadeInDown\">\n  <ion-toolbar color='dark' mode=\"ios\">\n    <ion-title>All Users</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button autoHide=\"false\"></ion-menu-button>\n      </ion-buttons>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"ionViewWillEnter(1, $event)\"><ion-icon name=\"refresh\"></ion-icon></ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n  <ion-searchbar mode=\"ios\" [hidden]=!showNoData debounce=\"700\" placeholder=\"Search Users\"  [(ngModel)]=\"searchKey\" (ionChange)=\"ionViewWillEnter(1, '')\" showCancelButton=\"always\" clearIcon=false class=\"animated bounceInLeft slow\"></ion-searchbar>\n</ion-header>\n\n<ion-content class=\"ion-padding card-background-page\">\n  <ion-label color=\"danger\" [hidden]=showNoData class=\"ion-text-center\"><h2><b>Users not available.</b></h2></ion-label>\n\n  <ion-label color=\"danger\" [hidden]=showNoDataForSearch class=\"ion-text-center\"><h2><b>No user found.</b></h2></ion-label>\n\n  <ion-card *ngFor=\"let user of users; let i = index\" class=\"animated bounceInLeft slow ion-margin-top\">\n    <ion-item>\n      <ion-label> \n        <ion-icon name=\"person\" color=\"medium\"></ion-icon>\n      </ion-label>\n      <ion-input type=\"text\" mode=\"md\" value={{user.name}} readonly style=\"pointer-events: none;\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label> \n        <ion-icon name=\"phone-portrait\" color=\"medium\"></ion-icon>\n      </ion-label>\n      <ion-input type=\"tel\" mode=\"md\" value={{user.mobile}} readonly style=\"pointer-events: none;\"></ion-input>\n      <ion-button class=\"loginbtn\" color='dark' expand=\"block\" (click)=\"callMe(user.mobile)\">CALL NOW</ion-button>\n      <ion-button class=\"loginbtn\" *ngIf=\"user.status==1\" color='dark' expand=\"block\" fill=\"outline\" (click)=\"blockMe(user.mobile, 0)\">BLOCK</ion-button>\n      <ion-button class=\"loginbtn\" *ngIf=\"user.status==0\" color='dark' expand=\"block\" fill=\"outline\" (click)=\"blockMe(user.mobile, 1)\">UNBLOCK</ion-button>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label>\n        <ion-icon name=\"globe\" color=\"medium\"></ion-icon>\n      </ion-label>\n      <ion-textarea autoGrow=true mode=\"md\" value={{user.address}} readonly style=\"pointer-events: none;\"></ion-textarea>\n    </ion-item>\n\n    <ion-item>\n      <ion-label> \n        <ion-icon name=\"clipboard\" color=\"medium\"></ion-icon>\n      </ion-label>\n      <ion-input type=\"text\" mode=\"md\" value={{user.gst}} readonly style=\"pointer-events: none;\"></ion-input>\n    </ion-item>\n\n    <ion-item color=\"medium\" *ngIf=\"user.totalOrder>0\" [routerLink]=\"['/', 'admin-user-orders', user.mobile, user.name]\"  detail>\n      <ion-label> \n        <ion-icon name=\"wallet\" color=\"light\"></ion-icon>\n      </ion-label>\n      <ion-input type=\"text\" mode=\"md\" value=\"{{user.totalOrder}} order(s) placed by this user\"  readonly style=\"pointer-events: none;\"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf=\"user.totalOrder==0\">\n      <ion-label> \n        <ion-icon name=\"wallet\" color=\"medium\"></ion-icon>\n      </ion-label>\n      <ion-input type=\"text\" mode=\"md\" value=\"{{user.totalOrder}} order placed by this user\"  readonly style=\"pointer-events: none;\"></ion-input>\n    </ion-item>\n  </ion-card>\n\n  <ion-infinite-scroll *ngIf=\"!noMoreData\" (ionInfinite)=\"loadMore($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more users...\"></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/admin/all-users/all-users.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/admin/all-users/all-users.module.ts ***!
  \***********************************************************/
/*! exports provided: AllUsersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllUsersPageModule", function() { return AllUsersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _all_users_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all-users.page */ "./src/app/pages/admin/all-users/all-users.page.ts");







const routes = [
    {
        path: '',
        component: _all_users_page__WEBPACK_IMPORTED_MODULE_6__["AllUsersPage"]
    }
];
let AllUsersPageModule = class AllUsersPageModule {
};
AllUsersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_all_users_page__WEBPACK_IMPORTED_MODULE_6__["AllUsersPage"]]
    })
], AllUsersPageModule);



/***/ }),

/***/ "./src/app/pages/admin/all-users/all-users.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/admin/all-users/all-users.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2FsbC11c2Vycy9hbGwtdXNlcnMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/admin/all-users/all-users.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/admin/all-users/all-users.page.ts ***!
  \*********************************************************/
/*! exports provided: AllUsersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllUsersPage", function() { return AllUsersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");







let AllUsersPage = class AllUsersPage {
    constructor(fireAuth, router, platform, activatedRoute, auth, toastCtrl, loadingController, alertCtrl, callNumber, menu) {
        this.fireAuth = fireAuth;
        this.router = router;
        this.platform = platform;
        this.activatedRoute = activatedRoute;
        this.auth = auth;
        this.toastCtrl = toastCtrl;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.callNumber = callNumber;
        this.menu = menu;
        this.users = [];
        this.page = 1;
        this.results = 5;
        this.showNoData = true;
        this.noMoreData = 0;
        this.showNoDataForSearch = true;
    }
    ngOnInit() {
        this.menu.enable(true, 'admin');
    }
    ionViewWillEnter(callit, infiniteScroll) {
        this.users = [];
        this.page = 1;
        if (callit) {
            this.content.scrollToTop(1500);
            setTimeout(() => {
                this.noMoreData = 0;
                this.ionViewDidEnter();
            }, 100);
        }
    }
    ionViewDidEnter() {
        this.auth.getAdminAllTotal().then(res => {
            if (res['success']) {
                this.auth.adminTotalOrders = res['totalOrders'];
                this.auth.adminTotalUsers = res['totalUsers'];
                this.auth.adminTotalMaterials = res['totalMaterials'];
            }
            else {
                this.auth.adminTotalOrders = 0;
                this.auth.adminTotalUsers = 0;
                this.auth.adminTotalMaterials = 0;
            }
        });
        this.loadingController.create({
            message: 'loading users',
            mode: 'ios'
        }).then((ress) => {
            ress.present();
        });
        this.showNoDataForSearch = true;
        this.loadUsers();
    }
    loadUsers(infiniteScroll) {
        if (this.searchKey == undefined) {
            this.searchKey = '';
        }
        this.auth.getUsers(this.results, this.page, this.searchKey).then(response => {
            if (response['success'] == 1) {
                this.users = this.users.concat(response['users']);
                this.maximumPages = Math.ceil(response['total'] / this.results);
                console.log(this.users);
                if (response['total'] <= this.results) {
                    this.noMoreData = 1;
                }
                if (infiniteScroll) {
                    infiniteScroll.target.complete();
                }
                else {
                    this.loadingController.dismiss();
                }
            }
            else if (response['success'] == 2) {
                this.loadingController.dismiss();
                this.auth.presentToast(response['message'], false, 'bottom', 2500, 'danger');
            }
            else {
                if (this.searchKey == undefined || this.searchKey == '') {
                    this.showNoData = false;
                }
                else {
                    this.showNoDataForSearch = false;
                }
                this.loadingController.dismiss();
            }
        });
    }
    loadMore(infiniteScroll) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.page++;
            if (this.page <= this.maximumPages) {
                yield this.wait(1000);
                this.loadUsers(infiniteScroll);
            }
            if (this.page === this.maximumPages) {
                this.noMoreData = 1;
            }
        });
    }
    wait(time) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, time);
        });
    }
    callMe(number) {
        this.callNumber.callNumber(number, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
    blockMe(mobile, status) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('mobile: ' + mobile);
            console.log('status: ' + status);
            let subHeaderMsg = '';
            let loadMessage = '';
            if (status == 0) {
                subHeaderMsg = 'Are you sure you want to block this user?';
                loadMessage = 'Blocking user';
            }
            else if (status == 1) {
                subHeaderMsg = 'Are you sure you want to unblock this user?';
                loadMessage = 'Unblocking user';
            }
            const alert = yield this.alertCtrl.create({
                header: 'Confirm!',
                subHeader: subHeaderMsg,
                mode: 'ios',
                buttons: [
                    {
                        text: 'NO',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => { }
                    }, {
                        text: 'YES',
                        handler: () => {
                            this.loadingController.create({
                                message: loadMessage,
                                mode: 'ios'
                            }).then((res) => {
                                res.present();
                                res.onDidDismiss().then((dis) => {
                                    this.ionViewWillEnter(1);
                                });
                            });
                            this.auth.blockUnblockUser(mobile, status).then(response => {
                                this.loadingController.dismiss();
                                if (response['success'] == 1) {
                                    this.auth.presentToast(response['message'], false, 'bottom', 1000, 'success');
                                }
                                else if (response['success'] == 2) {
                                    this.auth.presentToast(response['message'], false, 'bottom', 1500, 'danger');
                                }
                                else {
                                    this.auth.presentToast(response['message'], false, 'bottom', 1500, 'danger');
                                }
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
AllUsersPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"])
], AllUsersPage.prototype, "content", void 0);
AllUsersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-all-users',
        template: __webpack_require__(/*! raw-loader!./all-users.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/admin/all-users/all-users.page.html"),
        styles: [__webpack_require__(/*! ./all-users.page.scss */ "./src/app/pages/admin/all-users/all-users.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]])
], AllUsersPage);



/***/ })

}]);
//# sourceMappingURL=pages-admin-all-users-all-users-module-es2015.js.map