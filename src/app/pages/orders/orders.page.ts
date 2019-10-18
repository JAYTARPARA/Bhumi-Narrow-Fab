import { Component, OnInit, ViewChild } from '@angular/core';

import * as firebase from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';

import { MenuController, Platform, ToastController, LoadingController, NavController, IonContent } from '@ionic/angular';

import { AuthenticationService } from './../../services/authentication.service';

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
    this.menu.enable(true, 'user');
    this.value = this.activatedRoute.snapshot.paramMap.get('id');
    this.type = this.activatedRoute.snapshot.paramMap.get('type');
    this.auth.usermobile = this.value;
    console.log(this.auth.userProfileDone);
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
    if (!this.auth.userProfileDone) {
      this.auth.presentToast('Please provide all details', false, 'bottom', 2500, 'danger');
      this.router.navigate(['/profile/mobile/' + this.value]);
    } else {
      this.auth.getTotalOrders(this.value).then(msg => {
        if (msg['success']) {
          this.auth.totalOrders = msg['total'];
        } else {
          this.auth.totalOrders = 0;
        }
      });
      this.loadingController.create({
        message: 'loading your orders',
        mode: 'ios'
      }).then((ress) => {
        ress.present();
      });
      this.showNoDataForSearch = true;
      this.loadOrders();
    }
  }

  loadOrders(infiniteScroll?) {
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
