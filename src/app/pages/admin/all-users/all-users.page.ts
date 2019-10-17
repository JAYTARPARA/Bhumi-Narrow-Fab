import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Platform, ToastController, LoadingController, IonContent, AlertController } from '@ionic/angular';
import { AuthenticationService } from './../../../services/authentication.service';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.page.html',
  styleUrls: ['./all-users.page.scss'],
})
export class AllUsersPage implements OnInit {
  @ViewChild(IonContent, {static: false}) content: IonContent;

  users = [];
  page = 1;
  maximumPages: any;
  results = 5;
  showNoData = true;
  noMoreData = 0;
  searchKey: any;
  showNoDataForSearch = true;
  number: any;

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    private platform: Platform,
    private activatedRoute: ActivatedRoute,
    public auth: AuthenticationService,
    private toastCtrl: ToastController,
    public loadingController: LoadingController,
    public alertCtrl: AlertController,
    private callNumber: CallNumber
  ) { }

  ngOnInit() { }

  ionViewWillEnter(callit?, infiniteScroll?) {
    this.users = [];
    this.page = 1;
    if (callit) {
      this.content.scrollToTop(1500);
      setTimeout(() => {
        this.noMoreData = 0;
        this.ionViewDidEnter();
      }, 100);
    }
  }

  ionViewDidEnter() {
    this.auth.getAdminAllTotal().then(res => {
      if (res['success']) {
        this.auth.adminTotalOrders = res['totalOrders'];
        this.auth.adminTotalUsers = res['totalUsers'];
        this.auth.adminTotalMaterials = res['totalMaterials'];
      } else {
        this.auth.adminTotalOrders = 0;
        this.auth.adminTotalUsers = 0;
        this.auth.adminTotalMaterials = 0;
      }
    });
    this.loadingController.create({
      message: 'loading users',
      mode: 'ios'
    }).then((ress) => {
      ress.present();
    });
    this.showNoDataForSearch = true;
    this.loadUsers();
  }

  loadUsers(infiniteScroll?) {
    if (this.searchKey == undefined) {
      this.searchKey = '';
    }

    this.auth.getUsers(this.results, this.page, this.searchKey).then(response => {
      if (response['success'] == 1) {
        this.users = this.users.concat(response['users']);
        this.maximumPages = Math.ceil(response['total'] / this.results);
        console.log(this.users);
        if (response['total'] <= this.results ) {
          this.noMoreData = 1;
        }
        if (infiniteScroll) {
          infiniteScroll.target.complete();
        } else {
          this.loadingController.dismiss();
        }
      } else {
        if (this.searchKey == '') {
          this.showNoData = false;
        } else {
          this.showNoDataForSearch = false;
        }
        this.loadingController.dismiss();
      }
    });
  }

  async loadMore(infiniteScroll) {
    this.page++;

    if (this.page <= this.maximumPages) {
      await this.wait(1000);
      this.loadUsers(infiniteScroll);
    }

    if (this.page === this.maximumPages) {
      this.noMoreData = 1;
    }
  }

  wait(time) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  }

  callMe(number) {
    this.callNumber.callNumber(number, true)
    .then(res =>
      console.log('Launched dialer!', res)
    )
    .catch(err =>
      console.log('Error launching dialer', err)
    );
  }

}
