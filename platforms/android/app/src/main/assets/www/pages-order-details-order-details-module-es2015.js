(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-details-order-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/order-details/order-details.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/order-details/order-details.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border class=\"animated fadeInDown\">\n  <ion-toolbar color='{{color}}' mode=\"ios\">\n    <ion-title>ID: {{ order_id }}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button href=\"orders/mobile/{{mobile}}\"><ion-icon name=\"close\"></ion-icon></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding card-background-page\">\n  <ion-card class=\"animated bounceInLeft slow\">\n    <ion-card-content>\n      <ion-chip color=\"{{color}}\">\n        <ion-icon name=\"{{icon}}\"></ion-icon>\n        <ion-label>Order is {{ status }}</ion-label>\n      </ion-chip>\n      <ion-row class=\"ion-text-left\">\n        <ion-col col-12>\n          <ion-card-title>Order ID: {{ order_id }}</ion-card-title>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <img src=\"https://jaytarpara.in/images/materials/{{image}}\">\n      </ion-row>\n      <ion-row class=\"ion-text-left\">\n        <ion-col col-12>\n          <ion-card-title><b><u>Material Details</u></b></ion-card-title>\n          <ion-card-content>\n            <b>Material Name: </b>{{ name }}\n            <br/>\n            <b>Material ID: </b>{{ material_id }}\n            <br/>\n            <b>Material Price: </b>&#8377;{{ price }}\n            <br/>\n            <b>Ordered at: </b>{{ created_at }}\n          </ion-card-content>\n\n          <ion-card-title><b><u>Order Details</u></b></ion-card-title>\n          <ion-card-content>\n              <b>Name: </b>{{ username }}\n              <br/>\n              <b>Mobile: </b>{{ mobile }}\n              <br/>\n              <b>Address: </b>{{ address }}\n              <br/>\n              <b>Quantity Ordered: </b>{{ quantity }}\n              <br/>\n              <b>Pieces Ordered: </b>{{ piece }}\n              <br/>\n              <b>Sample Requested: </b>{{ sample }}\n              <br/>\n              <b>Order Total: </b>&#8377;{{ totalprice }}\n            </ion-card-content>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/order-details/order-details.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/order-details/order-details.module.ts ***!
  \*************************************************************/
/*! exports provided: OrderDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsPageModule", function() { return OrderDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _order_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-details.page */ "./src/app/pages/order-details/order-details.page.ts");







const routes = [
    {
        path: '',
        component: _order_details_page__WEBPACK_IMPORTED_MODULE_6__["OrderDetailsPage"]
    }
];
let OrderDetailsPageModule = class OrderDetailsPageModule {
};
OrderDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_order_details_page__WEBPACK_IMPORTED_MODULE_6__["OrderDetailsPage"]]
    })
], OrderDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/order-details/order-details.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/order-details/order-details.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/order-details/order-details.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/order-details/order-details.page.ts ***!
  \***********************************************************/
/*! exports provided: OrderDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsPage", function() { return OrderDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");






let OrderDetailsPage = class OrderDetailsPage {
    constructor(activatedRoute, auth, loadingController, menu, nativePageTransitions) {
        this.activatedRoute = activatedRoute;
        this.auth = auth;
        this.loadingController = loadingController;
        this.menu = menu;
        this.nativePageTransitions = nativePageTransitions;
    }
    ionViewWillEnter() {
        this.nativePageTransitions.slide(this.auth.optionsRight)
            .then()
            .catch((errr) => {
            console.log(errr);
        });
    }
    ngOnInit() {
        this.menu.enable(true, 'user');
        // Get the details that was passed with the URL
        this.order_id = this.activatedRoute.snapshot.paramMap.get('orderid');
        this.loadingController.create({
            message: 'Loading order details',
            mode: 'ios'
        }).then((res) => {
            res.present();
        });
        this.auth.getOrderByID(this.order_id).then(response => {
            if (response['success'] == 1) {
                setTimeout(() => {
                    this.loadingController.dismiss();
                }, 1000);
                this.orderdetail = response['order'][0];
                console.log(this.orderdetail);
                this.address = this.orderdetail.address;
                this.color = this.orderdetail.color;
                this.created_at = this.orderdetail.created_at;
                this.icon = this.orderdetail.icon;
                this.image = this.orderdetail.image;
                this.material_id = this.orderdetail.material_id;
                this.mobile = this.orderdetail.mobile;
                this.name = this.orderdetail.name;
                this.price = this.orderdetail.originalprice;
                this.quantity = this.orderdetail.quantity;
                this.sample = this.orderdetail.sample;
                this.status = this.orderdetail.status;
                this.totalprice = this.orderdetail.totalprice;
                this.username = this.orderdetail.username;
                this.piece = this.orderdetail.piece;
            }
            else if (response['success'] == 2) {
                this.loadingController.dismiss();
                this.auth.presentToast(response['message'], false, 'bottom', 2500, 'danger');
            }
            else {
                this.loadingController.dismiss();
                this.auth.presentToast(response['message'], false, 'bottom', 2500, 'danger');
            }
        });
    }
};
OrderDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_5__["NativePageTransitions"] }
];
OrderDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-details',
        template: __webpack_require__(/*! raw-loader!./order-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/order-details/order-details.page.html"),
        styles: [__webpack_require__(/*! ./order-details.page.scss */ "./src/app/pages/order-details/order-details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
        _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_5__["NativePageTransitions"]])
], OrderDetailsPage);



/***/ })

}]);
//# sourceMappingURL=pages-order-details-order-details-module-es2015.js.map