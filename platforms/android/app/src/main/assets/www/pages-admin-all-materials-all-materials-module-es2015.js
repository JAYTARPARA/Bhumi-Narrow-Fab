(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-admin-all-materials-all-materials-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/admin/all-materials/all-materials.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/admin/all-materials/all-materials.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header no-border class=\"animated fadeInDown\"> -->\n<ion-header no-border>\n  <ion-toolbar color='dark' mode=\"ios\">\n    <ion-title>All Materials</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"ionViewWillEnter(1, $event)\"><ion-icon name=\"refresh\"></ion-icon></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <!-- <ion-searchbar mode=\"ios\" debounce=\"700\" placeholder=\"Search Materials\"  [(ngModel)]=\"searchKey\" (ionChange)=\"ionViewWillEnter(1, '')\" showCancelButton=\"always\" clearIcon=false class=\"animated bounceInLeft slow\"></ion-searchbar> -->\n  <ion-searchbar mode=\"ios\" debounce=\"700\" placeholder=\"Search Materials\"  [(ngModel)]=\"searchKey\" (ionChange)=\"ionViewWillEnter(1, '')\" showCancelButton=\"always\" clearIcon=false></ion-searchbar>\n  <!-- <ion-item class=\"animated bounceInLeft slow\"> -->\n  <ion-item>\n    <ion-label>Search by company</ion-label>\n    <ion-select mode=\"ios\" interface=\"action-sheet\" placeholder=\"Select Status\" [selectedText]=\"owner\" [(ngModel)]=\"owner\" (ionChange)=\"ionViewWillEnter(1, '')\">\n      <ion-select-option *ngFor=\"let mowner of materialOwner\" value=\"{{mowner.name}}\">\n        {{mowner.name}}\n      </ion-select-option>\n    </ion-select>\n  </ion-item>\n  <!-- <ion-item class=\"animated bounceInLeft slow\"> -->\n  <ion-item>\n    <ion-label>Search by type</ion-label>\n    <ion-select mode=\"ios\" interface=\"action-sheet\" placeholder=\"Select Type\" [selectedText]=\"type\" [(ngModel)]=\"type\" (ionChange)=\"ionViewWillEnter(1, '')\">\n      <ion-select-option *ngFor=\"let mtype of materialType\" value=\"{{mtype.name}}\">\n        {{mtype.name}}\n      </ion-select-option>\n    </ion-select>\n  </ion-item>\n</ion-header>\n\n<ion-content class=\"ion-padding card-background-page\">\n  <ion-label color=\"danger\" [hidden]=showNoData class=\"ion-text-center\"><h2><b>Materials not available.</b></h2></ion-label>\n  <!-- <ion-button class=\"loginbtn\" [hidden]=showNoData color='dark' expand=\"block\" fill=\"outline\" [routerLink]=\"['/', 'upload-materials']\">PLEASE ADD MATERIALS</ion-button> -->\n\n  <ion-label color=\"danger\" [hidden]=showNoDataForSearch class=\"ion-text-center\"><h2><b>No material found.</b></h2></ion-label>\n\n  <!-- <ion-card *ngFor=\"let material of materials; let i = index\" class=\"animated bounceInLeft slow\"> -->\n  <ion-card *ngFor=\"let material of materials; let i = index\">\n    <ion-card-content>\n      <ion-row class=\"ion-text-left\">\n        <ion-col col-12>\n          <ion-card-title>{{ material.name }}</ion-card-title>\n          <ion-card-subtitle style=\"font-size: 20px;\">{{ material.material_id }}</ion-card-subtitle>\n        </ion-col>\n      </ion-row>\n      <ion-row (click)=\"openImagePreview(material.image)\">\n        <img src=\"https://jaytarpara.in/images/materials/{{material.image}}\">\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"ion-text-left\">\n          <div class=\"card-price\" style=\"font-size: 20px;\">&#8377;{{ material.price }}</div>\n        </ion-col>\n      </ion-row>\n      <ion-button class=\"loginbtn\" color='dark' expand=\"block\" fill=\"outline\" [routerLink]=\"['/', 'admin-material-details', material.id]\">MATERIAL DETAIL</ion-button>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-infinite-scroll *ngIf=\"!noMoreData\" (ionInfinite)=\"loadMore($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more materials...\"></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/admin/all-materials/all-materials.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/admin/all-materials/all-materials.module.ts ***!
  \*******************************************************************/
/*! exports provided: AllMaterialsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllMaterialsPageModule", function() { return AllMaterialsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _all_materials_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all-materials.page */ "./src/app/pages/admin/all-materials/all-materials.page.ts");







const routes = [
    {
        path: '',
        component: _all_materials_page__WEBPACK_IMPORTED_MODULE_6__["AllMaterialsPage"]
    }
];
let AllMaterialsPageModule = class AllMaterialsPageModule {
};
AllMaterialsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_all_materials_page__WEBPACK_IMPORTED_MODULE_6__["AllMaterialsPage"]]
    })
], AllMaterialsPageModule);



/***/ }),

/***/ "./src/app/pages/admin/all-materials/all-materials.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/admin/all-materials/all-materials.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2FsbC1tYXRlcmlhbHMvYWxsLW1hdGVyaWFscy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/admin/all-materials/all-materials.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/admin/all-materials/all-materials.page.ts ***!
  \*****************************************************************/
