import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, LoadingController, ToastController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';

import * as firebase from 'firebase';

import { AngularFireAuth } from '@angular/fire/auth';

import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';

import { AuthenticationService } from './../../services/authentication.service';

import { Observable } from 'rxjs';

declare var SMSReceive: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  phone: any;
  verificationID: any;
  code = '';
  public recaptchaVerifier: firebase.auth.RecaptchaVerifier;
  loaderToShow: any;
  OTP: any;
  confirmationResultOTP: any;
  user: any;
  showOTPInput = false;
  OTPmessage = '';
  userResponse: Observable<any>;
  // checkuserResponse: Observable<any>;
  checkuserResponse: any;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public loadingController: LoadingController,
    private router: Router,
    private fireAuth: AngularFireAuth,
    private toastCtrl: ToastController,
    private http: HttpClient,
    private nativeHttp: HTTP,
    private plt: Platform,
    public auth: AuthenticationService
  ) { }

  ngOnInit() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', { size: 'invisible' });
  }

  async presentToast(message, showbutton, position, duration) {
    const toast = await this.toastCtrl.create({
      message: message,
      showCloseButton: showbutton,
      position: position,
      duration: duration,
      color: 'medium',
      mode: 'ios'
    });
    toast.present();
  }

  sendotp(phone) {
    this.showLoader();
    let phoneNumber = phone.replace('(+91)', '+91');
    phoneNumber = phoneNumber.replace(' ', '');
    phoneNumber = phoneNumber.replace('-', '');

    const appVerifier = this.recaptchaVerifier;

    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier).then(confirmationResult => {
      this.hideLoader();
      // Enable this for web test
      // this.showAlertForCode(confirmationResult, '');
      this.showOTPInput = true;
      this.OTPmessage = 'An OTP is sent to your number. You should receive it in 15s';
      this.presentToast('Waiting for OTP', false, 'middle', 1000);
      // Enable this for app test
      this.confirmationResultOTP = confirmationResult;
      this.start();
    }).catch( (error) => {
      this.hideLoader();
      this.showAlertForError(error.message);
    });
  }

  async showAlertForError(error) {
    const errorAlert = await this.alertCtrl.create({
      header: 'Error!!!',
      message: error,
      mode: 'ios',
      buttons: ['OK']
    });

    await errorAlert.present();
  }

  confirmUser() {
    console.log(this.phone);
    let loadMsg = '';
    if (this.phone == '(+91) 99999-88888') {
      loadMsg = 'Loading';
    } else {
      loadMsg = 'Loading your profile';
    }
    this.loaderToShow = this.loadingController.create({
      message: loadMsg,
      mode: 'ios'
    }).then((res) => {
      res.present();
      res.onDidDismiss().then((dis) => { });
    });
    const confirmationResult = this.confirmationResultOTP;
    const receivedOTP = this.OTP;

    confirmationResult
      .confirm(receivedOTP)
      .then( (result) => {
        // User signed in successfully.
        console.log(result.user);
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        // Redirect to the profile with details
        this.fireAuth.auth.onAuthStateChanged(user => {
          if (user) {
            // Save user to database if not added
            const mobile = user.phoneNumber.replace('+91', '');
            if (mobile == '8888888888') {
              this.hideLoader();
              this.navCtrl.navigateForward('/upload-materials');
            } else {
              this.auth.addUser(mobile).then(data => {
                console.log(data);
                if (data['success'] == 0) {
                  this.auth.createNewUserWithMobile(mobile).then(response => {
                    console.log(response);
                    if (response['success'] == 1) {
                      this.hideLoader();
                      const id = response['id'];
                      this.navCtrl.navigateForward('/profile/id/' + id);
                    } else {
                      this.hideLoader();
                    }
                  });
                } else {
                  this.hideLoader();
                  this.navCtrl.navigateForward('/profile/id/' + data['id']);
                }
              });
            }
          } else {
            this.hideLoader();
            this.router.navigate(['/home']);
          }
        });
      })
      .catch( (error) => {
        // User couldn't sign in (bad verification code?)
        this.hideLoader();
        this.showAlertForError(error.message);
      });
  }

  async showAlertForCode(confirmationResult, receivedOTP) {
    const prompt = await this.alertCtrl.create({
      header: 'OTP Verification',
      subHeader: 'Enter OTP to verify',
      inputs: [{ name: 'confirmationCode', placeholder: 'OTP', type: 'number', value: receivedOTP}],
      mode: 'ios',
      backdropDismiss: false,
      buttons: [
        {
          text: 'CANCEL',
          handler: data => { console.log('Cancel clicked'); }
        },
        {
          text: 'LOGIN',
          handler: data => {
            // Here we need to handle the confirmation code
          confirmationResult
            .confirm(data.confirmationCode)
            .then( (result) => {
              // User signed in successfully.
              console.log(result.user);
              firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
              // Redirect to the dashboard with details
              this.fireAuth.auth.onAuthStateChanged(user => {
                if (user) {
                  this.navCtrl.navigateForward('/profile');
                } else {
                  this.router.navigate(['/home']);
                }
              });
            })
            .catch( (error) => {
              // User couldn't sign in (bad verification code?)
              this.showAlertForError(error.message);
            });
          }
        }
      ]
    });
    await prompt.present();
  }

  showLoader() {
    this.loaderToShow = this.loadingController.create({
      message: 'Sending OTP',
      mode: 'ios'
    }).then((res) => {
      res.present();
      res.onDidDismiss().then((dis) => { });
    });
    this.hideLoader();
  }

  hideLoader() {
    this.loadingController.dismiss();
  }

  start() {
    SMSReceive.startWatch(
      () => {
        document.addEventListener('onSMSArrive', (e: any) => {
          const IncomingSMS = e.data;
          this.processSMS(IncomingSMS);
        });
      },
      () => { console.log('watch start failed')}
    )
  }

  stop() {
    SMSReceive.stopWatch(
      () => { console.log('watch stopped')},
      () => { console.log('watch stop failed')}
    );
  }

  processSMS(data) {
    // Check SMS for a specific string sequence to identify it is you SMS
    // Design your SMS in a way so you can identify the OTP quickly i.e. first 6 letters
    // In this case, I am keeping the first 6 letters as OTP
    const message = data.body;
    if (message && message.indexOf('localhost') != -1) {
      this.OTP = data.body.slice(0, 6);
      this.presentToast('OTP is received', false, 'middle', 1000);
      this.OTPmessage = ' ';
      this.stop();
    }
  }
}
