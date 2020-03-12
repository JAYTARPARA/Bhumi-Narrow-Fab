import { Component, OnInit, ViewChild } from '@angular/core';

import * as firebase from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';

import { MenuController, Platform, ToastController, LoadingController, NavController, IonContent } from '@ionic/angular';

import { AuthenticationService } from './../../services/authentication.service';

import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
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
  showNoDataForSearch = true;
  value: any;
  type: any;
  searchstatus = 'All';
  loadOrderNow = false;

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

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    private platform: Platform,
    private activatedRoute: ActivatedRoute,
    public auth: AuthenticationService,
    private toastCtrl: ToastController,
    public loadingControllerOrder: LoadingController,
    private navCtrl: NavController,
    private menu: MenuController,
    private nativePageTransitions: NativePageTransitions,
  ) { }

  ngOnInit() {
    this.menu.enable(true, 'user');
    this.value = this.activatedRoute.snapshot.paramMap.get('id');
    this.type = this.activatedRoute.snapshot.paramMap.get('type');
    this.auth.usermobile = this.value;
  }

  ionViewWillEnter(callit?, infiniteScroll?) {
    this.nativePageTransitions.slide(this.auth.optionsRight)
      .then()
      .catch((errr) => {
        console.log(errr);
    });
    this.orders = [];
    this.page = 1;
    if (callit) {
      this.content.scrollToTop(1500);
      setTimeout(() => {
        this.noMoreData = 0;
        this.showNoDataForSearch = true;
        this.showNoData = true;
        this.ionViewDidEnter(callit);
      }, 100);
    }
  }

  ionViewDidEnter(callit?) {
    if (!callit) {
      this.loadingControllerOrder.create({
        message: 'Loading your orders',
        mode: 'ios'
      }).then((res) => {
        res.present();
        res.onDidDismiss().then((dis) => {
          console.log(this.loadOrderNow);
          if (this.loadOrderNow) {
            this.loadOrders();
          }
        });
      });
    }

    this.auth.getUser(this.value, this.type).then(response => {
      console.log(response);
      this.id = this.value;
      if (response['success'] == 1) {
        this.name = response['name'];
        this.address = response['address'];
        this.gst = response['gst'];
        this.phone = response['mobile'];
        // tslint:disable-next-line:max-line-length
        if (this.name == "" || this.address == "" || this.gst == "") {
          this.loadOrderNow = false;
          this.loadingControllerOrder.dismiss();
          this.auth.presentToast('Please provide all details', false, 'bottom', 2500, 'danger');
          this.router.navigate(['/profile/mobile/' + this.value]);
        } else {
          this.loadOrderNow = true;
          if (!callit) {
            this.loadingControllerOrder.dismiss();
          }
        }
      } else if (response['success'] == 2) {
        this.loadOrderNow = false;
        if (!callit) {
          this.loadingControllerOrder.dismiss();
        }
        this.auth.presentToast(response['message'], false, 'bottom', 2500, 'danger');
      } else {
        if (!callit) {
          this.loadingControllerOrder.dismiss();
        }
      }
    });
    // setTimeout(() => {
    //   this.loadingControllerOrder.getTop().then( chk => {
    //     if (chk) {
    //       this.loadingControllerOrder.dismiss();
    //     }
    //   });
    // }, 1500);

    this.auth.getTotalOrders(this.value).then(msg => {
      if (msg['success']) {
        this.auth.totalOrders = msg['total'];
      } else {
        this.auth.totalOrders = 0;
      }
    });
    this.showNoDataForSearch = true;
    if (callit) {
      this.loadOrders();
    }
  }

  loadOrders(infiniteScroll?, scrollCall?) {
    if (!scrollCall) {
      this.loadingControllerOrder.create({
        message: 'Loading your orders',
        mode: 'ios'
      }).then((ress) => {
        ress.present();
      });
    }
    this.auth.getOrders(this.results, this.page, this.value, this.searchKey, this.searchstatus).then(response => {
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
          this.loadingControllerOrder.dismiss();
        }
      } else if (response['success'] == 2) {
        this.loadingControllerOrder.dismiss();
        this.auth.presentToast(response['message'], false, 'bottom', 2500, 'danger');
      } else {
        if (this.searchKey == undefined || this.searchKey == '') {
          this.showNoData = false;
        } else {
          this.showNoDataForSearch = false;
        }
        this.loadingControllerOrder.dismiss();
      }
    });
  }

  async loadMore(infiniteScroll, scrollCall?) {
    if (!scrollCall) {
      scrollCall = 0;
    }
    this.page++;

    if (this.page <= this.maximumPages) {
      await this.wait(1000);
      this.loadOrders(infiniteScroll, scrollCall);
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
