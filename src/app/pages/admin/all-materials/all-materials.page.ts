import { Component, OnInit, ViewChild } from "@angular/core";

import * as firebase from "firebase";
import { Router, ActivatedRoute } from "@angular/router";

import { AngularFireAuth } from "@angular/fire/auth";

import {
  MenuController,
  Platform,
  ToastController,
  LoadingController,
  IonContent,
  AlertController,
  ModalController,
} from "@ionic/angular";

import { AuthenticationService } from "./../../../services/authentication.service";

import { ImageModalPage } from "./../../image-modal/image-modal.page";
import {
  NativePageTransitions,
  NativeTransitionOptions,
} from "@ionic-native/native-page-transitions/ngx";

@Component({
  selector: "app-all-materials",
  templateUrl: "./all-materials.page.html",
  styleUrls: ["./all-materials.page.scss"],
})
export class AllMaterialsPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;

  phone: any;
  uid: any;
  lastSignIn: any;
  created: any;
  subscribe: any;
  name: any;
  address: any;
  gst: any;
  id: any;
  materials = [];
  page = 1;
  maximumPages: any;
  results = 5;
  showNoData = true;
  lastid = 0;
  latestResults = 5;
  quantity = [];
  sample = [];
  userArray = [];
  materialArray = [];
  totalValue = [];
  noMoreData = 0;
  searchKey: any;
  showNoDataForSearch = true;
  owner = "All";
  type = "All";
  backButtonSubscription: any;

  materialOwner: any[] = [
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

  materialType: any[] = [
    {
      name : 'Fancy',
    },
    {
      name : 'Needle Lace',
    },
    {
      name : 'Moti Lace',
    },
    {
      name : 'Crosset',
    },
    {
      name : 'Cut Work',
    },
    {
      name: 'Shum Shumya Lace',
    },
    {
      name: 'Jhalar Lace',
    },
  ];

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    private platform: Platform,
    private activatedRoute: ActivatedRoute,
    public auth: AuthenticationService,
    private toastCtrl: ToastController,
    public loadingController: LoadingController,
    public alertCtrl: AlertController,
    private menu: MenuController,
    public modalController: ModalController,
    private nativePageTransitions: NativePageTransitions
  ) {}

  ngOnInit() {
    this.menu.enable(true, "admin");
  }

  ionViewWillEnter(callit?, infiniteScroll?) {
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
      } else {
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

  loadMaterials(infiniteScroll?) {
    if (this.searchKey == undefined) {
      this.searchKey = "";
    }
    console.log("searchKey: " + this.searchKey);
    console.log("owner: " + this.owner);
    console.log("type: " + this.type);
    this.auth
      .getMaterials(
        this.results,
        this.page,
        this.searchKey,
        this.owner,
        this.type
      )
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
          } else {
            this.loadingController.dismiss();
          }
        } else if (response["success"] == 2) {
          this.loadingController.dismiss();
          this.auth.presentToast(
            response["message"],
            false,
            "bottom",
            2500,
            "danger"
          );
        } else {
          if (this.searchKey == undefined || this.searchKey == "") {
            this.showNoData = false;
          } else {
            this.showNoDataForSearch = false;
          }
          this.loadingController.dismiss();
        }
      });
  }

  async loadMore(infiniteScroll) {
    this.page++;

    if (this.page <= this.maximumPages) {
      await this.wait(1000);
      this.loadMaterials(infiniteScroll);
    }

    if (this.page === this.maximumPages) {
      this.noMoreData = 1;
    }
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
        component: ImageModalPage,
        componentProps: {
          img: image,
        },
      })
      .then((modal) => modal.present());
  }
}
