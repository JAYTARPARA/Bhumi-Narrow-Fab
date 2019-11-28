(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-material-material-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/material/material.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/material/material.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border class=\"animated fadeInDown\">\n  <ion-toolbar color='dark' mode=\"ios\">\n    <ion-title>All Materials</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button autoHide=\"false\"></ion-menu-button>\n      </ion-buttons>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"ionViewWillEnter(1, $event)\"><ion-icon name=\"refresh\"></ion-icon></ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n  <ion-searchbar mode=\"ios\" debounce=\"700\" placeholder=\"Search Materials\"  [(ngModel)]=\"searchKey\" (ionChange)=\"ionViewWillEnter(1, '')\" showCancelButton=\"always\" clearIcon=false class=\"animated bounceInLeft slow\"></ion-searchbar>\n  <ion-item class=\"animated bounceInLeft slow\">\n    <ion-label>Sort by</ion-label>\n    <ion-select mode=\"ios\" interface=\"action-sheet\" placeholder=\"Select Sorting\" [selectedText]=\"sortBy\" [(ngModel)]=\"sortBy\" (ionChange)=\"ionViewWillEnter(1, '')\">\n      <ion-select-option *ngFor=\"let osorting of sortingFilter\" value=\"{{osorting.name}}\">\n        {{osorting.name}}\n      </ion-select-option>\n    </ion-select>\n  </ion-item>\n</ion-header>\n\n<ion-content class=\"ion-padding card-background-page\">\n\n  <ion-label color=\"danger\" [hidden]=showNoData class=\"ion-text-center\"><h2><b>Materials not available. Please check after sometime</b></h2></ion-label>\n\n  <ion-label color=\"danger\" [hidden]=showNoDataForSearch class=\"ion-text-center\"><h2><b>No material found.</b></h2></ion-label>\n\n  <ion-card *ngFor=\"let material of materials; let i = index\" class=\"animated bounceInLeft slow\">\n    <ion-card-content>\n      <ion-row class=\"ion-text-left\">\n        <ion-col col-12>\n          <ion-card-title>{{ material.name }}</ion-card-title>\n          <ion-card-subtitle style=\"font-size: 20px;\">{{ material.material_id }}</ion-card-subtitle>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <div class=\"card-color\" style=\"color: black;font-size: 18px;margin-top: -10px;\">Material color: <b>{{ material.color }}</b></div>\n        </ion-col>\n      </ion-row>\n      <ion-row (click)=\"openImagePreview(material.image)\">\n        <img src=\"https://bhuminarrowfab.000webhostapp.com/images/materials/{{material.image}}\">\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-button color='dark' style=\"float: left;;\" fill=\"outline\" (click)=\"showPrice(material.id)\">TAP ME</ion-button>\n        </ion-col>\n        <ion-col class=\"hide-me material-{{material.id}}\">\n          <div class=\"card-price\" style=\"font-size: 20px;float: right;margin-top: 10px\">&#8377;{{ material.price }}</div>\n        </ion-col>\n      </ion-row>\n      <ion-list>\n        <ion-item>\n          <ion-label>Sample Request for Material</ion-label>\n          <ion-toggle name=\"sample\" color=\"success\" [(ngModel)]=\"sample[i]\"></ion-toggle>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Quantity (Meter)*</ion-label>\n          <ion-input type=\"number\" name=\"quantity\" placeholder=\"Enter quantity (e.g. 1250)\" [(ngModel)]=\"quantity[i]\" (ionChange)=\"calculateTotal(quantity[i], i, material.price)\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">pieces</ion-label>\n          <ion-input type=\"number\" name=\"quantity\" placeholder=\"Enter pieces (e.g. 9)\" [(ngModel)]=\"pieces[i]\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label color=\"danger\" position=\"stacked\" class=\"totalvallabel\">Total Price</ion-label>\n          <ion-input type=\"text\" name=\"quantity\" [(ngModel)]=\"totalValue[i]\" placeholder=\"0\" class=\"totalval\"></ion-input>\n        </ion-item>\n      </ion-list>\n      <ion-button class=\"loginbtn\" color='dark' expand=\"block\" fill=\"outline\" (click)=\"materialOrder(material.company, material.id, material.price, material.name, material.material_id, material.image, quantity, sample, pieces, i)\">ORDER NOW</ion-button>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-infinite-scroll *ngIf=\"!noMoreData\" (ionInfinite)=\"loadMore($event, 1)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more materials...\"></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/material/material.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/material/material.module.ts ***!
  \***************************************************/
/*! exports provided: MaterialPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialPageModule", function() { return MaterialPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _material_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material.page */ "./src/app/pages/material/material.page.ts");







