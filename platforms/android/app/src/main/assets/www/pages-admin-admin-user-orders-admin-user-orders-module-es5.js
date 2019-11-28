(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-admin-user-orders-admin-user-orders-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/admin/admin-user-orders/admin-user-orders.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/admin/admin-user-orders/admin-user-orders.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border class=\"animated fadeInDown\">\n    <ion-toolbar color='dark' mode=\"ios\">\n      <ion-title>{{name}}'s Orders</ion-title>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button autoHide=\"false\"></ion-menu-button>\n      </ion-buttons>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"ionViewWillEnter(1, $event)\"><ion-icon name=\"refresh\"></ion-icon></ion-button>\n        <ion-back-button defaultHref=\"all-orders\"></ion-back-button>\n      </ion-buttons>\n    </ion-toolbar>\n    <ion-searchbar mode=\"ios\" debounce=\"700\" placeholder=\"Search Order\"  [(ngModel)]=\"searchKey\" (ionChange)=\"ionViewWillEnter(1, '')\" showCancelButton=\"always\" clearIcon=false class=\"animated bounceInLeft slow\"></ion-searchbar>\n    <ion-item class=\"animated bounceInLeft slow\">\n      <ion-label>Search by order status</ion-label>\n      <ion-select mode=\"ios\" interface=\"action-sheet\" placeholder=\"Select Status\" [selectedText]=\"searchstatus\" [(ngModel)]=\"searchstatus\" (ionChange)=\"ionViewWillEnter(1, '')\">\n        <ion-select-option *ngFor=\"let ostatus of orderStatus\" value=\"{{ostatus.name}}\">\n          {{ostatus.name}}\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-header>\n  \n  <ion-content class=\"ion-padding card-background-page\">\n  \n    <ion-label color=\"danger\" [hidden]=showNoData class=\"ion-text-center\"><h2><b>No order for this user found.</b></h2></ion-label>\n  \n    <ion-label color=\"danger\" [hidden]=showNoDataForSearch class=\"ion-text-center\"><h2><b>No order found.</b></h2></ion-label>\n  \n    <ion-card *ngFor=\"let order of orders; let i = index\" class=\"animated bounceInLeft slow\">\n      <ion-card-content>\n        <ion-chip color=\"{{order.color}}\">\n          <ion-icon name=\"{{order.icon}}\"></ion-icon>\n          <ion-label>Order is {{ order.status }}</ion-label>\n        </ion-chip>\n        <ion-row class=\"ion-text-left\">\n          <ion-col col-12>\n            <ion-card-title>{{ order.name }}</ion-card-title>\n            <ion-card-subtitle style=\"font-size: 20px;\">Ordered at: {{ order.created_at }}</ion-card-subtitle>\n            <ion-label color=\"{{order.color}}\">ID: {{ order.order_id }}</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <img src=\"https://bhuminarrowfab.000webhostapp.com/images/materials/{{order.image}}\">\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"ion-text-left\">\n            <div class=\"card-price\" style=\"font-size: 20px;\">Order total: &#8377;{{ order.totalprice }}</div>\n          </ion-col>\n        </ion-row>\n        <ion-button class=\"loginbtn\" color='dark' expand=\"block\" fill=\"outline\" [routerLink]=\"['/', 'admin-order-details', order.order_id]\">ORDER DETAIL</ion-button>\n      </ion-card-content>\n    </ion-card>\n  \n    <ion-infinite-scroll *ngIf=\"!noMoreData\"  (ionInfinite)=\"loadMore($event)\">\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more orders...\"></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/pages/admin/admin-user-orders/admin-user-orders.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/admin/admin-user-orders/admin-user-orders.module.ts ***!
  \***************************************************************************/
/*! exports provided: AdminUserOrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUserOrdersPageModule", function() { return AdminUserOrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _admin_user_orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-user-orders.page */ "./src/app/pages/admin/admin-user-orders/admin-user-orders.page.ts");







var routes = [
    {
        path: '',
        component: _admin_user_orders_page__WEBPACK_IMPORTED_MODULE_6__["AdminUserOrdersPage"]
    }
];
var AdminUserOrdersPageModule = /** @class */ (function () {
    function AdminUserOrdersPageModule() {
    }
    AdminUserOrdersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_admin_user_orders_page__WEBPACK_IMPORTED_MODULE_6__["AdminUserOrdersPage"]]
        })
    ], AdminUserOrdersPageModule);
    return AdminUserOrdersPageModule;
}());



/***/ }),

/***/ "./src/app/pages/admin/admin-user-orders/admin-user-orders.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/admin/admin-user-orders/admin-user-orders.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2FkbWluLXVzZXItb3JkZXJzL2FkbWluLXVzZXItb3JkZXJzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/admin/admin-user-orders/admin-user-orders.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/admin/admin-user-orders/admin-user-orders.page.ts ***!
  \*************************************************************************/
