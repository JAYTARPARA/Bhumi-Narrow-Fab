(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-add-orders-add-orders-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/admin/add-orders/add-orders.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/admin/add-orders/add-orders.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border class=\"animated fadeInDown\">\n  <ion-toolbar color='dark' mode=\"ios\">\n    <ion-title>Add Order</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button autoHide=\"false\"></ion-menu-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class='ion-padding material-upload'>\n  <form>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label position=\"stacked\">Party Name: </ion-label>\n          <ion-input type=\"text\" name=\"partyname\" mode=\"md\" [(ngModel)]=\"partyname\" placeholder=\"Bhumi Narrow Fab\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label position=\"stacked\">Party Mobile: </ion-label>\n          <ion-input type=\"number\" name=\"partymobile\" mode=\"md\" [(ngModel)]=\"partymobile\" placeholder=\"9824514524\" maxlength=\"10\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label position=\"stacked\">Party Address: </ion-label>\n          <ion-textarea autoGrow=true placeholder=\"Party Address\" mode=\"md\" clearInput name=\"partyaddress\" [(ngModel)]=\"partyaddress\" placeholder=\"Address*\"></ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    \n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label position=\"stacked\">Quantity: </ion-label>\n          <ion-input type=\"number\" name=\"quantity\" placeholder=\"Enter quantity (e.g. 1250)\" [(ngModel)]=\"quantity\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label position=\"stacked\">Pieces: </ion-label>\n          <ion-input type=\"number\" name=\"pieces\" placeholder=\"Enter pieces (e.g. 9)\" [(ngModel)]=\"pieces\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label position=\"stacked\">Sample: </ion-label>\n          <ion-toggle name=\"sample\" color=\"success\" [(ngModel)]=\"sample\"></ion-toggle>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-label position=\"stacked\">Material Image: </ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-button fill=\"outline\" color=\"dark\" (click)='AccessCamera()'>\n          <ion-icon name='camera'>Camera</ion-icon>\n        </ion-button>\n      </ion-col>\n\n      <ion-col>\n        <ion-button fill=\"outline\" color=\"dark\" (click)='AccessGallery()'>\n            <ion-icon name='image'>Gallery</ion-icon>\n          </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-img [src]='base64Image' *ngIf='base64Image'></ion-img>\n    <ion-button color='dark' class=\"uploadbtn\" *ngIf='base64Image' (click)='addOrder()' expand=\"block\" fill=\"outline\" type=\"submit\">ADD ORDER</ion-button>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/admin/add-orders/add-orders.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/admin/add-orders/add-orders.module.ts ***!
  \*************************************************************/
/*! exports provided: AddOrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOrdersPageModule", function() { return AddOrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-orders.page */ "./src/app/pages/admin/add-orders/add-orders.page.ts");







const routes = [
    {
        path: '',
        component: _add_orders_page__WEBPACK_IMPORTED_MODULE_6__["AddOrdersPage"]
    }
];
let AddOrdersPageModule = class AddOrdersPageModule {
};
AddOrdersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_add_orders_page__WEBPACK_IMPORTED_MODULE_6__["AddOrdersPage"]]
    })
], AddOrdersPageModule);



/***/ }),