const routes = [
    {
        path: '',
        component: _material_page__WEBPACK_IMPORTED_MODULE_6__["MaterialPage"]
    }
];
let MaterialPageModule = class MaterialPageModule {
};
MaterialPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_material_page__WEBPACK_IMPORTED_MODULE_6__["MaterialPage"]]
    })
], MaterialPageModule);



/***/ }),

/***/ "./src/app/pages/material/material.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/material/material.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.totalval:before {\n  content: \"₹\";\n  color: red;\n  font-weight: 500;\n}\n.totalval, .totalvallabel {\n  color: red;\n  pointer-events: none;\n  font-weight: 500;\n}\n.hide-me {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWF0ZXJpYWwvbWF0ZXJpYWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9tYXRlcmlhbC9DOlxcUHJvamVjdHNcXE15IElvbmljIFByb2plY3RzXFxiaHVtaW5hcnJvd2ZhYi9zcmNcXGFwcFxccGFnZXNcXG1hdGVyaWFsXFxtYXRlcmlhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksWUFBQTtFQUVBLFVBQUE7RUFDQSxnQkFBQTtBRENKO0FDRUE7RUFDSSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBRENKO0FDRUE7RUFDSSxhQUFBO0FEQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYXRlcmlhbC9tYXRlcmlhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4udG90YWx2YWw6YmVmb3JlIHtcbiAgY29udGVudDogXCLigrlcIjtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnRvdGFsdmFsLCAudG90YWx2YWxsYWJlbCB7XG4gIGNvbG9yOiByZWQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uaGlkZS1tZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59IiwiLnRvdGFsdmFsOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIuKCuVwiO1xyXG4gICAgLy8gY29sb3I6ICM5YzljOWM7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnRvdGFsdmFsLCAudG90YWx2YWxsYWJlbCB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uaGlkZS1tZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/material/material.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/material/material.page.ts ***!
  \*************************************************/
/*! exports provided: MaterialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialPage", function() { return MaterialPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../image-modal/image-modal.page */ "./src/app/pages/image-modal/image-modal.page.ts");




// tslint:disable-next-line:max-line-length



