(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-whatsapp-order-details-whatsapp-order-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/admin/whatsapp-order-details/whatsapp-order-details.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/admin/whatsapp-order-details/whatsapp-order-details.page.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border class=\"animated fadeInDown\">\n  <ion-toolbar color='{{color}}' mode=\"ios\">\n    <ion-title>ID: {{ order_id }}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-back-button defaultHref=\"whatsapp-orders\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding card-background-page\">\n  <ion-card class=\"animated bounceInLeft slow\">\n    <ion-card-content>\n      <ion-chip color=\"{{color}}\">\n        <ion-icon name=\"{{icon}}\"></ion-icon>\n        <ion-label>Order is {{ status }}</ion-label>\n      </ion-chip>\n      <ion-row class=\"ion-text-left\">\n        <ion-col col-12>\n          <ion-card-title>Order ID: {{ order_id }}</ion-card-title>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <img src=\"https://jaytarpara.in/images/materials/{{image}}\">\n      </ion-row>\n      <ion-row class=\"ion-text-left\">\n        <ion-col col-12>\n          <ion-card-title><b><u>Order Details</u></b></ion-card-title>\n          <ion-card-content>\n            <b>Name: </b>{{ cust_name }}\n            <br/>\n            <b>Mobile: </b>{{ cust_mobile }}\n            <br/>\n            <b>Address: </b>{{ cust_address }}\n            <br/>\n            <b>Quantity Ordered: </b>{{ quantity }}\n            <br/>\n            <b>Pieces Ordered: </b>{{ piece }}\n            <br/>\n            <b>Sample Requested: </b>{{ sample }}\n            <br/>\n            <b>Ordered at: </b>{{ created_at }}\n          </ion-card-content>\n        </ion-col>\n      </ion-row>\n      <ion-item>\n        <ion-label>Order Status</ion-label>\n        <ion-select mode=\"ios\" interface=\"action-sheet\" placeholder=\"Select Status\" [selectedText]=\"status\" [(ngModel)]=\"status\">\n          <ion-select-option *ngFor=\"let ostatus of orderStatus\" value=\"{{ostatus.name}}\">\n            {{ostatus.name}}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-button color='dark' class=\"uploadbtn\" (click)='updateStatus()' expand=\"block\" fill=\"outline\">UPDATE STATUS</ion-button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/admin/whatsapp-order-details/whatsapp-order-details.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/admin/whatsapp-order-details/whatsapp-order-details.module.ts ***!
  \*************************************************************************************/
/*! exports provided: WhatsappOrderDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatsappOrderDetailsPageModule", function() { return WhatsappOrderDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _whatsapp_order_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./whatsapp-order-details.page */ "./src/app/pages/admin/whatsapp-order-details/whatsapp-order-details.page.ts");







const routes = [
    {
        path: '',
        component: _whatsapp_order_details_page__WEBPACK_IMPORTED_MODULE_6__["WhatsappOrderDetailsPage"]
    }
];
let WhatsappOrderDetailsPageModule = class WhatsappOrderDetailsPageModule {
};
WhatsappOrderDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_whatsapp_order_details_page__WEBPACK_IMPORTED_MODULE_6__["WhatsappOrderDetailsPage"]]
    })
], WhatsappOrderDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/admin/whatsapp-order-details/whatsapp-order-details.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/admin/whatsapp-order-details/whatsapp-order-details.page.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL3doYXRzYXBwLW9yZGVyLWRldGFpbHMvd2hhdHNhcHAtb3JkZXItZGV0YWlscy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/admin/whatsapp-order-details/whatsapp-order-details.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/admin/whatsapp-order-details/whatsapp-order-details.page.ts ***!
  \***********************************************************************************/
/*! exports provided: WhatsappOrderDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatsappOrderDetailsPage", function() { return WhatsappOrderDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/sms/ngx */ "./node_modules/@ionic-native/sms/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");







