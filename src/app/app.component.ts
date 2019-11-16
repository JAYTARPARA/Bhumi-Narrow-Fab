import { Component, OnDestroy } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { MenuController, Platform, LoadingController, AlertController, NavController } from '@ionic/angular';
import { AuthenticationService } from './services/authentication.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate: any;
  showMenu = false;
  subscribe: any;
  mobile: any;
  backButtonSubscriptionMain: any;
  callFirstTime = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fireAuth: AngularFireAuth,
    private router: Router,
    private menu: MenuController,
    public loadingController: LoadingController,
    public alertCtrl: AlertController,
    public auth: AuthenticationService,
    public navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private storage: Storage,
  ) {
    // this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(999999, () => {
      // tslint:disable-next-line:max-line-length
    //   if (this.constructor.name == 'HomePage' || this.constructor.name == 'LoginPage' || this.constructor.name == 'AllMaterialsPage' || this.constructor.name == 'MaterialPage') {
    //     this.presentAlertConfirm();
    //   }
    // });
    this.initializeApp();
    this.storage.get('authentication').then((authentication) => {
      console.log('Here');
      if (authentication == null) {
        this.router.navigate(['/authentication']);
      } else if (authentication == 'wrong') {
        this.auth.presentToast('You have entered wrong passcode', false, 'bottom', 1500, 'danger');
        this.router.navigate(['/authentication']);
      }
    });
    this.fireAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.auth.usermobile = user.phoneNumber.replace('+91', '');
      }
    });
    this.auth.getAdminAllTotal().then(response => {
      if (response['success']) {
        console.log(response);
        this.auth.adminTotalOrders = response['totalOrders'];
        this.auth.adminTotalUsers = response['totalUsers'];
        this.auth.adminTotalMaterials = response['totalMaterials'];
      } else {
        this.auth.adminTotalOrders = 0;
        this.auth.adminTotalUsers = 0;
        this.auth.adminTotalMaterials = 0;
      }
    });
    this.auth.getTotalOrders(this.auth.usermobile).then(response => {
      console.log(response);
      if (response['success']) {
        this.auth.totalOrders = response['total'];
      } else {
        this.auth.totalOrders = 0;
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#222');
      this.splashScreen.hide();
      this.checkUserStatus();
    });
  }

  checkUserStatus() {
    setInterval(() => {
      this.auth.checkUserStatus(this.auth.usermobile).then(response => {
        console.log(response);
        if (response['success'] == 1 && response['status'] == 0) {
          this.auth.presentToast('You are blocked by admin', false, 'bottom', 1500, 'danger');
          this.fireAuth.auth.signOut().then(() => {
            this.router.navigate(['/home']);
          });
        }
      });
    }, 5000);
  }

  async exitApp() {
    this.menu.close();
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

  async logout() {
    this.menu.close();
    const alert = await this.alertCtrl.create({
      header: 'Confirm!',
      subHeader: 'Are you sure you want to logout?',
      mode: 'ios',
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => { }
        }, {
          text: 'YES',
          handler: () => {
            this.menu.close();
            this.showMenu = false;
            setTimeout(() => {
              this.loadingController.dismiss();
            }, 1500);
            this.loadingController.create({
              message: 'Logging Out',
              mode: 'ios'
            }).then((res) => {
              res.present();
              res.onDidDismiss().then((dis) => {
                this.fireAuth.auth.signOut().then(() => {
                  this.router.navigate(['/home']);
                });
              });
            });
          }
        }
      ]
    });

    await alert.present();
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
