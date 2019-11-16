import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

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
  ) { }

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
