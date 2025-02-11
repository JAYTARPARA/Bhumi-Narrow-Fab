import { Component, OnInit, ViewChild } from '@angular/core';
// tslint:disable-next-line:max-line-length
import { AlertController, NavController, LoadingController, ToastController, Platform, MenuController, IonInput, IonButton } from '@ionic/angular';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './../../services/authentication.service';
import { Observable } from 'rxjs';
import * as $ from 'jquery';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

declare var SMSReceive: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // @ViewChild('OTPInput', {static: false})  inputElement: IonButton;

  phone: any;
  verificationID: any;
  code = '';
  public recaptchaVerifier: firebase.auth.RecaptchaVerifier;
  loaderToShow: any;
  OTP = '';
  confirmationResultOTP: any;
  user: any;
  showOTPInput = false;
  // showOTPInput = true;
  OTPmessage = '';
  hideOTP = true;
  submitted = false;
  continue = false;
  userResponse: Observable<any>;
  // checkuserResponse: Observable<any>;
  checkuserResponse: any;
  showError = false;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public loadingControllerLogin: LoadingController,
    private router: Router,
    private fireAuth: AngularFireAuth,
    private toastCtrl: ToastController,
    private http: HttpClient,
    private nativeHttp: HTTP,
    private plt: Platform,
    public auth: AuthenticationService,
    private menu: MenuController,
    private nativePageTransitions: NativePageTransitions,
  ) { }

  ionViewWillEnter() {
    this.nativePageTransitions.slide(this.auth.optionsRight)
      .then()
      .catch((errr) => {
        console.log(errr);
    });
  }

  ngOnInit() {
    this.menu.enable(false);
    this.fireAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.showError = true;
        const chkadmin = user.phoneNumber.replace('+91', '');
        let redirectUrl = '';
        if (chkadmin == '8888888888') {
          redirectUrl = '/all-materials';
        } else {
          redirectUrl = '/material/mobile/' + chkadmin;
        }
        this.navCtrl.navigateForward(redirectUrl);
        // setTimeout(() => {
        //   this.navCtrl.navigateForward(redirectUrl);
        // }, 600);
      }
    });
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
    let phoneNumber = phone.replace('(+91)', '+91');
    phoneNumber = phoneNumber.replace(' ', '');
    phoneNumber = phoneNumber.replace('-', '');
    if (phone == undefined || phone == '') {
      this.auth.presentToast('Please enter mobile number first', false, 'bottom', 1500, 'danger');
    } else if (phoneNumber != '+918888888888') {
      this.auth.presentToast('This app is only for admin purpose', false, 'bottom', 1500, 'danger');
    } else {
      this.showLoader();
      this.continue = true;
      let phoneNumber = phone.replace('(+91)', '+91');
      phoneNumber = phoneNumber.replace(' ', '');
      phoneNumber = phoneNumber.replace('-', '');

      const appVerifier = this.recaptchaVerifier;

      const chkPhoneNumber = phoneNumber.replace('+91', '');

      this.auth.checkUserStatus(chkPhoneNumber).then(response => {
        console.log(response);
        if (response['success'] == 1 && response['status'] == 0) {
          setTimeout(() => {
            this.hideLoader();
          }, 1000);
          this.auth.presentToast('You are blocked by admin', false, 'bottom', 1500, 'danger');
          this.router.navigate(['/home']);
        } else {
          firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier).then(confirmationResult => {
            this.hideLoader();
            // Enable this for web test
            // this.showAlertForCode(confirmationResult, '');
            this.showOTPInput = true;
            this.hideOTP = false;
            this.OTPmessage = 'An OTP is sent to your number. You should receive it in 15s';
            this.presentToast('Waiting for OTP', false, 'middle', 1000);
            // Enable this for app test
            this.confirmationResultOTP = confirmationResult;
            // this.start();
          }).catch( (error) => {
            this.hideLoader();
            this.showAlertForError(error.message);
          });
        }
      });
    }
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
    if (this.OTP == undefined || this.OTP == '') {
      this.auth.presentToast('Please enter OTP first', false, 'bottom', 1500, 'danger');
    } else {
      this.submitted = true;
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
              this.navCtrl.navigateForward('/all-materials');
            } else {
              this.auth.addUser(mobile).then(data => {
                console.log(data);
                if (data['success'] == 0) {
                  this.auth.createNewUserWithMobile(mobile).then(response => {
                    console.log(response);
                    if (response['success'] == 1) {
                      this.navCtrl.navigateForward('/profile/mobile/' + mobile);
                    } else if (response['success'] == 2) {
                      this.submitted = false;
                      this.auth.presentToast(response['message'], false, 'bottom', 2500, 'danger');
                    } else {
                      this.submitted = false;
                      this.auth.presentToast(response['message'], false, 'bottom', 2500, 'danger');
                    }
                  });
                } else if (data['success'] == 2) {
                  this.submitted = false;
                  this.auth.presentToast(data['message'], false, 'bottom', 2500, 'danger');
                } else if (data['success'] == 1) {
                  this.navCtrl.navigateForward('/material/mobile/' + mobile);
                }
              });
            }
          } else {
            this.router.navigate(['/home']);
          }
        });
      })
      .catch( (error) => {
        // User couldn't sign in (bad verification code?)
        this.submitted = false;
        this.showAlertForError(error.message);
      });
    }
  }

  showLoader() {
    this.loadingControllerLogin.create({
      message: 'Sending OTP',
      mode: 'ios'
    }).then((res) => {
      res.present();
      res.onDidDismiss().then((dis) => { });
    });
    this.hideLoader();
  }

  hideLoader() {
    this.loadingControllerLogin.dismiss();
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
      console.log(this.OTP);
      this.presentToast('OTP is received', false, 'middle', 1000);
      this.OTPmessage = ' ';
      // $('.continuebtn').click();
      this.stop();
    }
  }
}
