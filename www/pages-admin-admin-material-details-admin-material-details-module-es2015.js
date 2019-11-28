(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-admin-material-details-admin-material-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/admin/admin-material-details/admin-material-details.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/admin/admin-material-details/admin-material-details.page.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border class=\"animated fadeInDown\">\n  <ion-toolbar color='dark' mode=\"ios\">\n    <ion-title>Material Detail</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button autoHide=\"false\"></ion-menu-button>\n      </ion-buttons>\n      <ion-buttons slot=\"end\">\n        <ion-button href=\"all-materials\"><ion-icon name=\"close\"></ion-icon></ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class='ion-padding material-upload'>\n  <form>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Material Owner</ion-label>\n          <ion-select mode=\"ios\" interface=\"action-sheet\" placeholder=\"Select Owner\" name=\"owner\" [selectedText]=\"owner\" [(ngModel)]=\"owner\">\n            <ion-select-option *ngFor=\"let mowner of materialOwner\" value=\"{{mowner.name}}\">\n              {{mowner.name}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label position=\"stacked\">Material Name: </ion-label>\n          <ion-input type=\"text\" name=\"name\" mode=\"md\" [(ngModel)]=\"name\" placeholder=\"AU9 Material\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label position=\"stacked\">Material ID: </ion-label>\n          <ion-input type=\"text\" name=\"mid\" mode=\"md\" [(ngModel)]=\"mid\" placeholder=\"AU9\" style=\"text-transform: uppercase;\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label position=\"stacked\">Material Color: </ion-label>\n          <ion-input type=\"text\" name=\"color\" mode=\"md\" [(ngModel)]=\"color\" placeholder=\"Blue\" style=\"text-transform: capitalize;\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    \n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label position=\"stacked\">Material Price: </ion-label>\n          <ion-input type=\"text\" name=\"price\" mode=\"md\" [(ngModel)]=\"price\" placeholder=\"125/27\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-label position=\"stacked\">Material Image: </ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-button fill=\"outline\" color=\"dark\" (click)='AccessCamera()'>\n          <ion-icon name='camera'>Camera</ion-icon>\n        </ion-button>\n      </ion-col>\n\n      <ion-col>\n        <ion-button fill=\"outline\" color=\"dark\" (click)='AccessGallery()'>\n            <ion-icon name='image'>Gallery</ion-icon>\n          </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-img [src]='base64Image' *ngIf='base64Image && !base64ImageUpdate'></ion-img>\n    <ion-img [src]='base64ImageUpdate' *ngIf='base64ImageUpdate'></ion-img>\n    <ion-button color='dark' class=\"uploadbtn\" (click)='update()' expand=\"block\" fill=\"outline\" type=\"submit\">UPDATE MATERIAL</ion-button>\n    <ion-button color='danger' class=\"uploadbtn\" (click)='delete()' expand=\"block\" fill=\"outline\">DELETE MATERIAL</ion-button>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/admin/admin-material-details/admin-material-details.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/admin/admin-material-details/admin-material-details.module.ts ***!
  \*************************************************************************************/
/*! exports provided: AdminMaterialDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMaterialDetailsPageModule", function() { return AdminMaterialDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _admin_material_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-material-details.page */ "./src/app/pages/admin/admin-material-details/admin-material-details.page.ts");







const routes = [
    {
        path: '',
        component: _admin_material_details_page__WEBPACK_IMPORTED_MODULE_6__["AdminMaterialDetailsPage"]
    }
];
let AdminMaterialDetailsPageModule = class AdminMaterialDetailsPageModule {
};
AdminMaterialDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_admin_material_details_page__WEBPACK_IMPORTED_MODULE_6__["AdminMaterialDetailsPage"]]
    })
], AdminMaterialDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/admin/admin-material-details/admin-material-details.page.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/admin/admin-material-details/admin-material-details.page.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".uploadbtn {\n  margin-top: 15px;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tbWF0ZXJpYWwtZGV0YWlscy9DOlxcUHJvamVjdHNcXE15IElvbmljIFByb2plY3RzXFxiaHVtaW5hcnJvd2ZhYi9zcmNcXGFwcFxccGFnZXNcXGFkbWluXFxhZG1pbi1tYXRlcmlhbC1kZXRhaWxzXFxhZG1pbi1tYXRlcmlhbC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tbWF0ZXJpYWwtZGV0YWlscy9hZG1pbi1tYXRlcmlhbC1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tbWF0ZXJpYWwtZGV0YWlscy9hZG1pbi1tYXRlcmlhbC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cGxvYWRidG4ge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGhlaWdodDogNDBweDtcclxufSIsIi51cGxvYWRidG4ge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBoZWlnaHQ6IDQwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/admin/admin-material-details/admin-material-details.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/admin/admin-material-details/admin-material-details.page.ts ***!
  \***********************************************************************************/
