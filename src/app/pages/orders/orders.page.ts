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
      this.loadingController.dismiss();
      if (this.name == "" || this.address == "" || this.gst == "") {
        this.auth.presentToast('Please provide all details', false, 'bottom', 2500, 'danger');
        this.router.navigate(['/profile/mobile/' + value]);
      }
    }).catch((err) => {
      this.loadingController.dismiss();
    });
  }

}
