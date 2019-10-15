import { Component } from '@angular/core';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

import { MenuController, Platform, LoadingController, AlertController } from '@ionic/angular';

import { AuthenticationService } from './services/authentication.service';

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
  ) {
    this.fireAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.showMenu = true;
        this.mobile = user.phoneNumber.replace('+91', '');
        this.auth.getTotalOrders(this.mobile).then(response => {
          console.log(response);
          if (response['success']) {
            this.auth.totalOrders = response['total'];
          } else {
            this.auth.totalOrders = 0;
          }
        });
        this.sideMenu();
      }
    });
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#222');
      this.splashScreen.hide();
    });
  }

  sideMenu() {
    if (this.mobile == '8888888888') {
      this.navigate =
        [
          {
            title : 'Upload Materials',
            url   : '/upload-materials',
            icon  : 'cloud-upload'
          },
          {
            title : 'All Orders',
            url   : '/all-orders',
            icon  : 'wallet',
            number : 1
          },
          {
            title : 'All Users',
            url   : '/all-users',
            icon  : 'contacts',
            number : 1
          },
          {
            title : 'All Materials',
            url   : '/admin-all-materials',
            icon  : 'images'
          },
        ];
    } else {
      this.navigate =
        [
          {
            title : 'My Profile',
            url   : '/profile/mobile/' + this.mobile,
            icon  : 'contact'
          },
          {
            title : 'My Orders',
            url   : '/orders/mobile/' + this.mobile,
            icon  : 'wallet',
            number : 1
          },
          {
            title : 'All Materials',
            url   : '/material/mobile/' + this.mobile,
            icon  : 'images'
          },
        ];
    }
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
}