let WhatsappOrderDetailsPage = class WhatsappOrderDetailsPage {
    constructor(activatedRoute, auth, loadingController, menu, sms, socialSharing) {
        this.activatedRoute = activatedRoute;
        this.auth = auth;
        this.loadingController = loadingController;
        this.menu = menu;
        this.sms = sms;
        this.socialSharing = socialSharing;
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
    ngOnInit() {
        this.menu.enable(true, 'admin');
        // Get the details that was passed with the URL
        this.order_id = this.activatedRoute.snapshot.paramMap.get('id');
        this.loadingController.create({
            message: 'Loading order details',
            mode: 'ios'
        }).then((res) => {
            res.present();
        });
        this.auth.getWhatsappOrderByID(this.order_id).then(response => {
            if (response['success'] == 1) {
                setTimeout(() => {
                    this.loadingController.dismiss();
                }, 1000);
                this.orderdetail = response['order'][0];
                console.log(this.orderdetail);
                this.cust_address = this.orderdetail.cust_address;
                this.color = this.orderdetail.color;
                this.created_at = this.orderdetail.created_at;
                this.icon = this.orderdetail.icon;
                this.image = this.orderdetail.image;
                this.material_id = this.orderdetail.material_id;
                this.cust_mobile = this.orderdetail.cust_mobile;
                this.cust_name = this.orderdetail.cust_name;
                this.quantity = this.orderdetail.quantity;
                this.sample = this.orderdetail.sample;
                this.status = this.orderdetail.status;
                this.oldStatus = this.orderdetail.status;
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
    updateStatus() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.auth.updateWhatsappOrderStatus(this.order_id, this.status).then(response => {
                console.log(this.oldStatus);
                console.log(this.status);
                console.log(response);
                this.loadingController.create({
                    message: 'Updating order status',
                    mode: 'ios'
                }).then((res) => {
                    res.present();
                    res.onDidDismiss().then((dis) => {
                        if (this.sendMsg) {
                            if (this.oldStatus != this.status) {
                                this.loadingController.create({
                                    message: 'Sending message to the user',
                                    mode: 'ios'
                                }).then((ress) => {
                                    ress.present();
                                    ress.onDidDismiss().then((diss) => {
                                        this.ngOnInit();
                                    });
                                });
                                let sendMsg = 'Hello, Your order is updated by owner. \r\n';
                                sendMsg = sendMsg + 'Order Number: ' + this.order_id + '\r\n';
                                sendMsg = sendMsg + 'Current Status: ' + this.status + '\r\n';
                                this.socialSharing.shareViaWhatsAppToReceiver('+91' + this.cust_mobile, sendMsg, '', '').then(() => {
                                    // Success
                                    this.loadingController.dismiss();
                                    this.auth.presentToast('Message sent to the user', false, 'bottom', 1000, 'success');
                                }).catch((e) => {
                                    // Error!
                                    this.loadingController.dismiss();
                                    this.auth.presentToast('Message not sent! Send it manually', false, 'bottom', 1500, 'danger');
                                    console.log(e);
                                });
                            }
                            else {
                                this.ngOnInit();
                            }
                        }
                        else {
                            this.ngOnInit();
                        }
                    });
                });
                if (response) {
                    setTimeout(() => {
                        this.loadingController.dismiss();
                    }, 1500);
                }
                if (response['success'] == 1) {
                    this.auth.presentToast(response['message'], false, 'bottom', 1000, 'success');
                    this.sendMsg = true;
                }
                else if (response['success'] == 2) {
                    this.auth.presentToast(response['message'], false, 'bottom', 2500, 'danger');
                    this.sendMsg = false;
                }
                else {
                    this.auth.presentToast(response['message'], false, 'bottom', 1000, 'danger');
                    this.sendMsg = false;
                }
            });
        });
    }
};
WhatsappOrderDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_5__["SMS"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"] }
];
WhatsappOrderDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-whatsapp-order-details',
        template: __webpack_require__(/*! raw-loader!./whatsapp-order-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/admin/whatsapp-order-details/whatsapp-order-details.page.html"),
        styles: [__webpack_require__(/*! ./whatsapp-order-details.page.scss */ "./src/app/pages/admin/whatsapp-order-details/whatsapp-order-details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
        _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_5__["SMS"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"]])
], WhatsappOrderDetailsPage);



/***/ })

}]);
//# sourceMappingURL=pages-admin-whatsapp-order-details-whatsapp-order-details-module-es2015.js.map