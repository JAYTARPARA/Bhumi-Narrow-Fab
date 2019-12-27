import { Component, OnDestroy } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { MenuController, Platform, LoadingController, AlertController, NavController } from '@ionic/angular';
import { AuthenticationService } from './services/authentication.service';
import { Storage } from '@ionic/storage';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Autostart } from '@ionic-native/autostart/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';

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
    private oneSignal: OneSignal,
    private autostart: Autostart,
    private backgroundMode: BackgroundMode,
    public push: Push,
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
        return;
      } else if (authentication == 'wrong') {
        this.auth.presentToast('You have entered wrong passcode', false, 'bottom', 1500, 'danger');
        this.router.navigate(['/authentication']);
        return;
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
        this.auth.adminWhatsappOrders = response['totalWhatsappOrders'];
        this.auth.adminTotalUsers = response['totalUsers'];
        this.auth.adminTotalMaterials = response['totalMaterials'];
      } else {
        this.auth.adminTotalOrders = 0;
        this.auth.adminWhatsappOrders = 0;
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
      if (this.platform.is('cordova')) {
        this.initPushNotification();
        this.setupPush();
      }
      // this.statusBar.styleDefault();
      // this.backgroundMode.enable();
      this.autostart.enable();
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

  setupPush() {
    // I recommend to put these into your environment.ts
    this.oneSignal.startInit('a1711926-9bb5-45f3-8b9c-c491e036198d', '900635805457');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);

    // Notifcation was received in general
    this.oneSignal.handleNotificationReceived().subscribe(data => {
      const msg = data.payload.body;
      const title = data.payload.title;
      const additionalData = data.payload.additionalData;
    });

    // Notification was really clicked/opened
    this.oneSignal.handleNotificationOpened().subscribe(data => {
      // Just a note that the data is a different place here!
      const additionalData = data.notification.payload.additionalData;
    });

    this.oneSignal.endInit();
  }

  initPushNotification() {
    // to check if we have permission
    this.push.hasPermission()
    .then((res: any) => {
      if (res.isEnabled) {
        console.log('We have permission to send push notifications');
      } else {
        console.log('We do not have permission to send push notifications');
      }
    });

    // Create a channel (Android O and above). You'll need to provide the id, description and importance properties.
    this.push.createChannel({
      id: 'bhuminarrowfab',
      description: 'Bhumi Narrow Fab channel',
      // The importance property goes from 1 = Lowest, 2 = Low, 3 = Normal, 4 = High and 5 = Highest.
      importance: 5
    }).then(() => console.log('Channel created'));

    const options: PushOptions = {
      android: {
        senderID: '900635805457',
      }
     };

    const pushObject: PushObject = this.push.init(options);
    pushObject.on('notification').subscribe((notification: any) => {
      console.log('Received a notification');
      console.log(notification);
    });
    pushObject.on('registration').subscribe((registration: any) => {
      console.log('Registered');
      console.log(registration);
      const registrationId = registration['registrationId'];
      this.auth.addRegistrationID(btoa(registrationId)).then(response => {
        console.log('Add Token');
        console.log(response);
      });
    });
    pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
  }
}
