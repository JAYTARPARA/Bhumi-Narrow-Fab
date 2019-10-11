import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

import { Router } from '@angular/router';

import * as firebase from 'firebase';

import { AngularFireAuth } from '@angular/fire/auth';
import { LoadingController, Platform, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy, AfterViewInit {

  subscribe: any;
  backButtonSubscription: any;

  constructor(
    public platform: Platform,
    private router: Router,
    private fireAuth: AngularFireAuth,
    public loadingController: LoadingController,
    public alertCtrl: AlertController,
  ) {
    this.fireAuth.auth.onAuthStateChanged(user => {
      if (user) {
        setTimeout(() => {
          this.loadingController.dismiss();
        }, 1500);
        this.loadingController.create({
          message: 'Loading your profile',
          mode: 'ios'
        }).then((res) => {
          res.present();
          res.onDidDismiss().then((dis) => {
            this.router.navigate(['/profile/mobile/' + user.phoneNumber.replace('+91', '')]);
          });
        });
      }
    });
  }

  ngOnInit() { }
  ngAfterViewInit() {
    this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(999999, () => {
      this.presentAlertConfirm();
    });
  }
  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();
  }

  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'Confirm!',
      subHeader: 'Are you sure you want to exit the app?',
      mode: 'ios',
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'YES',
          handler: () => {
            navigator['app'].exitApp();
          }
        }
      ]
    });

    await alert.present();
  }
}