/***/ "./src/app/pages/admin/add-orders/add-orders.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/admin/add-orders/add-orders.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".uploadbtn {\n  margin-top: 15px;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vYWRkLW9yZGVycy9DOlxcUHJvamVjdHNcXE15IElvbmljIFByb2plY3RzXFxiaHVtaW5hcnJvd2ZhYi9zcmNcXGFwcFxccGFnZXNcXGFkbWluXFxhZGQtb3JkZXJzXFxhZGQtb3JkZXJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWRtaW4vYWRkLW9yZGVycy9hZGQtb3JkZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRtaW4vYWRkLW9yZGVycy9hZGQtb3JkZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cGxvYWRidG4ge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGhlaWdodDogNDBweDtcclxufSIsIi51cGxvYWRidG4ge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBoZWlnaHQ6IDQwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/admin/add-orders/add-orders.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/admin/add-orders/add-orders.page.ts ***!
  \***********************************************************/
/*! exports provided: AddOrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOrdersPage", function() { return AddOrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");







let AddOrdersPage = class AddOrdersPage {
    constructor(auth, nav, platform, camera, transfer, loadingController, menu, nativePageTransitions) {
        this.auth = auth;
        this.nav = nav;
        this.platform = platform;
        this.camera = camera;
        this.transfer = transfer;
        this.loadingController = loadingController;
        this.menu = menu;
        this.nativePageTransitions = nativePageTransitions;
    }
    ngOnInit() {
        this.menu.enable(true, 'admin');
    }
    ionViewWillEnter() {
        this.nativePageTransitions.slide(this.auth.optionsRight)
            .then()
            .catch((errr) => {
            console.log(errr);
        });
    }
    AccessCamera() {
        this.camera.getPicture({
            targetWidth: 512,
            targetHeight: 512,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL
        }).then((imageData) => {
            this.base64Image = 'data:image/jpeg;base64,' + imageData;
            console.log(this.base64Image);
        }, (err) => {
            console.log(err);
        });
    }
    AccessGallery() {
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.DATA_URL
        }).then((imageData) => {
            this.base64Image = 'data:image/jpeg;base64,' + imageData;
            console.log(this.base64Image);
        }, (err) => {
            console.log(err);
        });
    }
    addOrder() {
        const partyname = this.partyname;
        const partymobile = this.partymobile;
        const partyaddress = this.partyaddress;
        const quantity = this.quantity;
        let pieces = this.pieces;
        let sample = this.sample;
        if (pieces == undefined) {
            pieces = 0;
        }
        if (sample == undefined) {
            sample = false;
        }
        // tslint:disable-next-line:max-line-length
        if (partyname == undefined || partymobile == undefined || partyaddress == undefined || quantity == undefined || partyname == '' || partymobile == '' || partyaddress == '' || quantity == '') {
            this.auth.presentToast('Please fill all required fields', false, 'bottom', 1000, 'danger');
        }
        else {
            this.loadingController.create({
                message: 'Adding order',
                mode: 'ios'
            }).then((res) => {
                res.present();
                res.onDidDismiss().then((dis) => {
                });
            });
            const imgName = Math.floor(Date.now() / 1000);
            const fileTransfer = this.transfer.create();
            const options = {
                fileKey: 'photo',
                fileName: imgName + '.jpg',
                chunkedMode: false,
                mimeType: 'image/jpeg',
                headers: {}
            };
            // tslint:disable-next-line:max-line-length
            console.log(`https://jaytarpara.in/mysql.php?callapi=1&process=addOrder&partyname=${partyname}&partymobile=${partymobile}&partyaddress=${partyaddress}&quantity=${quantity}&pieces=${pieces}&sample=${sample}`);
            // tslint:disable-next-line:max-line-length
            fileTransfer.upload(this.base64Image, `https://jaytarpara.in/mysql.php?callapi=1&process=addOrder&partyname=${partyname}&partymobile=${partymobile}&partyaddress=${partyaddress}&quantity=${quantity}&pieces=${pieces}&sample=${sample}`, options).then(result => {
                this.loadingController.dismiss();
                if (JSON.parse(JSON.parse(JSON.stringify(result.response)))['success'] == 1) {
                    this.auth.presentToast(JSON.parse(JSON.parse(JSON.stringify(result.response)))['message'], false, 'bottom', 1000, 'success');
                    this.nav.navigateForward('/whatsapp-orders');
                }
                else {
                    this.auth.presentToast(JSON.parse(JSON.parse(JSON.stringify(result.response)))['message'], false, 'bottom', 1000, 'danger');
                }
            }, (error) => {
                console.log('error' + JSON.stringify(error));
            });
        }
    }
};
AddOrdersPage.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__["FileTransfer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_6__["NativePageTransitions"] }
];
AddOrdersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-orders',
        template: __webpack_require__(/*! raw-loader!./add-orders.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/admin/add-orders/add-orders.page.html"),
        styles: [__webpack_require__(/*! ./add-orders.page.scss */ "./src/app/pages/admin/add-orders/add-orders.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"],
        _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__["FileTransfer"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_6__["NativePageTransitions"]])
], AddOrdersPage);



/***/ })

}]);
//# sourceMappingURL=pages-admin-add-orders-add-orders-module-es2015.js.map