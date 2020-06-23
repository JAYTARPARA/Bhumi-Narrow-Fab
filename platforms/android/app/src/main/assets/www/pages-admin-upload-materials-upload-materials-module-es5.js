(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-upload-materials-upload-materials-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/admin/upload-materials/upload-materials.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/admin/upload-materials/upload-materials.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border class=\"animated fadeInDown\">\n  <ion-toolbar color='dark' mode=\"ios\">\n    <ion-title>Upload Materials</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button autoHide=\"false\"></ion-menu-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class='ion-padding material-upload'>\n  <form>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Material Owner</ion-label>\n          <ion-select mode=\"ios\" interface=\"action-sheet\" placeholder=\"Select Owner\" name=\"owner\" [selectedText]=\"owner\" [(ngModel)]=\"owner\">\n            <ion-select-option *ngFor=\"let mowner of materialOwner\" value=\"{{mowner.name}}\">\n              {{mowner.name}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Material Type</ion-label>\n          <ion-select mode=\"ios\" interface=\"action-sheet\" placeholder=\"Select Type\" name=\"type\" [selectedText]=\"type\" [(ngModel)]=\"type\">\n            <ion-select-option *ngFor=\"let mtype of materialType\" value=\"{{mtype.name}}\">\n              {{mtype.name}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label position=\"stacked\">Material Name: </ion-label>\n          <ion-input type=\"text\" name=\"name\" mode=\"md\" [(ngModel)]=\"name\" placeholder=\"AU9 Material\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label position=\"stacked\">Material ID: </ion-label>\n          <ion-input type=\"text\" name=\"mid\" mode=\"md\" [(ngModel)]=\"mid\" placeholder=\"AU9\" style=\"text-transform: uppercase;\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label position=\"stacked\">Material Color: </ion-label>\n          <ion-input type=\"text\" name=\"color\" mode=\"md\" [(ngModel)]=\"color\" placeholder=\"Blue\" style=\"text-transform: capitalize;\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    \n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label position=\"stacked\">Material Price: </ion-label>\n          <ion-input type=\"text\" name=\"price\" mode=\"md\" [(ngModel)]=\"price\" placeholder=\"125/27\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Slider</ion-label>\n          <ion-select mode=\"ios\" interface=\"action-sheet\" placeholder=\"Slider\" name=\"slider\" [selectedText]=\"slider\" [(ngModel)]=\"slider\">\n            <ion-select-option *ngFor=\"let slider of sliderOpt\" value=\"{{slider.name}}\">\n              {{slider.name}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-label position=\"stacked\">Material Image: </ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-button fill=\"outline\" color=\"dark\" (click)='AccessCamera()'>\n          <ion-icon name='camera'>Camera</ion-icon>\n        </ion-button>\n      </ion-col>\n\n      <ion-col>\n        <ion-button fill=\"outline\" color=\"dark\" (click)='AccessGallery()'>\n            <ion-icon name='image'>Gallery</ion-icon>\n          </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-img [src]='base64Image' *ngIf='base64Image'></ion-img>\n    <ion-button color='dark' class=\"uploadbtn\" *ngIf='base64Image' (click)='upload()' expand=\"block\" fill=\"outline\" type=\"submit\">UPLOAD MATERIAL</ion-button>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/admin/upload-materials/upload-materials.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/admin/upload-materials/upload-materials.module.ts ***!
  \*************************************************************************/
/*! exports provided: UploadMaterialsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadMaterialsPageModule", function() { return UploadMaterialsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _upload_materials_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./upload-materials.page */ "./src/app/pages/admin/upload-materials/upload-materials.page.ts");







var routes = [
    {
        path: '',
        component: _upload_materials_page__WEBPACK_IMPORTED_MODULE_6__["UploadMaterialsPage"]
    }
];
var UploadMaterialsPageModule = /** @class */ (function () {
    function UploadMaterialsPageModule() {
    }
    UploadMaterialsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_upload_materials_page__WEBPACK_IMPORTED_MODULE_6__["UploadMaterialsPage"]]
        })
    ], UploadMaterialsPageModule);
    return UploadMaterialsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/admin/upload-materials/upload-materials.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/admin/upload-materials/upload-materials.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".uploadbtn {\n  margin-top: 15px;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vdXBsb2FkLW1hdGVyaWFscy9DOlxcUHJvamVjdHNcXE15IElvbmljIFByb2plY3RzXFxiaHVtaW5hcnJvd2ZhYi9zcmNcXGFwcFxccGFnZXNcXGFkbWluXFx1cGxvYWQtbWF0ZXJpYWxzXFx1cGxvYWQtbWF0ZXJpYWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWRtaW4vdXBsb2FkLW1hdGVyaWFscy91cGxvYWQtbWF0ZXJpYWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRtaW4vdXBsb2FkLW1hdGVyaWFscy91cGxvYWQtbWF0ZXJpYWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cGxvYWRidG4ge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGhlaWdodDogNDBweDtcclxufSIsIi51cGxvYWRidG4ge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBoZWlnaHQ6IDQwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/admin/upload-materials/upload-materials.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/admin/upload-materials/upload-materials.page.ts ***!
  \***********************************************************************/