/*! exports provided: AdminMaterialDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMaterialDetailsPage", function() { return AdminMaterialDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");







let AdminMaterialDetailsPage = class AdminMaterialDetailsPage {
    constructor(activatedRoute, auth, camera, transfer, loadingController, alertCtrl, router, menu) {
        this.activatedRoute = activatedRoute;
        this.auth = auth;
        this.camera = camera;
        this.transfer = transfer;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.menu = menu;
        this.materialOwner = [
            {
                name: 'Bhumi Narrow Fab',
            },
            {
                name: 'Matrushree Lace',
            },
        ];
    }
    ngOnInit() {
        this.menu.enable(true, 'admin');
        this.auth.getAdminAllTotal().then(response => {
            if (response['success']) {
                console.log(response);
                this.auth.adminTotalOrders = response['totalOrders'];
                this.auth.adminTotalUsers = response['totalUsers'];
                this.auth.adminTotalMaterials = response['totalMaterials'];
            }
            else {
                this.auth.adminTotalOrders = 0;
                this.auth.adminTotalUsers = 0;
                this.auth.adminTotalMaterials = 0;
            }
        });
    }
    ionViewDidEnter() {
        this.loadingController.create({
            message: 'Loading material data',
            mode: 'ios'
        }).then((res) => {
            res.present();
        }).catch((e) => {
            this.loadingController.dismiss();
        });
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.auth.getMaterialDetails(this.id).then(response => {
            if (response['success'] == 1) {
                this.material = response['material'][0];
                console.log(this.material);
                this.name = this.material['name'];
                this.mid = this.material['material_id'];
                this.price = this.material['price'].slice(0, this.material['price'].length - 1);
                this.owner = this.material['company'];
                this.color = this.material['color'];
                this.base64Image = 'https://bhuminarrowfab.000webhostapp.com/images/materials/' + this.material['image'];
                this.loadingController.dismiss();
            }
            else if (response['success'] == 2) {
                this.loadingController.dismiss();
                this.auth.presentToast(response['message'], false, 'bottom', 2500, 'danger');
            }
            else {
                this.loadingController.dismiss();
            }
        }).catch((err) => {
            this.loadingController.dismiss();
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
            this.base64ImageUpdate = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            console.log(err);
        });
    }
    AccessGallery() {
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.DATA_URL
        }).then((imageData) => {
            this.base64ImageUpdate = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            console.log(err);
        });
    }
    capitalizeString(word) {
        return word[0].toUpperCase() + word.substr(1).toLowerCase();
    }
    update() {
        const name = this.name;
        let mid = this.mid;
        let color = this.color;
        const price = this.price;
        const mowner = this.owner;
        // tslint:disable-next-line:max-line-length
        if (name == undefined || mid == undefined || color == undefined || price == undefined || mowner == undefined || name == '' || mid == '' || color == '' || price == '' || mowner == '') {
            this.auth.presentToast('Please fill all required fields', false, 'bottom', 1000, 'danger');
        }
        else {
            mid = mid.toUpperCase();
            color = this.capitalizeString(color);
            this.loadingController.create({
                message: 'Updating material',
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
            if (this.base64ImageUpdate) {
                // tslint:disable-next-line:max-line-length
                fileTransfer.upload(this.base64ImageUpdate, `https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=updateMaterial&id=${this.id}&name=${name}&mid=${mid}&color=${color}&mowner=${mowner}&price=${price}`, options).then(result => {
                    this.loadingController.dismiss();
                    if (JSON.parse(JSON.parse(JSON.stringify(result.response)))['success'] == 1) {
                        this.auth.presentToast(JSON.parse(JSON.parse(JSON.stringify(result.response)))['message'], false, 'bottom', 1000, 'success');
                    }
                    else {
                        this.auth.presentToast(JSON.parse(JSON.parse(JSON.stringify(result.response)))['message'], false, 'bottom', 1000, 'danger');
                    }
                }, (error) => {
                    console.log('error' + JSON.stringify(error));
                });
            }
            else {
                this.auth.updateMaterialDetailOnly(this.id, this.name, mid, color, mowner, this.price).then(response => {
                    this.loadingController.dismiss();
                    if (response['success'] == 1) {
                        this.auth.presentToast(response['message'], false, 'bottom', 1000, 'success');
                    }
                    else if (response['success'] == 2) {
                        this.loadingController.dismiss();
                        this.auth.presentToast(response['message'], false, 'bottom', 2500, 'danger');
                    }
                    else {
                        this.auth.presentToast(response['message'], false, 'bottom', 1000, 'danger');
                    }
                });
            }
        }
    }
    delete() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Confirm!',
                subHeader: 'Are you sure you want to delete this material?',
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
                                message: 'Deleting material',
                                mode: 'ios'
                            }).then((res) => {
                                res.present();
                                res.onDidDismiss().then((dis) => {
                                    this.router.navigate(['/all-materials']);
                                });
                            });
                            this.auth.deleteMaterial(this.id).then(response => {
                                if (response['success'] == 1) {
                                    this.auth.presentToast(response['message'], false, 'bottom', 1000, 'success');
                                    this.auth.adminTotalMaterials--;
                                }
                                else if (response['success'] == 2) {
                                    this.loadingController.dismiss();
                                    this.auth.presentToast(response['message'], false, 'bottom', 2500, 'danger');
                                }
                                else {
                                    this.auth.presentToast(response['message'], false, 'bottom', 1000, 'danger');
                                }
                                this.loadingController.dismiss();
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
AdminMaterialDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
AdminMaterialDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-material-details',
        template: __webpack_require__(/*! raw-loader!./admin-material-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/admin/admin-material-details/admin-material-details.page.html"),
        styles: [__webpack_require__(/*! ./admin-material-details.page.scss */ "./src/app/pages/admin/admin-material-details/admin-material-details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"],
        _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
], AdminMaterialDetailsPage);



/***/ })

}]);
//# sourceMappingURL=pages-admin-admin-material-details-admin-material-details-module-es2015.js.map