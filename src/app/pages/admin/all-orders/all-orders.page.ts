import { Component, OnInit, ViewChild } from '@angular/core';
import * as firebase from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';

import { MenuController, Platform, ToastController, LoadingController, NavController, IonContent } from '@ionic/angular';

import { AuthenticationService } from './../../../services/authentication.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.page.html',
  styleUrls: ['./all-orders.page.scss'],
})
export class AllOrdersPage implements OnInit {
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
  searchstatus = 'All';

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
    public loadingController: LoadingController,
    private navCtrl: NavController,
    private menu: MenuController,
  ) { }

  ngOnInit() {
    this.menu.enable(true, 'admin');
  }

  ionViewWillEnter(callit?, infiniteScroll?) {
    this.orders = [];
    this.page = 1;
    if (callit) {
      this.content.scrollToTop(1500);
      setTimeout(() => {
        this.noMoreData = 0;
        this.ionViewDidEnter();
      }, 100);
    }
  }

  ionViewDidEnter() {
    this.auth.getAdminAllTotal().then(res => {
      if (res['success']) {
        this.auth.adminTotalOrders = res['totalOrders'];
        this.auth.adminTotalUsers = res['totalUsers'];
        this.auth.adminTotalMaterials = res['totalMaterials'];
      } else {
        this.auth.adminTotalOrders = 0;
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
    this.auth.getAllOrders(this.results, this.page, this.searchKey, this.searchstatus).then(response => {
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
      } else {
        if (this.searchKey == '') {
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
