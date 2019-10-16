import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { AlertController, IonicModule, IonicRouteStrategy, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NgxMaskIonicModule } from 'ngx-mask-ionic';

import * as firebase from 'firebase';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';

import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';

import { Camera } from '@ionic-native/camera/ngx';

import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';

firebase.initializeApp({
  apiKey: 'AIzaSyBA6WJFcR_c13T9Q-hIdwXRV5GC59OdPmg',
  authDomain: 'bhumi-narrow-fab.firebaseapp.com',
  databaseURL: 'https://bhumi-narrow-fab.firebaseio.com',
  projectId: 'bhumi-narrow-fab',
  storageBucket: '',
  messagingSenderId: '900635805457',
  appId: '1:900635805457:web:8431369e0f961389b16eb0',
  measurementId: 'G-R4CP2PPVVY'
});

@NgModule({
  declarations: [AppComponent ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    NgxMaskIonicModule.forRoot(),
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBA6WJFcR_c13T9Q-hIdwXRV5GC59OdPmg',
      authDomain: 'bhumi-narrow-fab.firebaseapp.com',
      databaseURL: 'https://bhumi-narrow-fab.firebaseio.com',
      projectId: 'bhumi-narrow-fab',
      storageBucket: '',
      messagingSenderId: '900635805457',
      appId: '1:900635805457:web:8431369e0f961389b16eb0',
      measurementId: 'G-R4CP2PPVVY'
    }),
    AngularFireAuthModule,
    HttpClientModule,
  ],
providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HTTP,
    SocialSharing,
    Camera,
    FileTransfer,
    File,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  subscribe: any;

  constructor(
    private platform: Platform,
    public alertCtrl: AlertController,
  ) {
    // this.subscribe = this.platform.backButton.subscribeWithPriority(999999, () => {
    //   this.presentAlertConfirm();
    // });
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
