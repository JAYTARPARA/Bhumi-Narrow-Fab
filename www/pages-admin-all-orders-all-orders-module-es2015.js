(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-all-orders-all-orders-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/admin/all-orders/all-orders.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/admin/all-orders/all-orders.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border class=\"animated fadeInDown\">\n    <ion-toolbar color='dark' mode=\"ios\">\n      <ion-title>All Orders</ion-title>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button autoHide=\"false\"></ion-menu-button>\n      </ion-buttons>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"ionViewWillEnter(1, $event)\"><ion-icon name=\"refresh\"></ion-icon></ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n    <ion-searchbar mode=\"ios\" debounce=\"700\" placeholder=\"Search Order\"  [(ngModel)]=\"searchKey\" (ionChange)=\"ionViewWillEnter(1, '')\" showCancelButton=\"always\" clearIcon=false class=\"animated bounceInLeft slow\"></ion-searchbar>\n    <ion-datetime [pickerOptions]=\"customPickerOptions\" displayFormat=\"DD-MM-YYYY\" placeholder=\"Search by date\" [(ngModel)]=\"searchKeyDate\" min=\"2018\" max=\"{{maxDateSelect}}\" class=\"animated bounceInLeft slow\" (ionChange)=\"ionViewWillEnter(1, '')\"></ion-datetime>\n    <ion-item class=\"animated bounceInLeft slow\">\n      <ion-label>Search by order status</ion-label>\n      <ion-select mode=\"ios\" interface=\"action-sheet\" placeholder=\"Select Status\" [selectedText]=\"searchstatus\" [(ngModel)]=\"searchstatus\" (ionChange)=\"ionViewWillEnter(1, '')\">\n        <ion-select-option *ngFor=\"let ostatus of orderStatus\" value=\"{{ostatus.name}}\">\n          {{ostatus.name}}\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-header>\n  \n  <ion-content class=\"ion-padding card-background-page\">\n  \n    <ion-label color=\"danger\" [hidden]=showNoData class=\"ion-text-center\"><h2><b>No Order Found.</b></h2></ion-label>\n  \n    <ion-label color=\"danger\" [hidden]=showNoDataForSearch class=\"ion-text-center\"><h2><b>No order found.</b></h2></ion-label>\n  \n    <ion-card *ngFor=\"let order of orders; let i = index\" class=\"animated bounceInLeft slow\">\n      <ion-card-content>\n        <ion-chip color=\"{{order.color}}\">\n          <ion-icon name=\"{{order.icon}}\"></ion-icon>\n          <ion-label>Order is {{ order.status }}</ion-label>\n        </ion-chip>\n        <ion-row class=\"ion-text-left\">\n          <ion-col col-12>\n            <ion-card-title>{{ order.username }}</ion-card-title>\n            <ion-card-subtitle style=\"font-size: 20px;\">Ordered at: {{ order.created_at }}</ion-card-subtitle>\n            <ion-label color=\"{{order.color}}\">ID: {{ order.order_id }}</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <img src=\"https://jaytarpara.in/images/materials/{{order.image}}\">\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"ion-text-left\">\n            <div class=\"card-price\" style=\"font-size: 20px;\">Order total: &#8377;{{ order.totalprice }}</div>\n            <div class=\"card-price\" style=\"font-size: 20px;\">Quantity: {{ order.quantity }}</div>\n            <div class=\"card-price\" style=\"font-size: 20px;\">Pieces: {{ order.piece }}</div>\n          </ion-col>\n        </ion-row>\n        <ion-button class=\"loginbtn\" color='dark' expand=\"block\" fill=\"outline\" [routerLink]=\"['/', 'admin-order-details', order.order_id]\">ORDER DETAIL</ion-button>\n      </ion-card-content>\n    </ion-card>\n  \n    <ion-infinite-scroll *ngIf=\"!noMoreData\"  (ionInfinite)=\"loadMore($event)\">\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more orders...\"></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/pages/admin/all-orders/all-orders.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/admin/all-orders/all-orders.module.ts ***!
  \*************************************************************/
/*! exports provided: AllOrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllOrdersPageModule", function() { return AllOrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _all_orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all-orders.page */ "./src/app/pages/admin/all-orders/all-orders.page.ts");







