(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-admin-material-details-admin-material-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/admin/admin-material-details/admin-material-details.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/admin/admin-material-details/admin-material-details.page.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border class=\"animated fadeInDown\">\n  <ion-toolbar color='dark' mode=\"ios\">\n    <ion-title>Material Detail</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button autoHide=\"false\"></ion-menu-button>\n      </ion-buttons>\n      <ion-buttons slot=\"end\">\n        <ion-button [routerLink]=\"['/', 'all-materials']\"><ion-icon name=\"close\"></ion-icon></ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class='ion-padding material-upload'>\n  <form>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Material Owner</ion-label>\n          <ion-select mode=\"ios\" interface=\"action-sheet\" placeholder=\"Select Owner\" name=\"owner\" [selectedText]=\"owner\" [(ngModel)]=\"owner\">\n            <ion-select-option *ngFor=\"let mowner of materialOwner\" value=\"{{mowner.name}}\">\n              {{mowner.name}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Material Type</ion-label>\n          <ion-select mode=\"ios\" interface=\"action-sheet\" placeholder=\"Select Type\" name=\"type\" [selectedText]=\"type\" [(ngModel)]=\"type\">\n            <ion-select-option *ngFor=\"let mtype of materialType\" value=\"{{mtype.name}}\">\n              {{mtype.name}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label position=\"stacked\">Material Name: </ion-label>\n          <ion-input type=\"text\" name=\"name\" mode=\"md\" [(ngModel)]=\"name\" placeholder=\"AU9 Material\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label position=\"stacked\">Material ID: </ion-label>\n          <ion-input type=\"text\" name=\"mid\" mode=\"md\" [(ngModel)]=\"mid\" placeholder=\"AU9\" style=\"text-transform: uppercase;\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label position=\"stacked\">Material Color: </ion-label>\n          <ion-input type=\"text\" name=\"color\" mode=\"md\" [(ngModel)]=\"color\" placeholder=\"Blue\" style=\"text-transform: capitalize;\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    \n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label position=\"stacked\">Material Price: </ion-label>\n          <ion-input type=\"text\" name=\"price\" mode=\"md\" [(ngModel)]=\"price\" placeholder=\"125/27\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Slider</ion-label>\n          <ion-select mode=\"ios\" interface=\"action-sheet\" placeholder=\"Slider\" name=\"slider\" [selectedText]=\"slider\" [(ngModel)]=\"slider\">\n            <ion-select-option *ngFor=\"let slider of sliderOpt\" value=\"{{slider.name}}\">\n              {{slider.name}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-label position=\"stacked\">Material Image: </ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-button fill=\"outline\" color=\"dark\" (click)='AccessCamera()'>\n          <ion-icon name='camera'>Camera</ion-icon>\n        </ion-button>\n      </ion-col>\n\n      <ion-col>\n        <ion-button fill=\"outline\" color=\"dark\" (click)='AccessGallery()'>\n            <ion-icon name='image'>Gallery</ion-icon>\n          </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-img [src]='base64Image' *ngIf='base64Image && !base64ImageUpdate'></ion-img>\n    <ion-img [src]='base64ImageUpdate' *ngIf='base64ImageUpdate'></ion-img>\n    <ion-button color='dark' class=\"uploadbtn\" (click)='update()' expand=\"block\" fill=\"outline\" type=\"submit\">UPDATE MATERIAL</ion-button>\n    <ion-button color='danger' class=\"uploadbtn\" (click)='delete()' expand=\"block\" fill=\"outline\">DELETE MATERIAL</ion-button>\n  </form>\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _admin_material_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-material-details.page */ "./src/app/pages/admin/admin-material-details/admin-material-details.page.ts");







var routes = [
    {
        path: '',
        component: _admin_material_details_page__WEBPACK_IMPORTED_MODULE_6__["AdminMaterialDetailsPage"]
    }
];
var AdminMaterialDetailsPageModule = /** @class */ (function () {
    function AdminMaterialDetailsPageModule() {
    }
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
    return AdminMaterialDetailsPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");








var AdminMaterialDetailsPage = /** @class */ (function () {
    function AdminMaterialDetailsPage(activatedRoute, auth, camera, transfer, loadingController, alertCtrl, router, menu, nativePageTransitions) {
        this.activatedRoute = activatedRoute;
        this.auth = auth;
        this.camera = camera;
        this.transfer = transfer;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.menu = menu;
        this.nativePageTransitions = nativePageTransitions;
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
    AdminMaterialDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.menu.enable(true, 'admin');
        this.auth.getAdminAllTotal().then(function (response) {
            if (response['success']) {
                console.log(response);
                _this.auth.adminTotalOrders = response['totalOrders'];
                _this.auth.adminTotalUsers = response['totalUsers'];
                _this.auth.adminTotalMaterials = response['totalMaterials'];
            }
            else {
                _this.auth.adminTotalOrders = 0;
                _this.auth.adminTotalUsers = 0;
                _this.auth.adminTotalMaterials = 0;
            }
        });
    };
    AdminMaterialDetailsPage.prototype.ionViewWillLeave = function () {
        // this.nativePageTransitions.slide(this.auth.optionsLeft)
        //   .then()
        //   .catch((errr) => {
        //     console.log(errr);
        // });
    };
    AdminMaterialDetailsPage.prototype.ionViewWillEnter = function () {
        this.nativePageTransitions.slide(this.auth.optionsRight)
            .then()
            .catch(function (errr) {
            console.log(errr);
        });
    };
    AdminMaterialDetailsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.loadingController.create({
            message: 'Loading material data',
            mode: 'ios'
        }).then(function (res) {
            res.present();
        }).catch(function (e) {
            _this.loadingController.dismiss();
        });
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.auth.getMaterialDetails(this.id).then(function (response) {
            if (response['success'] == 1) {
                _this.material = response['material'][0];
                console.log(_this.material);
                _this.name = _this.material['name'];
                _this.mid = _this.material['material_id'];
                _this.price = _this.material['price'].slice(0, _this.material['price'].length - 1);
                _this.owner = _this.material['company'];
                _this.type = _this.material['material_type'];
                _this.color = _this.material['color'];
                _this.base64Image = 'https://jaytarpara.in/images/materials/' + _this.material['image'];
                if (_this.material['slider'] == 1) {
                    _this.slider = 'Yes';
                }
                else {
                    _this.slider = 'No';
                }
                _this.loadingController.dismiss();
            }
            else if (response['success'] == 2) {
                _this.loadingController.dismiss();
                _this.auth.presentToast(response['message'], false, 'bottom', 2500, 'danger');
            }
            else {
                _this.loadingController.dismiss();
            }
        }).catch(function (err) {
            _this.loadingController.dismiss();
        });
    };
    AdminMaterialDetailsPage.prototype.AccessCamera = function () {
        var _this = this;
        this.camera.getPicture({
            targetWidth: 512,
            targetHeight: 512,
            correctOrientation: true,
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL
        }).then(function (imageData) {
            _this.base64ImageUpdate = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            console.log(err);
        });
    };
    AdminMaterialDetailsPage.prototype.AccessGallery = function () {
        var _this = this;
        this.camera.getPicture({
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            destinationType: this.camera.DestinationType.DATA_URL
        }).then(function (imageData) {
            _this.base64ImageUpdate = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            console.log(err);
        });
    };
    AdminMaterialDetailsPage.prototype.capitalizeString = function (word) {
        return word[0].toUpperCase() + word.substr(1).toLowerCase();
    };
    AdminMaterialDetailsPage.prototype.update = function () {
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
                message: 'Updating material',
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
            if (this.base64ImageUpdate) {
                // tslint:disable-next-line:max-line-length
                fileTransfer.upload(this.base64ImageUpdate, "https://jaytarpara.in/mysql.php?callapi=1&process=updateMaterial&id=" + this.id + "&name=" + name + "&mid=" + mid + "&color=" + color + "&mowner=" + mowner + "&mtype=" + mtype + "&price=" + price + "&slider=" + slideropt, options).then(function (result) {
                    _this.loadingController.dismiss();
                    if (JSON.parse(JSON.parse(JSON.stringify(result.response)))['success'] == 1) {
                        _this.auth.presentToast(JSON.parse(JSON.parse(JSON.stringify(result.response)))['message'], false, 'bottom', 1000, 'success');
                    }
                    else {
                        _this.auth.presentToast(JSON.parse(JSON.parse(JSON.stringify(result.response)))['message'], false, 'bottom', 1000, 'danger');
                    }
                }, function (error) {
                    console.log('error' + JSON.stringify(error));
                });
            }
            else {
                this.auth.updateMaterialDetailOnly(this.id, this.name, mid, color, mowner, mtype, this.price, this.slider).then(function (response) {
                    _this.loadingController.dismiss();
                    if (response['success'] == 1) {
                        _this.auth.presentToast(response['message'], false, 'bottom', 1000, 'success');
                    }
                    else if (response['success'] == 2) {
                        _this.loadingController.dismiss();
                        _this.auth.presentToast(response['message'], false, 'bottom', 2500, 'danger');
                    }
                    else {
                        _this.auth.presentToast(response['message'], false, 'bottom', 1000, 'danger');
                    }
                });
            }
        }
    };
    AdminMaterialDetailsPage.prototype.delete = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Confirm!',
                            subHeader: 'Are you sure you want to delete this material?',
                            mode: 'ios',
                            buttons: [
                                {
                                    text: 'NO',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) { }
                                }, {
                                    text: 'YES',
                                    handler: function () {
                                        _this.loadingController.create({
                                            message: 'Deleting material',
                                            mode: 'ios'
                                        }).then(function (res) {
                                            res.present();
                                            res.onDidDismiss().then(function (dis) {
                                                _this.router.navigate(['/all-materials']);
                                            });
                                        });
                                        _this.auth.deleteMaterial(_this.id).then(function (response) {
                                            if (response['success'] == 1) {
                                                _this.auth.presentToast(response['message'], false, 'bottom', 1000, 'success');
                                                _this.auth.adminTotalMaterials--;
                                            }
                                            else if (response['success'] == 2) {
                                                _this.loadingController.dismiss();
                                                _this.auth.presentToast(response['message'], false, 'bottom', 2500, 'danger');
                                            }
                                            else {
                                                _this.auth.presentToast(response['message'], false, 'bottom', 1000, 'danger');
                                            }
                                            _this.loadingController.dismiss();
                                        });
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AdminMaterialDetailsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] },
        { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_7__["NativePageTransitions"] }
    ]; };
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
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_7__["NativePageTransitions"]])
    ], AdminMaterialDetailsPage);
    return AdminMaterialDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-admin-admin-material-details-admin-material-details-module-es5.js.map