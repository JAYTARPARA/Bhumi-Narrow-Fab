import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';

import { MenuController, Platform, ToastController, LoadingController } from '@ionic/angular';

import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  phone: any;
  uid: any;
  lastSignIn: any;
  created: any;
  subscribe: any;
  name: any;
  address: any;
  gst: any;
  oldGST: any;
  id: any;
  value: any;
  type: any;
  key = '7yZ2AVzT76cie7ralb9YZcLsrjq2';

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    private platform: Platform,
    private activatedRoute: ActivatedRoute,
    public auth: AuthenticationService,
    private toastCtrl: ToastController,
    public loadingController: LoadingController,
    private menu: MenuController,
  ) { }

  ngOnInit() {
    this.menu.enable(true, 'user');
    this.value = this.activatedRoute.snapshot.paramMap.get('id');
    this.type = this.activatedRoute.snapshot.paramMap.get('type');
    this.auth.usermobile = this.value;

    this.auth.getTotalOrders(this.value).then(msg => {
      if (msg['success']) {
        this.auth.totalOrders = msg['total'];
      } else {
        this.auth.totalOrders = 0;
      }
    });
  }

  ionViewWillEnter(callit?) {
    if (callit) {
      this.ionViewDidEnter();
    }
  }

  ionViewDidEnter() {
    this.loadingController.create({
      message: 'Loading your profile',
      mode: 'ios'
    }).then((res) => {
      res.present();
    });

    this.auth.getUser(this.value, this.type).then(response => {
      console.log(response);
      this.id = this.value;
      if (response['success'] == 1) {
        this.name = response['name'];
        this.address = response['address'];
        this.gst = response['gst'];
        this.phone = response['mobile'];
        this.oldGST = response['gst'];
      } else if (response['success'] == 2) {
        this.loadingController.dismiss();
        this.auth.presentToast(response['message'], false, 'bottom', 2500, 'danger');
      }
      setTimeout(() => {
        this.loadingController.dismiss();
      }, 1500);
    });
  }

  saveProfile() {
    const name = this.name == '' ? '' : this.name;
    const gst = this.gst == '' ? '' : this.gst.toUpperCase();
    const phone = this.phone == '' ? '' : this.phone;
    const address = this.address == '' ? '' : this.address;

    if (name == "" || gst == "" || phone == "" || address == "") {
      this.auth.presentToast('Please fill all required fields', false, 'bottom', 1000, 'danger');
    } else {
      const regex = new RegExp(/^([0-9]{2}[a-zA-Z]{4}([a-zA-Z]{1}|[0-9]{1})[0-9]{4}[a-zA-Z]{1}([a-zA-Z]|[0-9]){3}){0,15}$/);
      if (this.oldGST != gst) {
        if (regex.test(gst)) {
          this.saveProfileWithGST(phone, name, gst, address);
        } else {
          this.auth.presentToast('Please enter valid GSTIN', false, 'bottom', 1000, 'danger');
        }
      } else {
        this.saveProfileWithGST(phone, name, gst, address);
      }
    }
  }

  saveProfileWithGST(phone, name, gst, address) {
    this.auth.updateUser(phone, name, gst, address).then(response => {
      this.loadingController.create({
        message: 'Saving your data',
        mode: 'ios'
      }).then((res) => {
        console.log(response);
        if (response['success'] == 1) {
          setTimeout(() => {
            this.loadingController.dismiss();
          }, 1500);
          this.auth.presentToast(response['message'], false, 'bottom', 1000, 'success');
        } else if (response['success'] == 2) {
          this.loadingController.dismiss();
          this.auth.presentToast(response['message'], false, 'bottom', 2500, 'danger');
        } else {
          this.loadingController.dismiss();
          this.auth.presentToast(response['message'], false, 'bottom', 1000, 'danger');
        }
        res.present();
        res.onDidDismiss().then((dis) => {
          this.ngOnInit();
        });
      });
    });
  }

  checkGST(GST, key, phone, name, gst, address) {
    this.loadingController.create({
      message: 'Checking GSTIN number',
      mode: 'ios'
    }).then((res) => {
      res.present();
    });
    this.auth.validateGST(GST, key).then(gstResponse => {
      this.loadingController.dismiss();
      if (gstResponse['error'] != undefined) {
        if (this.platform.is('cordova')) {
          gstResponse['error'] = JSON.parse(gstResponse['error']);
        }
        // tslint:disable-next-line:max-line-length
        if (gstResponse['message'] != undefined && gstResponse['message'].includes('Limit Exceed')) {
            this.key = 'HVEhpveprHeKSIc61xuOHlTd8dG2';
            this.checkGST(this.gst, this.key, phone, name, gst, address);
        } else {
          this.auth.presentToast(gstResponse['error']['message'], false, 'bottom', 1000, 'danger');
        }
      } else {
        console.log('Name: ' + gstResponse['taxpayerInfo']['lgnm']);
        console.log('GSTIN: ' + gstResponse['taxpayerInfo']['gstin']);
        console.log('Registered: ' + gstResponse['taxpayerInfo']['rgdt']);
        console.log('Status: ' + gstResponse['taxpayerInfo']['sts']);
        this.saveProfileWithGST(phone, name, gst, address);
      }
    });
  }
}
