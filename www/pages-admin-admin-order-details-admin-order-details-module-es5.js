(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-admin-order-details-admin-order-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/admin/admin-order-details/admin-order-details.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/admin/admin-order-details/admin-order-details.page.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border class=\"animated fadeInDown\">\n  <ion-toolbar color='{{color}}' mode=\"ios\">\n    <ion-title>ID: {{ order_id }}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-back-button defaultHref=\"all-orders\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding card-background-page\">\n  <ion-card class=\"animated bounceInLeft slow\">\n    <ion-card-content>\n      <ion-chip color=\"{{color}}\">\n        <ion-icon name=\"{{icon}}\"></ion-icon>\n        <ion-label>Order is {{ status }}</ion-label>\n      </ion-chip>\n      <ion-row class=\"ion-text-left\">\n        <ion-col col-12>\n          <ion-card-title>Order ID: {{ order_id }}</ion-card-title>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <img src=\"https://bhuminarrowfab.000webhostapp.com/images/materials/{{image}}\">\n      </ion-row>\n      <ion-row class=\"ion-text-left\">\n        <ion-col col-12>\n          <ion-card-title><b><u>Material Details</u></b></ion-card-title>\n          <ion-card-content>\n            <b>Material Name: </b>{{ name }}\n            <br/>\n            <b>Material ID: </b>{{ material_id }}\n            <br/>\n            <b>Material Price: </b>{{ price }}\n            <br/>\n            <b>Ordered at: </b>{{ created_at }}\n          </ion-card-content>\n\n          <ion-card-title><b><u>Order Details</u></b></ion-card-title>\n          <ion-card-content>\n              <b>Name: </b>{{ username }}\n              <br/>\n              <b>Mobile: </b>{{ mobile }}\n              <br/>\n              <b>Address: </b>{{ address }}\n              <br/>\n              <b>Quantity Ordered: </b>{{ quantity }}\n              <br/>\n              <b>Pieces Ordered: </b>{{ piece }}\n              <br/>\n              <b>Sample Requested: </b>{{ sample }}\n              <br/>\n              <b>Order Total: </b>&#8377;{{ totalprice }}\n            </ion-card-content>\n        </ion-col>\n      </ion-row>\n      <ion-item>\n        <ion-label>Order Status</ion-label>\n        <ion-select mode=\"ios\" interface=\"action-sheet\" placeholder=\"Select Status\" [selectedText]=\"status\" [(ngModel)]=\"status\">\n          <ion-select-option *ngFor=\"let ostatus of orderStatus\" value=\"{{ostatus.name}}\">\n            {{ostatus.name}}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-button color='dark' class=\"uploadbtn\" (click)='updateStatus()' expand=\"block\" fill=\"outline\">UPDATE STATUS</ion-button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/admin/admin-order-details/admin-order-details.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/admin/admin-order-details/admin-order-details.module.ts ***!
  \*******************************************************************************/
/*! exports provided: AdminOrderDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminOrderDetailsPageModule", function() { return AdminOrderDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _admin_order_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-order-details.page */ "./src/app/pages/admin/admin-order-details/admin-order-details.page.ts");







var routes = [
    {
        path: '',
        component: _admin_order_details_page__WEBPACK_IMPORTED_MODULE_6__["AdminOrderDetailsPage"]
    }
];
var AdminOrderDetailsPageModule = /** @class */ (function () {
    function AdminOrderDetailsPageModule() {
    }
    AdminOrderDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_admin_order_details_page__WEBPACK_IMPORTED_MODULE_6__["AdminOrderDetailsPage"]]
        })
    ], AdminOrderDetailsPageModule);
    return AdminOrderDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/admin/admin-order-details/admin-order-details.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/admin/admin-order-details/admin-order-details.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".uploadbtn {\n  margin-top: 15px;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tb3JkZXItZGV0YWlscy9DOlxcUHJvamVjdHNcXE15IElvbmljIFByb2plY3RzXFxiaHVtaW5hcnJvd2ZhYi9zcmNcXGFwcFxccGFnZXNcXGFkbWluXFxhZG1pbi1vcmRlci1kZXRhaWxzXFxhZG1pbi1vcmRlci1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tb3JkZXItZGV0YWlscy9hZG1pbi1vcmRlci1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tb3JkZXItZGV0YWlscy9hZG1pbi1vcmRlci1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cGxvYWRidG4ge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGhlaWdodDogNDBweDtcclxufSIsIi51cGxvYWRidG4ge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBoZWlnaHQ6IDQwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/admin/admin-order-details/admin-order-details.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/admin/admin-order-details/admin-order-details.page.ts ***!
  \*****************************************************************************/
/*! exports provided: AdminOrderDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminOrderDetailsPage", function() { return AdminOrderDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/sms/ngx */ "./node_modules/@ionic-native/sms/ngx/index.js");