/*! exports provided: AllMaterialsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllMaterialsPage", function() { return AllMaterialsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../image-modal/image-modal.page */ "./src/app/pages/image-modal/image-modal.page.ts");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");








let AllMaterialsPage = class AllMaterialsPage {
    constructor(fireAuth, router, platform, activatedRoute, auth, toastCtrl, loadingController, alertCtrl, menu, modalController, nativePageTransitions) {
        this.fireAuth = fireAuth;
        this.router = router;
        this.platform = platform;
        this.activatedRoute = activatedRoute;
        this.auth = auth;
        this.toastCtrl = toastCtrl;
        this.loadingController = loadingController;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.modalController = modalController;
        this.nativePageTransitions = nativePageTransitions;
        this.materials = [];
        this.page = 1;
        this.results = 5;
        this.showNoData = true;
        this.lastid = 0;
        this.latestResults = 5;
        this.quantity = [];
        this.sample = [];
        this.userArray = [];
        this.materialArray = [];
        this.totalValue = [];
        this.noMoreData = 0;
        this.showNoDataForSearch = true;
        this.owner = "All";
        this.type = "All";
        this.materialOwner = [
            {
                name: "All",
            },
            {
                name: "Bhumi Narrow Fab",
            },
            {
                name: "Matrushree Lace",
            },
            {
                name: "23 Needle",
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
    ngOnInit() {
        this.menu.enable(true, "admin");
    }
    ionViewWillEnter(callit, infiniteScroll) {
        this.noMoreData = 0;
        this.page = 1;
        if (this.searchKey == "" || this.searchKey == null) {
            this.nativePageTransitions
                .slide(this.auth.optionsRight)
                .then()
                .catch((errr) => {
                console.log(errr);
            });
        }
        this.materials = [];
        this.page = 1;
        if (callit) {
            this.content.scrollToTop(1500);
            setTimeout(() => {
                this.noMoreData = 0;
                this.showNoData = true;
                this.showNoDataForSearch = true;
                this.ionViewDidEnter();
            }, 100);
        }
    }
    ionViewWillLeave() {
        this.noMoreData = 1;
        this.page = 1;
        this.searchKey = "";
    }
    ionViewDidEnter() {
        this.noMoreData = 0;
        this.page = 1;
        this.auth.getAdminAllTotal().then((res) => {
            if (res["success"]) {
                this.auth.adminTotalOrders = res["totalOrders"];
                this.auth.adminWhatsappOrders = res["totalWhatsappOrders"];
                this.auth.adminTotalUsers = res["totalUsers"];
                this.auth.adminTotalMaterials = res["totalMaterials"];
            }
            else {
                this.auth.adminTotalOrders = 0;
                this.auth.adminWhatsappOrders = 0;
                this.auth.adminTotalUsers = 0;
                this.auth.adminTotalMaterials = 0;
            }
        });
        this.loadingController
            .create({
            message: "loading materials",
            mode: "ios",
        })
            .then((ress) => {
            ress.present();
        });
        this.showNoDataForSearch = true;
        this.loadMaterials();
    }
    loadMaterials(infiniteScroll) {
        if (this.searchKey == undefined) {
            this.searchKey = "";
        }
        console.log("searchKey: " + this.searchKey);
        console.log("owner: " + this.owner);
        console.log("type: " + this.type);
        this.auth
            .getMaterials(this.results, this.page, this.searchKey, this.owner, this.type)
            .then((response) => {
            console.log(response);
            if (response["success"] == 1) {
                if (this.page == 1) {
                    this.materials = [];
                }
                this.materials = this.materials.concat(response["materials"]);
                this.maximumPages = Math.ceil(response["total"] / this.results);
                console.log(this.materials);
                if (response["total"] <= this.results) {
                    this.noMoreData = 1;
                }
                if (infiniteScroll) {
                    infiniteScroll.target.complete();
                }
                else {
                    this.loadingController.dismiss();
                }
            }
            else if (response["success"] == 2) {
                this.loadingController.dismiss();
                this.auth.presentToast(response["message"], false, "bottom", 2500, "danger");
            }
            else {
                if (this.searchKey == undefined || this.searchKey == "") {
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
                this.loadMaterials(infiniteScroll);
            }
            if (this.page === this.maximumPages) {
                this.noMoreData = 1;
            }
        });
    }
    wait(time) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, time);
        });
    }
    openImagePreview(image) {
        this.modalController
            .create({
            component: _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_6__["ImageModalPage"],
            componentProps: {
                img: image,
            },
        })
            .then((modal) => modal.present());
    }
};
AllMaterialsPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_7__["NativePageTransitions"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"])
], AllMaterialsPage.prototype, "content", void 0);
AllMaterialsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-all-materials",
        template: __webpack_require__(/*! raw-loader!./all-materials.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/admin/all-materials/all-materials.page.html"),
        styles: [__webpack_require__(/*! ./all-materials.page.scss */ "./src/app/pages/admin/all-materials/all-materials.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_7__["NativePageTransitions"]])
], AllMaterialsPage);



/***/ })

}]);
//# sourceMappingURL=pages-admin-all-materials-all-materials-module-es2015.js.map