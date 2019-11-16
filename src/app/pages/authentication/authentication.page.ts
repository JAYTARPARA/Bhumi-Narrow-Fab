import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage implements OnInit {

  passcode = '';

  constructor(
    public auth: AuthenticationService,
    private storage: Storage,
    private router: Router,
    private platform: Platform,
  ) {
    this.platform.backButton.subscribeWithPriority(999999, () => {
      document.addEventListener('backbutton', (event) => {
        event.preventDefault();
        event.stopPropagation();
      }, false);
    });
  }

  ngOnInit() {
  }

  verifyMe() {
    console.log('passcode: ' + this.passcode);
    if (this.passcode == '') {
      this.auth.presentToast('Please enter passcode', false, 'bottom', 1500, 'danger');
    } else if (this.passcode == '123456') {
      this.storage.set('authentication', 'done');
      this.auth.presentToast('You can access application.', false, 'bottom', 1500, 'success');
      this.router.navigate(['/home']);
    } else {
      this.auth.presentToast('This passcode is wrong', false, 'bottom', 1500, 'danger');
      this.storage.set('authentication', 'wrong');
    }
  }

}