let MaterialPage = class MaterialPage {
    constructor(fireAuth, router, platform, activatedRoute, auth, toastCtrl, loadingControllerMaterial, alertCtrl, menu, modalController) {
        this.fireAuth = fireAuth;
        this.router = router;
        this.platform = platform;
        this.activatedRoute = activatedRoute;
        this.auth = auth;
        this.toastCtrl = toastCtrl;
        this.loadingControllerMaterial = loadingControllerMaterial;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.modalController = modalController;
        this.materials = [];
        this.page = 1;
        this.results = 5;
        this.showNoData = true;
        this.lastid = 0;
        this.latestResults = 5;
        this.quantity = [];
        this.sample = [];
        this.pieces = [];
        this.userArray = [];
        this.materialArray = [];
        this.totalValue = [];
        this.noMoreData = 0;
        this.showNoDataForSearch = true;
        this.owner = 'All';
        this.loadMaterialNow = false;
        this.sortBy = 'Latest Materials';
        this.sortingFilter = [
            {
                name: 'Latest Materials',
            },
            {
                name: 'Price: high to low',
            },
            {
                name: 'Price: low to high',
            },
            {
                name: 'Color: A to Z',
            },
            {
                name: 'Color: Z to A',
            },
        ];
    }
    ngOnInit() {
        this.menu.enable(true, 'user');
        this.value = this.activatedRoute.snapshot.paramMap.get('id');
        this.type = this.activatedRoute.snapshot.paramMap.get('type');
        this.auth.usermobile = this.value;
        console.log('Here');
        console.log('this.value: ' + this.value);
        console.log('this.type: ' + this.type);
    }
    ionViewWillEnter(callit, infiniteScroll) {
        console.log('Sorting: ' + this.sortBy);
        this.materials = [];
        this.page = 1;
        if (callit) {
            this.content.scrollToTop(1500);
            setTimeout(() => {
                this.noMoreData = 0;
                this.showNoData = true;
                this.showNoDataForSearch = true;
                this.ionViewDidEnter(callit);
            }, 100);
        }
    }
    ionViewDidEnter(callit) {
        if (!callit) {
            this.loadingControllerMaterial.create({
                message: 'Loading materials',
                mode: 'ios'
            }).then((res) => {
                res.present();
                res.onDidDismiss().then((dis) => {
                    console.log(this.loadMaterialNow);
                    if (this.loadMaterialNow) {
                        this.loadMaterials();
                    }
                });
            });
        }
        this.auth.checkUserProfileStatus(this.value).then(response => {
            if (response['success'] == 1 && response['status'] == 0) {
                this.loadMaterialNow = false;
                this.loadingControllerMaterial.dismiss();
                this.auth.presentToast('Please provide all details', false, 'bottom', 2500, 'danger');
                this.router.navigate(['/profile/mobile/' + this.auth.usermobile]);
            }
            else if (response['success'] == 1 && response['status'] == 1) {
                this.loadMaterialNow = true;
                this.auth.getUser(this.value, this.type).then(results => {
                    console.log(results);
                    this.userArray.push(results);
                });
                // this.loadingControllerMaterial.dismiss();
                setTimeout(() => {
                    if (!callit) {
                        this.loadingControllerMaterial.dismiss();
                    }
                }, 500);
            }
            else if (response['success'] == 2) {
                if (!callit) {
                    this.loadingControllerMaterial.dismiss();
                }
                this.auth.presentToast(response['message'], false, 'bottom', 2500, 'danger');
            }
            else {
                if (!callit) {
                    this.loadingControllerMaterial.dismiss();
                }
            }
        });
        this.auth.getTotalOrders(this.value).then(msg => {
            if (msg['success']) {
                this.auth.totalOrders = msg['total'];
            }
            else {
                this.auth.totalOrders = 0;
            }
        });
        this.showNoDataForSearch = true;
        if (callit) {
            this.loadMaterials();
        }
    }
    loadMaterials(infiniteScroll, scrollCall) {
        let sortingBy = this.sortBy;
        if (!scrollCall) {
            this.loadingControllerMaterial.create({
                message: 'Loading materials',
                mode: 'ios'
            }).then((ress) => {
                ress.present();
            });
        }
        if (sortingBy == 'Latest Materials') {
            sortingBy = '';
        }
        else if (sortingBy == 'Price: high to low') {
            sortingBy = 'phl';
        }
        else if (sortingBy == 'Price: low to high') {
            sortingBy = 'plh';
        }
        else if (sortingBy == 'Color: A to Z') {
            sortingBy = 'caz';
        }
        else if (sortingBy == 'Color: Z to A') {
            sortingBy = 'cza';
        }
        this.auth.getMaterials(this.results, this.page, this.searchKey, this.owner, sortingBy).then(response => {
            if (response['success'] == 1) {
                this.materials = this.materials.concat(response['materials']);
                this.maximumPages = Math.ceil(response['total'] / this.results);
                console.log(this.materials);
                if (response['total'] <= this.results) {
                    this.noMoreData = 1;
                }
                if (infiniteScroll) {
                    infiniteScroll.target.complete();
                }
                else {
                    this.loadingControllerMaterial.dismiss();
                }
            }
            else {
                if (this.searchKey == '') {
                    this.showNoData = false;
                }
                else {
                    this.showNoDataForSearch = false;
                }
                this.loadingControllerMaterial.dismiss();
            }
        });
    }
    loadMore(infiniteScroll, scrollCall) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!scrollCall) {
                scrollCall = 0;
            }
            this.page++;
            console.log('Page: ' + this.page);
            console.log('Max Page: ' + this.maximumPages);
            if (this.page <= this.maximumPages) {
                yield this.wait(1000);
                this.loadMaterials(infiniteScroll, scrollCall);
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
    materialOrder(company, id, price, name, material_id, image, quantity, sample, pieces, key) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const imageurl = 'https://bhuminarrowfab.000webhostapp.com/images/materials/' + image;
            const splitprice = price.split('/');
            const minquantity = splitprice[1].split('M')[0];
            const piece = pieces[key];
            if (sample[key] === undefined) {
                sample[key] = false;
            }
            if (pieces[key] === undefined || pieces[key] == null) {
                pieces[key] = 0;
            }
            this.materialArray = [
                {
                    'id': id,
                    'company': company,
                    'price': price,
                    'name': name,
                    'material_id': material_id,
                    'imageurl': imageurl,
                    'quantity': quantity[key],
                    'sample': sample[key],
                    'piece': pieces[key],
                }
            ];
            if (quantity[key] === undefined || quantity[key] <= 0) {
                this.auth.presentToast('Please add quantity', false, 'bottom', 1500, 'danger');
            }
            else if (pieces[key] < 0) {
                this.auth.presentToast('Please add proper pieces', false, 'bottom', 1500, 'danger');
            }
            else {
                const alert = yield this.alertCtrl.create({
                    header: 'Confirm your order!',
                    message: 'Please click send button in whatsapp otherwise your order will not send to the owner',
                    mode: 'ios',
                    buttons: [
                        {
                            text: 'NO',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: (blah) => {
                                this.quantity[key] = '';
                                this.pieces[key] = '';
                                this.sample[key] = false;
                            }
                        }, {
                            text: 'YES',
                            handler: () => {
                                this.loadingControllerMaterial.create({
                                    message: 'Saving your order',
                                    mode: 'ios'
                                }).then((res) => {
                                    res.present();
                                    res.onDidDismiss().then((dis) => {
                                    });
                                });
                                if (this.userArray.length <= 0) {
                                    this.auth.presentToast('Something went wrong! Please reload the page once.', false, 'bottom', 1500, 'danger');
                                }
                                else {
                                    this.auth.sendOrder(this.userArray, this.materialArray).then(result => {
                                        this.loadingControllerMaterial.dismiss();
                                        this.sample[key] = false;
                                        this.quantity[key] = '';
                                        this.auth.totalOrders++;
                                    });
                                }
                            }
                        }
                    ]
                });
                yield alert.present();
            }
        });
    }
    calculateTotal(quantity, key, price) {
        const pricesplit = price.split('/');
        const unitprice = pricesplit[0];
        const unitsplit = pricesplit[1].split('M');
        const unit = unitsplit[0];
        this.totalValue[key] = Math.round((quantity * unitprice) / unit);
    }
    openImagePreview(image) {
        this.modalController.create({
            component: _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_6__["ImageModalPage"],
            componentProps: {
                img: image
            }
        }).then(modal => modal.present());
    }
    showPrice(materialid) {
        const bodyClass = document.querySelector('.material-' + materialid);
        if (bodyClass.classList.contains('hide-me')) {
            bodyClass.classList.remove('hide-me');
        }
        else {
            bodyClass.classList.add('hide-me');
        }
    }
};
MaterialPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"])
], MaterialPage.prototype, "content", void 0);
MaterialPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-material',
        template: __webpack_require__(/*! raw-loader!./material.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/material/material.page.html"),
        styles: [__webpack_require__(/*! ./material.page.scss */ "./src/app/pages/material/material.page.scss")]
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
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], MaterialPage);



/***/ })

}]);
//# sourceMappingURL=pages-material-material-module-es2015.js.map