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
        this.mobile = user.phoneNumber.replace('+91', '');
        if (this.mobile == '8888888888') {
          this.auth.getAdminAllTotal().then(response => {
            if (response['success']) {
              // console.log(response);
              this.auth.adminTotalOrders = response['totalOrders'];
              this.auth.adminTotalUsers = response['totalUsers'];
              this.auth.adminTotalMaterials = response['totalMaterials'];
            } else {
              this.auth.adminTotalOrders = 0;
              this.auth.adminTotalUsers = 0;
              this.auth.adminTotalMaterials = 0;
            }
            this.showMenu = true;
            this.sideMenu();
          });
        } else {
          this.auth.getTotalOrders(this.mobile).then(response => {
            console.log(response);
            if (response['success']) {
              this.auth.totalOrders = response['total'];
            } else {
              this.auth.totalOrders = 0;
            }
            this.showMenu = true;
            this.sideMenu();
          });
        }
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
            title : 'All Materials',
            url   : '/all-materials',
            icon  : 'images',
            number : this.auth.adminTotalMaterials,
            showNum : 1
          },
          {
            title : 'All Orders',
            url   : '/all-orders',
            icon  : 'wallet',
            number : this.auth.adminTotalOrders,
            showNum : 1
          },
          {
            title : 'All Users',
            url   : '/all-users',
            icon  : 'contacts',
            number : this.auth.adminTotalUsers,
            showNum : 1
          },
          {
            title : 'Upload Materials',
            url   : '/upload-materials',
            icon  : 'cloud-upload',
            showNum : 0
          }
        ];
    } else {
      this.navigate =
        [
          {
            title : 'My Profile',
            url   : '/profile/mobile/' + this.mobile,
            icon  : 'contact',
            showNum : 0
          },
          {
            title : 'My Orders',
            url   : '/orders/mobile/' + this.mobile,
            icon  : 'wallet',
            number : this.auth.totalOrders,
            showNum : 1
          },
          {
            title : 'All Materials',
            url   : '/material/mobile/' + this.mobile,
            icon  : 'images',
            showNum : 0
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
