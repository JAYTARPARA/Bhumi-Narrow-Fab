import { Component, OnInit, ViewChild } from '@angular/core';
import * as firebase from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';

import { MenuController, Platform, ToastController, LoadingController, NavController, IonContent } from '@ionic/angular';

import { AuthenticationService } from './../../../services/authentication.service';

import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-whatsapp-orders',
  templateUrl: './whatsapp-orders.page.html',
  styleUrls: ['./whatsapp-orders.page.scss'],
})
export class WhatsappOrdersPage implements OnInit {
  @ViewChild(IonContent, {static: false}) content: IonContent;

  phone: any;
  uid: any;
  lastSignIn: any;
  created: any;
  subscribe: any;
  name: any;
  address: any;
  gst: any;
  id: any;
  orders = [];
  page = 1;
  maximumPages: any;
  results = 5;
  showNoData = true;
  lastid = 0;
  latestResults = 5;
  noMoreData = 0;
  searchKey: any;
  searchKeyDate: any;
  showNoDataForSearch = true;
  searchstatus = 'All';
  maxDateSelect: any;

  orderStatus: any[] = [
    {
      name : 'All',
    },
    {
      name : 'Rejected',
    },
    {
      name : 'Pending',
    },
    {
      name: 'Confirmed',
    },
    {
      name: 'Delivered'
    }
  ];

  customPickerOptions = {
    buttons: [{
      text: 'Cancel',
      role: 'cancel',
      handler: () => {}
    }, {
      text: 'Clear',
      handler: () => {
        this.searchKeyDate = null;
      }
    }, {
      text: 'Search',
      handler: (data) => {
        console.log(data);
        const year: string = data.year.text;
        const month: string = data.month.value < 10 ? '0' + data.month.value.toString() : data.month.value.toString();
        const day: string = data.day.text;
        this.searchKeyDate = day + '-' + month + '-' + year;
      }
    }]
  };

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    private platform: Platform,
    private activatedRoute: ActivatedRoute,
    public auth: AuthenticationService,
    private toastCtrl: ToastController,
    public loadingController: LoadingController,
    private navCtrl: NavController,
    private menu: MenuController,
    private nativePageTransitions: NativePageTransitions,
  ) { }

  ngOnInit() {
    const currentDate = new Date();
    this.maxDateSelect = currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate();
    this.menu.enable(true, 'admin');
  }

  ionViewWillEnter(callit?, infiniteScroll?) {
    this.nativePageTransitions.slide(this.auth.optionsRight)
      .then()
      .catch((errr) => {
        console.log(errr);
    });
    console.log('Date: ' + this.searchKeyDate);
    this.orders = [];
    this.page = 1;
    if (callit) {
      this.content.scrollToTop(1500);
      setTimeout(() => {
        this.noMoreData = 0;
        this.showNoDataForSearch = true;
        this.showNoData = true;
        this.ionViewDidEnter();
      }, 100);
    }
  }

  ionViewDidEnter() {
    this.auth.getAdminAllTotal().then(res => {
      if (res['success']) {
        this.auth.adminTotalOrders = res['totalOrders'];
        this.auth.adminWhatsappOrders = res['totalWhatsappOrders'];
        this.auth.adminTotalUsers = res['totalUsers'];
        this.auth.adminTotalMaterials = res['totalMaterials'];
      } else {
        this.auth.adminTotalOrders = 0;
        this.auth.adminWhatsappOrders = 0;
        this.auth.adminTotalUsers = 0;
        this.auth.adminTotalMaterials = 0;
      }
    });
    this.loadingController.create({
      message: 'loading orders',
      mode: 'ios'
    }).then((ress) => {
      ress.present();
    });
    this.showNoDataForSearch = true;
    this.loadOrders();
  }

  loadOrders(infiniteScroll?) {
    this.auth.getAllWhatsappOrders(this.results, this.page, this.searchKey, this.searchstatus, this.searchKeyDate).then(response => {
      console.log(response);
      if (response['success'] == 1) {
        this.orders = this.orders.concat(response['orders']);
        this.maximumPages = Math.ceil(response['total'] / this.results);
        console.log(this.orders);
        if (response['total'] <= this.results ) {
          this.noMoreData = 1;
        }
        if (infiniteScroll) {
          infiniteScroll.target.complete();
        } else {
          this.loadingController.dismiss();
        }
      } else if (response['success'] == 2) {
        this.loadingController.dismiss();
        this.auth.presentToast(response['message'], false, 'bottom', 2500, 'danger');
      } else {
        if (this.searchKey == undefined || this.searchKey == '') {
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
      this.loadOrders(infiniteScroll);
    }

    if (this.page === this.maximumPages) {
      // infiniteScroll.target.disabled = true;
      this.noMoreData = 1;
    }
  }

  wait(time) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  }

}
