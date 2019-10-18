import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

import { Router } from '@angular/router';

import * as firebase from 'firebase';

import { AngularFireAuth } from '@angular/fire/auth';
import { LoadingController, Platform, AlertController, ToastController, MenuController } from '@ionic/angular';
import { AuthenticationService } from './../services/authentication.service';

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
    public toast: ToastController,
    public auth: AuthenticationService,
    private menu: MenuController
  ) {
    this.fireAuth.auth.onAuthStateChanged(user => {
      if (user) {
        const chkadmin = user.phoneNumber.replace('+91', '');
        setTimeout(() => {
          this.loadingController.dismiss();
        }, 2000);
        let loadMsg = '';
        let redirectUrl = '';
        if (chkadmin == '8888888888') {
          loadMsg = 'Loading admin area';
          redirectUrl = '/all-materials';
        } else {
          loadMsg = 'Loading your profile';
          redirectUrl = '/profile/mobile/' + user.phoneNumber.replace('+91', '');
        }
        this.loadingController.create({
          message: loadMsg,
          mode: 'ios'
        }).then((res) => {
          res.present();
          res.onDidDismiss().then((dis) => {
            this.router.navigate([redirectUrl]);
          });
        });
      }
    });
  }

  ngOnInit() {
    this.menu.enable(false);
  }

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
