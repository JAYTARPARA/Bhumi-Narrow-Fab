import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';

import { Platform, ToastController, LoadingController } from '@ionic/angular';

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

  ngOnInit() { }

  ionViewDidEnter() {
    this.loadingController.create({
      message: 'Loading your data',
      mode: 'ios'
    }).then((res) => {
      res.present();
    }).catch((e) => {
      this.loadingController.dismiss();
    });
    this.fireAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.phone = user.phoneNumber.replace('+91', '');
        this.uid = user.uid;
        this.lastSignIn = user.metadata.lastSignInTime;
        this.created = user.metadata.creationTime;
        const value = this.activatedRoute.snapshot.paramMap.get('id');
        const type = this.activatedRoute.snapshot.paramMap.get('type');
        this.auth.getTotalOrders(this.phone).then(msg => {
          if (msg['success']) {
            this.auth.totalOrders = msg['total'];
          } else {
            this.auth.totalOrders = 0;
          }
        });
        this.auth.getUser(value, type).then(response => {
          console.log(response);
          this.id = value;
          this.name = response['name'];
          this.address = response['address'];
          this.gst = response['gst'];
          this.loadingController.dismiss();
        }).catch((err) => {
          this.loadingController.dismiss();
        });
      } else {
        this.router.navigate(['/home']);
      }
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
      setTimeout(() => {
        this.loadingController.dismiss();
      }, 5000);
      this.auth.updateUser(phone, name, gst, address).then(response => {
        this.loadingController.create({
          message: 'Saving your data',
          mode: 'ios'
        }).then((res) => {
          res.present();
          console.log(response);
          if (response['success'] == 1) {
            this.loadingController.dismiss();
            this.auth.presentToast(response['message'], false, 'bottom', 1000, 'success');
          } else {
            this.loadingController.dismiss();
            this.auth.presentToast(response['message'], false, 'bottom', 1000, 'danger');
          }
          res.onDidDismiss().then((dis) => {

          });
        });
      });
    }
  }
}