/*! exports provided: UploadMaterialsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadMaterialsPage", function() { return UploadMaterialsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");







var UploadMaterialsPage = /** @class */ (function () {
    function UploadMaterialsPage(auth, nav, platform, camera, transfer, loadingController, menu, nativePageTransitions) {
        this.auth = auth;
        this.nav = nav;
        this.platform = platform;
        this.camera = camera;
        this.transfer = transfer;
        this.loadingController = loadingController;
        this.menu = menu;
        this.nativePageTransitions = nativePageTransitions;
        this.owner = 'Bhumi Narrow Fab';
        this.type = 'Fancy';
        this.slider = 'No';
        this.sliderOpt = [
            {
                name: 'No',
            },
            {
                name: 'Yes',
            },
        ];
        this.materialOwner = [
            {
                name: 'Bhumi Narrow Fab',
            },
            {
                name: 'Matrushree Lace',
            },
            {
                name: '23 Needle',
            },
        ];
        this.materialType = [
            {
                name: 'Fancy',
            },
            {
                name: 'Needle Lace',
            },
            {
                name: 'Moti Lace',
            },
            {
                name: 'Crosset',
            },
            {
                name: 'Cut Work',
            },
            {
                name: 'Shum Shumya Lace',
            },
            {
                name: 'Jhalar Lace',
            },
        ];
    }
    UploadMaterialsPage.prototype.ngOnInit = function () {
        this.menu.enable(true, 'admin');
    };
    UploadMaterialsPage.prototype.ionViewWillEnter = function () {
        this.nativePageTransitions.slide(this.auth.optionsRight)
            .then()
            .catch(function (errr) {
            console.log(errr);
        });
    };
    UploadMaterialsPage.prototype.AccessCamera = function () {
        var _this = this;
        this.camera.getPicture({
            targetWidth: 512,
            targetHeight: 512,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL
        }).then(function (imageData) {
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.base64Image);
        }, function (err) {
            console.log(err);
        });
    };
    UploadMaterialsPage.prototype.AccessGallery = function () {
        var _this = this;
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.DATA_URL
        }).then(function (imageData) {
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
            console.log(_this.base64Image);
        }, function (err) {
            console.log(err);
        });
    };
    UploadMaterialsPage.prototype.capitalizeString = function (word) {
        return word[0].toUpperCase() + word.substr(1).toLowerCase();
    };
    UploadMaterialsPage.prototype.upload = function () {
        var _this = this;
        var name = this.name;
        var mid = this.mid;
        var color = this.color;
        var price = this.price;
        var mowner = this.owner;
        var mtype = this.type;
        var slideropt = this.slider;
        // tslint:disable-next-line:max-line-length
        if (name == undefined || mid == undefined || mtype == undefined || color == undefined || price == undefined || mowner == undefined || slideropt == undefined || name == '' || mid == '' || mtype == '' || color == '' || price == '' || mowner == '' || slideropt == '') {
            this.auth.presentToast('Please fill all required fields', false, 'bottom', 1000, 'danger');
        }
        else {
            mid = mid.toUpperCase();
            color = this.capitalizeString(color);
            this.loadingController.create({
                message: 'Uploading material',
                mode: 'ios'
            }).then(function (res) {
                res.present();
                res.onDidDismiss().then(function (dis) {
                });
            });
            var imgName = Math.floor(Date.now() / 1000);
            var fileTransfer = this.transfer.create();
            var options = {
                fileKey: 'photo',
                fileName: imgName + '.jpg',
                chunkedMode: false,
                mimeType: 'image/jpeg',
                headers: {}
            };
            // tslint:disable-next-line:max-line-length
            fileTransfer.upload(this.base64Image, "https://jaytarpara.in/mysql.php?callapi=1&process=uploadMaterial&name=" + name + "&mid=" + mid + "&color=" + color + "&price=" + price + "&mowner=" + mowner + "&material_type=" + mtype + "&slider=" + slideropt, options).then(function (result) {
                _this.loadingController.dismiss();
                if (JSON.parse(JSON.parse(JSON.stringify(result.response)))['success'] == 1) {
                    _this.auth.adminTotalMaterials++;
                    _this.auth.presentToast(JSON.parse(JSON.parse(JSON.stringify(result.response)))['message'], false, 'bottom', 1000, 'success');
                    _this.nav.navigateForward('/all-materials');
                }
                else {
                    _this.auth.presentToast(JSON.parse(JSON.parse(JSON.stringify(result.response)))['message'], false, 'bottom', 1000, 'danger');
                }
            }, function (error) {
                console.log('error' + JSON.stringify(error));
            });
        }
    };
    UploadMaterialsPage.ctorParameters = function () { return [
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] },
        { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__["FileTransfer"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_6__["NativePageTransitions"] }
    ]; };
    UploadMaterialsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload-materials',
            template: __webpack_require__(/*! raw-loader!./upload-materials.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/admin/upload-materials/upload-materials.page.html"),
            styles: [__webpack_require__(/*! ./upload-materials.page.scss */ "./src/app/pages/admin/upload-materials/upload-materials.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_5__["FileTransfer"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_6__["NativePageTransitions"]])
    ], UploadMaterialsPage);
    return UploadMaterialsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-admin-upload-materials-upload-materials-module-es5.js.map