import { Component, OnInit, ViewChild } from '@angular/core';

import * as firebase from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';

import { MenuController, Platform, ToastController, LoadingController, IonContent, AlertController } from '@ionic/angular';

import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.page.html',
  styleUrls: ['./material.page.scss'],
})
export class MaterialPage implements OnInit {
  @ViewChild(IonContent, {static: false}) content: IonContent;

  phone: any;
  uid: any;
  lastSignIn: any;
  created: any;
  subscribe: any;
  name: any;
  address: any;
  gst: any;
  id: any;
  materials = [];
  page = 1;
  maximumPages: any;
  results = 5;
  showNoData = true;
  lastid = 0;
  latestResults = 5;
  quantity = [];
  sample = [];
  userArray = [];
  materialArray = [];
  totalValue = [];
  noMoreData = 0;
  value: any;
  type: any;
  searchKey: any;
  showNoDataForSearch = true;
  owner = 'All';

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    private platform: Platform,
    private activatedRoute: ActivatedRoute,
    public auth: AuthenticationService,
    private toastCtrl: ToastController,
    public loadingController: LoadingController,
    public alertCtrl: AlertController,
    private menu: MenuController,
  ) {
  }

  ngOnInit() {
    this.menu.enable(true, 'user');
    this.value = this.activatedRoute.snapshot.paramMap.get('id');
    this.type = this.activatedRoute.snapshot.paramMap.get('type');
    this.auth.usermobile = this.value;
  }

  ionViewWillEnter(callit?, infiniteScroll?) {
    this.materials = [];
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
    if (!this.auth.userProfileDone) {
      this.auth.presentToast('Please provide all details', false, 'bottom', 2500, 'danger');
      this.router.navigate(['/profile/mobile/' + this.value]);
    } else {
      this.auth.getTotalOrders(this.phone).then(msg => {
        if (msg['success']) {
          this.auth.totalOrders = msg['total'];
        } else {
          this.auth.totalOrders = 0;
        }
      });
      this.loadingController.create({
        message: 'loading materials',
        mode: 'ios'
      }).then((ress) => {
        ress.present();
      });
      this.showNoDataForSearch = true;
      this.loadMaterials();
    }
  }

  loadMaterials(infiniteScroll?) {
    this.auth.getMaterials(this.results, this.page, this.searchKey, this.owner).then(response => {
      if (response['success'] == 1) {
        this.materials = this.materials.concat(response['materials']);
        this.maximumPages = Math.ceil(response['total'] / this.results);
        console.log(this.materials);
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
    console.log('Page: ' + this.page);
    console.log('Max Page: ' + this.maximumPages);

    if (this.page <= this.maximumPages) {
      await this.wait(1000);
      this.loadMaterials(infiniteScroll);
    }

    if (this.page === this.maximumPages) {
      // infiniteScroll.target.disabled = true;
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

  async materialOrder(company, id, price, name, material_id, image, quantity, sample, key) {
    const imageurl =  'https://bhuminarrowfab.000webhostapp.com/images/materials/' + image;

    const splitprice = price.split('/');
    const minquantity = splitprice[1].split('M')[0];

    if (sample[key] === undefined) {
      sample[key] = false;
    }

    this.materialArray = [
      {
        'id': id,
        'company': company,
        'price': price,
        'name': name,
        'material_id': material_id,
        'imageurl': imageurl,
        'quantity': quantity[key],
        'sample': sample[key]
      }
    ];

    if (quantity[key] === undefined || quantity[key] < 0) {
      this.auth.presentToast('Please add quantity', false, 'bottom', 1500, 'danger');
    } else if (quantity[key] < minquantity) {
      this.auth.presentToast('Minimum quantity to order is ' + minquantity + ' Meter', false, 'bottom', 1500, 'danger');
    } else {
      const alert = await this.alertCtrl.create({
        header: 'Confirm your order!',
        message: 'Please click send button in whatsapp otherwise your order will not send to the owner',
        mode: 'ios',
        buttons: [
          {
            text: 'NO',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              this.quantity[key] = '';
              this.sample[key] = false;
            }
          }, {
            text: 'YES',
            handler: () => {
              this.loadingController.create({
                message: 'Saving your order',
                mode: 'ios'
              }).then((res) => {
                res.present();
                res.onDidDismiss().then((dis) => {
                });
              });
              this.auth.sendOrder(this.userArray, this.materialArray).then(response => {
                this.loadingController.dismiss();
                this.sample[key] = false;
                this.quantity[key] = '';
                this.auth.totalOrders++;
              });
            }
          }
        ]
      });

      await alert.present();
    }
  }

  calculateTotal(quantity, key, price) {
    const pricesplit = price.split('/');
    const unitprice = pricesplit[0];
    const unitsplit = pricesplit[1].split('M');
    const unit = unitsplit[0];

    this.totalValue[key] =  Math.round((quantity * unitprice) / unit);
  }
}