var AdminOrderDetailsPage = /** @class */ (function () {
    function AdminOrderDetailsPage(activatedRoute, auth, loadingController, menu, sms) {
        this.activatedRoute = activatedRoute;
        this.auth = auth;
        this.loadingController = loadingController;
        this.menu = menu;
        this.sms = sms;
        this.sendMsg = false;
        this.customActionSheetOptions = {
            header: 'Status',
        };
        this.orderStatus = [
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
    AdminOrderDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.menu.enable(true, 'admin');
        // Get the details that was passed with the URL
        this.order_id = this.activatedRoute.snapshot.paramMap.get('id');
        this.loadingController.create({
            message: 'Loading order details',
            mode: 'ios'
        }).then(function (res) {
            res.present();
        });
        this.auth.getOrderByID(this.order_id).then(function (response) {
            if (response['success'] == 1) {
                setTimeout(function () {
                    _this.loadingController.dismiss();
                }, 1000);
                _this.orderdetail = response['order'][0];
                console.log(_this.orderdetail);
                _this.address = _this.orderdetail.address;
                _this.color = _this.orderdetail.color;
                _this.created_at = _this.orderdetail.created_at;
                _this.icon = _this.orderdetail.icon;
                _this.image = _this.orderdetail.image;
                _this.material_id = _this.orderdetail.material_id;
                _this.mobile = _this.orderdetail.mobile;
                _this.name = _this.orderdetail.name;
                _this.price = _this.orderdetail.originalprice;
                _this.quantity = _this.orderdetail.quantity;
                _this.sample = _this.orderdetail.sample;
                _this.status = _this.orderdetail.status;
                _this.oldStatus = _this.orderdetail.status;
                _this.totalprice = _this.orderdetail.totalprice;
                _this.username = _this.orderdetail.username;
                _this.piece = _this.orderdetail.piece;
            }
            else if (response['success'] == 2) {
                _this.loadingController.dismiss();
                _this.auth.presentToast(response['message'], false, 'bottom', 2500, 'danger');
            }
            else {
                _this.loadingController.dismiss();
                _this.auth.presentToast(response['message'], false, 'bottom', 2500, 'danger');
            }
        });
    };
    AdminOrderDetailsPage.prototype.updateStatus = function () {
        var _this = this;
        this.auth.updateOrderStatus(this.order_id, this.status).then(function (response) {
            console.log(_this.oldStatus);
            console.log(_this.status);
            console.log(response);
            _this.loadingController.create({
                message: 'Updating order status',
                mode: 'ios'
            }).then(function (res) {
                res.present();
                res.onDidDismiss().then(function (dis) {
                    if (_this.sendMsg) {
                        if (_this.oldStatus != _this.status) {
                            _this.loadingController.create({
                                message: 'Sending message to the user',
                                mode: 'ios'
                            }).then(function (ress) {
                                ress.present();
                                ress.onDidDismiss().then(function (diss) {
                                    _this.ngOnInit();
                                });
                            });
                            var options = {
                                replaceLineBreaks: true,
                                android: {
                                    intent: '' // send SMS with the native android SMS messaging
                                    // intent: '' // send SMS without opening any other app
                                }
                            };
                            // tslint:disable-next-line:max-line-length
                            var sendMsg = 'Hello, Your order is updated by owner. \n';
                            sendMsg = sendMsg + 'Order Number: ' + _this.order_id + '\n';
                            sendMsg = sendMsg + 'Current Status: ' + _this.status + '\n';
                            sendMsg = sendMsg + 'Please vist My Orders page';
                            _this.sms.send('+91' + _this.mobile, sendMsg, options).then(function () {
                                _this.loadingController.dismiss();
                                _this.auth.presentToast('Message sent to the user', false, 'bottom', 1000, 'success');
                            }, function (e) {
                                _this.loadingController.dismiss();
                                alert(e);
                                _this.auth.presentToast('Message not sent! Send it manually', false, 'bottom', 1500, 'danger');
                            });
                        }
                        else {
                            _this.ngOnInit();
                        }
                    }
                    else {
                        _this.ngOnInit();
                    }
                });
            });
            if (response) {
                setTimeout(function () {
                    _this.loadingController.dismiss();
                }, 1500);
            }
            if (response['success'] == 1) {
                _this.auth.presentToast(response['message'], false, 'bottom', 1000, 'success');
                _this.sendMsg = true;
            }
            else if (response['success'] == 2) {
                _this.auth.presentToast(response['message'], false, 'bottom', 2500, 'danger');
                _this.sendMsg = false;
            }
            else {
                _this.auth.presentToast(response['message'], false, 'bottom', 1000, 'danger');
                _this.sendMsg = false;
            }
        });
    };
    AdminOrderDetailsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
        { type: _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_5__["SMS"] }
    ]; };
    AdminOrderDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-order-details',
            template: __webpack_require__(/*! raw-loader!./admin-order-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/admin/admin-order-details/admin-order-details.page.html"),
            styles: [__webpack_require__(/*! ./admin-order-details.page.scss */ "./src/app/pages/admin/admin-order-details/admin-order-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
            _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_5__["SMS"]])
    ], AdminOrderDetailsPage);
    return AdminOrderDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-admin-admin-order-details-admin-order-details-module-es5.js.map