const routes = [
    {
        path: '',
        component: _all_orders_page__WEBPACK_IMPORTED_MODULE_6__["AllOrdersPage"]
    }
];
let AllOrdersPageModule = class AllOrdersPageModule {
};
AllOrdersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_all_orders_page__WEBPACK_IMPORTED_MODULE_6__["AllOrdersPage"]]
    })
], AllOrdersPageModule);



/***/ }),

/***/ "./src/app/pages/admin/all-orders/all-orders.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/admin/all-orders/all-orders.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2FsbC1vcmRlcnMvYWxsLW9yZGVycy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/admin/all-orders/all-orders.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/admin/all-orders/all-orders.page.ts ***!
  \***********************************************************/
/*! exports provided: AllOrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllOrdersPage", function() { return AllOrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/authentication.service */ "./src/app/services/authentication.service.ts");






let AllOrdersPage = class AllOrdersPage {
    constructor(fireAuth, router, platform, activatedRoute, auth, toastCtrl, loadingController, navCtrl, menu) {
        this.fireAuth = fireAuth;
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
        this.lastid = 0;
        this.latestResults = 5;
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
        this.customPickerOptions = {
            buttons: [{
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => { }
                }, {
                    text: 'Clear',
                    handler: () => {
                        this.searchKeyDate = null;
                    }
                }, {
                    text: 'Search',
                    handler: (data) => {
                        console.log(data);
                        const year = data.year.text;
                        const month = data.month.value < 10 ? '0' + data.month.value.toString() : data.month.value.toString();
                        const day = data.day.text;
                        this.searchKeyDate = day + '-' + month + '-' + year;
                    }
                }]
        };
    }
    ngOnInit() {
        const currentDate = new Date();
        this.maxDateSelect = currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate();
        this.menu.enable(true, 'admin');
    }
    ionViewWillEnter(callit, infiniteScroll) {
        console.log('Date: ' + this.searchKeyDate);
        this.orders = [];
        this.page = 1;
        if (callit) {
            this.content.scrollToTop(1500);
            setTimeout(() => {
                this.noMoreData = 0;
                this.showNoDataForSearch = true;
                this.showNoData = true;
                this.ionViewDidEnter();
            }, 100);
        }
    }
    ionViewDidEnter() {
        this.auth.getAdminAllTotal().then(res => {
            if (res['success']) {
                this.auth.adminTotalOrders = res['totalOrders'];
                this.auth.adminWhatsappOrders = res['totalWhatsappOrders'];
                this.auth.adminTotalUsers = res['totalUsers'];
                this.auth.adminTotalMaterials = res['totalMaterials'];
            }
            else {
                this.auth.adminTotalOrders = 0;
                this.auth.adminWhatsappOrders = 0;
                this.auth.adminTotalUsers = 0;
                this.auth.adminTotalMaterials = 0;
            }
        });
        this.loadingController.create({
            message: 'loading orders',
            mode: 'ios'
        }).then((ress) => {
            ress.present();
        });
        this.showNoDataForSearch = true;
        this.loadOrders();
    }
    loadOrders(infiniteScroll) {
        this.auth.getAllOrders(this.results, this.page, this.searchKey, this.searchstatus, this.searchKeyDate).then(response => {
            console.log(response);
            if (response['success'] == 1) {
                this.orders = this.orders.concat(response['orders']);
                this.maximumPages = Math.ceil(response['total'] / this.results);
                console.log(this.orders);
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
                this.loadOrders(infiniteScroll);
            }
            if (this.page === this.maximumPages) {
                // infiniteScroll.target.disabled = true;
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
};
AllOrdersPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"])
], AllOrdersPage.prototype, "content", void 0);
AllOrdersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-all-orders',
        template: __webpack_require__(/*! raw-loader!./all-orders.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/admin/all-orders/all-orders.page.html"),
        styles: [__webpack_require__(/*! ./all-orders.page.scss */ "./src/app/pages/admin/all-orders/all-orders.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]])
], AllOrdersPage);



/***/ })

}]);
//# sourceMappingURL=pages-admin-all-orders-all-orders-module-es2015.js.map