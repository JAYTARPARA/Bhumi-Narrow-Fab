import { Component, OnInit, OnDestroy } from '@angular/core';

import { Router } from '@angular/router';

import * as firebase from 'firebase';

import { AngularFireAuth } from '@angular/fire/auth';
import { LoadingController, Platform, AlertController, ToastController, MenuController, NavController } from '@ionic/angular';
import { AuthenticationService } from './../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  subscribe: any;
  backButtonSubscription: any;
  showError = false;

  constructor(
    public platform: Platform,
    private router: Router,
    private fireAuth: AngularFireAuth,
    public loadingControllerHome: LoadingController,
    public alertCtrl: AlertController,
    public toast: ToastController,
    public auth: AuthenticationService,
    private menu: MenuController,
    public navCtrl: NavController,
  ) {
    this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(999999, () => {
      this.presentAlertConfirm();
    });
  }

  ngOnInit() {
    this.menu.enable(false);
    this.fireAuth.auth.onAuthStateChanged(user => {
      if (user) {
        const chkadmin = user.phoneNumber.replace('+91', '');
        let redirectUrl = '';
        if (chkadmin == '8888888888') {
          redirectUrl = '/all-materials';
        } else {
          redirectUrl = '/material/mobile/' + chkadmin;
        }
        setTimeout(() => {
          this.navCtrl.navigateForward(redirectUrl);
        }, 1000);
      }
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

  redirectToLogin() {
    this.navCtrl.navigateForward('/login');
  }
}
