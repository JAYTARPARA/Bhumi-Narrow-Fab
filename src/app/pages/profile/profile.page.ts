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

    this.loadingController.create({
      message: 'Loading your data',
      mode: 'ios'
    }).then((res) => {
      res.present();
    }).catch((e) => {
      this.loadingController.dismiss();
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
    }).catch((err) => {
      this.loadingController.dismiss();
    });
  }

  ionViewDidEnter() { }

  saveProfile() {
    const name = this.name == '' ? '' : this.name;
    const gst = this.gst == '' ? '' : this.gst.toUpperCase();
    const phone = this.phone == '' ? '' : this.phone;
    const address = this.address == '' ? '' : this.address;

    if (name == "" || gst == "" || phone == "" || address == "") {
      this.auth.presentToast('Please fill all required fields', false, 'bottom', 1000, 'danger');
    } else {
      if (this.oldGST != this.gst) {
        this.auth.validateGST(this.gst).then(gstResponse => {
          if (gstResponse['error'] != undefined) {
            console.log(gstResponse['error']);
            this.auth.presentToast(gstResponse['error']['message'], false, 'bottom', 1000, 'danger');
          } else {
            console.log('Name: ' + gstResponse['taxpayerInfo']['lgnm']);
            console.log('GSTIN: ' + gstResponse['taxpayerInfo']['gstin']);
            console.log('Registered: ' + gstResponse['taxpayerInfo']['rgdt']);
            console.log('Status: ' + gstResponse['taxpayerInfo']['sts']);
            this.saveProfileWithGST(phone, name, gst, address);
          }
        });
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
}
