(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-orders-orders-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/orders/orders.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/orders/orders.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border class=\"animated fadeInDown\">\n  <ion-toolbar color='dark' mode=\"ios\">\n    <ion-title>My Orders</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"ionViewWillEnter(1, $event)\"><ion-icon name=\"refresh\"></ion-icon></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-searchbar mode=\"ios\" debounce=\"700\" placeholder=\"Search Order\"  [(ngModel)]=\"searchKey\" (ionChange)=\"ionViewWillEnter(1, '')\" showCancelButton=\"always\" clearIcon=false class=\"animated bounceInLeft slow\"></ion-searchbar>\n  <ion-item class=\"animated bounceInLeft slow\">\n    <ion-label>Search by order status</ion-label>\n    <ion-select mode=\"ios\" interface=\"action-sheet\" placeholder=\"Select Status\" [selectedText]=\"searchstatus\" [(ngModel)]=\"searchstatus\" (ionChange)=\"ionViewWillEnter(1, '')\">\n      <ion-select-option *ngFor=\"let ostatus of orderStatus\" value=\"{{ostatus.name}}\">\n        {{ostatus.name}}\n      </ion-select-option>\n    </ion-select>\n  </ion-item>\n</ion-header>\n\n<ion-content class=\"ion-padding card-background-page\">\n\n  <ion-label color=\"danger\" [hidden]=showNoData class=\"ion-text-center\"><h2><b>No order found.</b></h2></ion-label>\n  <!-- <ion-button class=\"loginbtn\" [hidden]=showNoData color='dark' expand=\"block\" fill=\"outline\" [routerLink]=\"['/', 'materials', 'mobile', phone]\">PLACE YOUR FIRST ORDER</ion-button> -->\n\n  <ion-label color=\"danger\" [hidden]=showNoDataForSearch class=\"ion-text-center\"><h2><b>No order found.</b></h2></ion-label>\n\n  <ion-card *ngFor=\"let order of orders; let i = index\" class=\"animated bounceInLeft slow\">\n    <ion-card-content>\n      <ion-chip color=\"{{order.color}}\">\n        <ion-icon name=\"{{order.icon}}\"></ion-icon>\n        <ion-label>Order is {{ order.status }}</ion-label>\n      </ion-chip>\n      <ion-row class=\"ion-text-left\">\n        <ion-col col-12>\n          <ion-card-title>{{ order.name }}</ion-card-title>\n          <ion-card-subtitle style=\"font-size: 20px;\">Ordered at: {{ order.created_at }}</ion-card-subtitle>\n          <ion-label color=\"{{order.color}}\">ID: {{ order.order_id }}</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <img src=\"https://jaytarpara.in/images/materials/{{order.image}}\">\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"ion-text-left\">\n          <div class=\"card-price\" style=\"font-size: 20px;\">Order total: &#8377;{{ order.totalprice }}</div>\n          <div class=\"card-price\" style=\"font-size: 20px;\">Quantity: {{ order.quantity }}</div>\n          <div class=\"card-price\" style=\"font-size: 20px;\">Pieces: {{ order.piece }}</div>\n        </ion-col>\n      </ion-row>\n      <ion-button class=\"loginbtn\" color='dark' expand=\"block\" fill=\"outline\" [routerLink]=\"['/', 'order-details', order.order_id]\">ORDER DETAIL</ion-button>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-infinite-scroll *ngIf=\"!noMoreData\"  (ionInfinite)=\"loadMore($event, 1)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more orders...\"></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/orders/orders.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/orders/orders.module.ts ***!
  \***********************************************/
/*! exports provided: OrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function() { return OrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders.page */ "./src/app/pages/orders/orders.page.ts");







var routes = [
    {
        path: '',
        component: _orders_page__WEBPACK_IMPORTED_MODULE_6__["OrdersPage"]
    }
];
var OrdersPageModule = /** @class */ (function () {
    function OrdersPageModule() {
    }
    OrdersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_orders_page__WEBPACK_IMPORTED_MODULE_6__["OrdersPage"]]
        })
    ], OrdersPageModule);
    return OrdersPageModule;
}());



/***/ }),

/***/ "./src/app/pages/orders/orders.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/orders/orders.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVycy9vcmRlcnMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/orders/orders.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/orders/orders.page.ts ***!
  \*********************************************/