/*! exports provided: AdminUserOrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUserOrdersPage", function() { return AdminUserOrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/authentication.service */ "./src/app/services/authentication.service.ts");





var AdminUserOrdersPage = /** @class */ (function () {
    function AdminUserOrdersPage(router, platform, activatedRoute, auth, toastCtrl, loadingController, navCtrl, menu) {
        this.router = router;
        this.platform = platform;
        this.activatedRoute = activatedRoute;
        this.auth = auth;
        this.toastCtrl = toastCtrl;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.orders = [];
        this.page = 1;
        this.results = 5;
        this.showNoData = true;
        this.noMoreData = 0;
        this.showNoDataForSearch = true;
        this.searchstatus = 'All';
        this.orderStatus = [
            {
                name: 'All',
            },
            {
                name: 'Rejected',
            },
            {
                name: 'Pending',
            },
            {
                name: 'Confirmed',
            },
            {
                name: 'Delivered'
            }
        ];
    }
    AdminUserOrdersPage.prototype.ngOnInit = function () {
        this.menu.enable(true, 'admin');
    };
    AdminUserOrdersPage.prototype.ionViewWillEnter = function (callit, infiniteScroll) {
        var _this = this;
        this.orders = [];
        this.page = 1;
        if (callit) {
            this.content.scrollToTop(1500);
            setTimeout(function () {
                _this.noMoreData = 0;
                _this.showNoDataForSearch = true;
                _this.showNoData = true;
                _this.ionViewDidEnter();
            }, 100);
        }
    };
    AdminUserOrdersPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.phone = this.activatedRoute.snapshot.paramMap.get('mobile');
        this.name = this.activatedRoute.snapshot.paramMap.get('name');
        this.auth.getAdminAllTotal().then(function (res) {
            if (res['success']) {
                _this.auth.adminTotalOrders = res['totalOrders'];
                _this.auth.adminTotalUsers = res['totalUsers'];
                _this.auth.adminTotalMaterials = res['totalMaterials'];
            }
            else {
                _this.auth.adminTotalOrders = 0;
                _this.auth.adminTotalUsers = 0;
                _this.auth.adminTotalMaterials = 0;
            }
        });
        this.loadingController.create({
            message: 'loading users orders',
            mode: 'ios'
        }).then(function (ress) {
            ress.present();
        });
        this.showNoDataForSearch = true;
        this.loadOrders();
    };
    AdminUserOrdersPage.prototype.loadOrders = function (infiniteScroll) {
        var _this = this;
        this.auth.getOrders(this.results, this.page, this.phone, this.searchKey, this.searchstatus).then(function (response) {
            console.log(response);
            if (response['success'] == 1) {
                _this.orders = _this.orders.concat(response['orders']);
                _this.maximumPages = Math.ceil(response['total'] / _this.results);
                console.log(_this.orders);
                if (response['total'] <= _this.results) {
                    _this.noMoreData = 1;
                }
                if (infiniteScroll) {
                    infiniteScroll.target.complete();
                }
                else {
                    _this.loadingController.dismiss();
                }
            }
            else if (response['success'] == 2) {
                _this.loadingController.dismiss();
                _this.auth.presentToast(response['message'], false, 'bottom', 2500, 'danger');
            }
            else {
                if (_this.searchKey == undefined || _this.searchKey == '') {
                    _this.showNoData = false;
                }
                else {
                    _this.showNoDataForSearch = false;
                }
                _this.loadingController.dismiss();
            }
        });
    };
    AdminUserOrdersPage.prototype.loadMore = function (infiniteScroll) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.page++;
                        if (!(this.page <= this.maximumPages)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.wait(1000)];
                    case 1:
                        _a.sent();
                        this.loadOrders(infiniteScroll);
                        _a.label = 2;
                    case 2:
                        if (this.page === this.maximumPages) {
                            // infiniteScroll.target.disabled = true;
                            this.noMoreData = 1;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AdminUserOrdersPage.prototype.wait = function (time) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve();
            }, time);
        });
    };
    AdminUserOrdersPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
    ], AdminUserOrdersPage.prototype, "content", void 0);
    AdminUserOrdersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-user-orders',
            template: __webpack_require__(/*! raw-loader!./admin-user-orders.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/admin/admin-user-orders/admin-user-orders.page.html"),
            styles: [__webpack_require__(/*! ./admin-user-orders.page.scss */ "./src/app/pages/admin/admin-user-orders/admin-user-orders.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
    ], AdminUserOrdersPage);
    return AdminUserOrdersPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-admin-admin-user-orders-admin-user-orders-module-es5.js.map