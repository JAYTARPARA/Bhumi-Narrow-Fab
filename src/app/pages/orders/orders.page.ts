import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';

import { Platform, ToastController, LoadingController } from '@ionic/angular';

import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
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

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    private platform: Platform,
    private activatedRoute: ActivatedRoute,
    public auth: AuthenticationService,
    private toastCtrl: ToastController,
    public loadingController: LoadingController,
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.loadingController.create({
      message: 'checking your data',
      mode: 'ios'
    }).then((res) => {
      res.present();
    });
    const value = this.activatedRoute.snapshot.paramMap.get('id');
    const type = this.activatedRoute.snapshot.paramMap.get('type');
    this.auth.getUser(value, type).then(response => {
      console.log(response);
      this.id = value;
      this.name = response['name'];
      this.address = response['address'];
      this.gst = response['gst'];
      this.phone = response['mobile'];
      this.loadingController.dismiss();
      if (this.name == "" || this.address == "" || this.gst == "") {
        this.auth.presentToast('Please provide all details', false, 'bottom', 2500, 'danger');
        this.router.navigate(['/profile/mobile/' + value]);
      } else {
        this.loadingController.create({
          message: 'loading your orders',
          mode: 'ios'
        }).then((ress) => {
          ress.present();
        });
        this.loadOrders();
      }
    }).catch((err) => {
      this.loadingController.dismiss();
    });
  }

  loadOrders(infiniteScroll?) {
    this.auth.getOrders(this.results, this.page, this.phone).then(response => {
      if (response['success'] == 1) {
        console.log(response);
        this.orders = this.orders.concat(response['orders']);
        this.maximumPages = Math.ceil(response['total'] / this.results);
        console.log('Max Page: ' + this.maximumPages);
        console.log(this.orders);
        if (infiniteScroll) {
          infiniteScroll.target.complete();
        } else {
          this.loadingController.dismiss();
        }
      } else {
        this.showNoData = false;
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
      infiniteScroll.target.disabled = true;
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