/*! exports provided: OrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPage", function() { return OrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");







var OrdersPage = /** @class */ (function () {
    function OrdersPage(fireAuth, router, platform, activatedRoute, auth, toastCtrl, loadingControllerOrder, navCtrl, menu, nativePageTransitions) {
        this.fireAuth = fireAuth;
        this.router = router;
        this.platform = platform;
        this.activatedRoute = activatedRoute;
        this.auth = auth;
        this.toastCtrl = toastCtrl;
        this.loadingControllerOrder = loadingControllerOrder;
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.nativePageTransitions = nativePageTransitions;
        this.orders = [];
        this.page = 1;
        this.results = 5;
        this.showNoData = true;
        this.lastid = 0;
        this.latestResults = 5;
        this.noMoreData = 0;
        this.showNoDataForSearch = true;
        this.searchstatus = 'All';
        this.loadOrderNow = false;
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
    OrdersPage.prototype.ngOnInit = function () {
        this.menu.enable(true, 'user');
        this.value = this.activatedRoute.snapshot.paramMap.get('id');
        this.type = this.activatedRoute.snapshot.paramMap.get('type');
        this.auth.usermobile = this.value;
    };
    OrdersPage.prototype.ionViewWillEnter = function (callit, infiniteScroll) {
        var _this = this;
        this.nativePageTransitions.slide(this.auth.optionsRight)
            .then()
            .catch(function (errr) {
            console.log(errr);
        });
        this.orders = [];
        this.page = 1;
        if (callit) {
            this.content.scrollToTop(1500);
            setTimeout(function () {
                _this.noMoreData = 0;
                _this.showNoDataForSearch = true;
                _this.showNoData = true;
                _this.ionViewDidEnter(callit);
            }, 100);
        }
    };
    OrdersPage.prototype.ionViewDidEnter = function (callit) {
        var _this = this;
        if (!callit) {
            this.loadingControllerOrder.create({
                message: 'Loading your orders',
                mode: 'ios'
            }).then(function (res) {
                res.present();
                res.onDidDismiss().then(function (dis) {
                    console.log(_this.loadOrderNow);
                    if (_this.loadOrderNow) {
                        _this.loadOrders();
                    }
                });
            });
        }
        this.auth.getUser(this.value, this.type).then(function (response) {
            console.log(response);
            _this.id = _this.value;
            if (response['success'] == 1) {
                _this.name = response['name'];
                _this.address = response['address'];
                _this.gst = response['gst'];
                _this.phone = response['mobile'];
                // tslint:disable-next-line:max-line-length
                if (_this.name == "" || _this.address == "" || _this.gst == "") {
                    _this.loadOrderNow = false;
                    _this.loadingControllerOrder.dismiss();
                    _this.auth.presentToast('Please provide all details', false, 'bottom', 2500, 'danger');
                    _this.router.navigate(['/profile/mobile/' + _this.value]);
                }
                else {
                    _this.loadOrderNow = true;
                    if (!callit) {
                        _this.loadingControllerOrder.dismiss();
                    }
                }
            }
            else if (response['success'] == 2) {
                _this.loadOrderNow = false;
                if (!callit) {
                    _this.loadingControllerOrder.dismiss();
                }
                _this.auth.presentToast(response['message'], false, 'bottom', 2500, 'danger');
            }
            else {
                if (!callit) {
                    _this.loadingControllerOrder.dismiss();
                }
            }
        });
        // setTimeout(() => {
        //   this.loadingControllerOrder.getTop().then( chk => {
        //     if (chk) {
        //       this.loadingControllerOrder.dismiss();
        //     }
        //   });
        // }, 1500);
        this.auth.getTotalOrders(this.value).then(function (msg) {
            if (msg['success']) {
                _this.auth.totalOrders = msg['total'];
            }
            else {
                _this.auth.totalOrders = 0;
            }
        });
        this.showNoDataForSearch = true;
        if (callit) {
            this.loadOrders();
        }
    };
    OrdersPage.prototype.loadOrders = function (infiniteScroll, scrollCall) {
        var _this = this;
        if (!scrollCall) {
            this.loadingControllerOrder.create({
                message: 'Loading your orders',
                mode: 'ios'
            }).then(function (ress) {
                ress.present();
            });
        }
        this.auth.getOrders(this.results, this.page, this.value, this.searchKey, this.searchstatus).then(function (response) {
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
                    _this.loadingControllerOrder.dismiss();
                }
            }
            else if (response['success'] == 2) {
                _this.loadingControllerOrder.dismiss();
                _this.auth.presentToast(response['message'], false, 'bottom', 2500, 'danger');
            }
            else {
                if (_this.searchKey == undefined || _this.searchKey == '') {
                    _this.showNoData = false;
                }
                else {
                    _this.showNoDataForSearch = false;
                }
                _this.loadingControllerOrder.dismiss();
            }
        });
    };
    OrdersPage.prototype.loadMore = function (infiniteScroll, scrollCall) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!scrollCall) {
                            scrollCall = 0;
                        }
                        this.page++;
                        if (!(this.page <= this.maximumPages)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.wait(1000)];
                    case 1:
                        _a.sent();
                        this.loadOrders(infiniteScroll, scrollCall);
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
    OrdersPage.prototype.wait = function (time) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve();
            }, time);
        });
    };
    OrdersPage.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
        { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_6__["NativePageTransitions"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"])
    ], OrdersPage.prototype, "content", void 0);
    OrdersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! raw-loader!./orders.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/orders/orders.page.html"),
            styles: [__webpack_require__(/*! ./orders.page.scss */ "./src/app/pages/orders/orders.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
            _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_6__["NativePageTransitions"]])
    ], OrdersPage);
    return OrdersPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-orders-orders-module-es5.js.map