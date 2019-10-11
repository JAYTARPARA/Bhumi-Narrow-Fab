import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';

import * as firebase from 'firebase';

import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  phone: any;
  uid: any;
  lastSignIn: any;
  created: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fireAuth: AngularFireAuth,
  ) { }

  ngOnInit() {
    this.fireAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.phone = user.phoneNumber;
        this.uid = user.uid;
        this.lastSignIn = user.metadata.lastSignInTime;
        this.created = user.metadata.creationTime;
      } else {
        this.router.navigate(['/home']);
      }
    });
  }
}
