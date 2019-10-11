import { Component, OnInit, ViewChild } from '@angular/core';

import * as firebase from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';

import { Platform, ToastController, LoadingController, IonContent, AlertController } from '@ionic/angular';

import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.page.html',
  styleUrls: ['./material.page.scss'],
})
export class MaterialPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;
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

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    private platform: Platform,
    private activatedRoute: ActivatedRoute,
    public auth: AuthenticationService,
    private toastCtrl: ToastController,
    public loadingController: LoadingController,
    public alertCtrl: AlertController
  ) {
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.loadingController.create({
      message: 'checking your data',
      mode: 'ios'
    }).then((res) => {
      res.present();
      res.onDidDismiss().then((dis) => {
      });
    });
    const value = this.activatedRoute.snapshot.paramMap.get('id');
    const type = this.activatedRoute.snapshot.paramMap.get('type');
    this.auth.getUser(value, type).then(response => {
      console.log(response);
      this.userArray.push(response);
      this.id = value;
      this.name = response['name'];
      this.address = response['address'];
      this.gst = response['gst'];
      this.phone = response['mobile'];
      this.loadingController.dismiss();
      if (this.name == "" || this.address == "" || this.gst == "") {
        this.auth.presentToast('Please provide all details', false, 'bottom', 2500, 'danger');
        this.router.navigate(['/profile/mobile/' + value]);
      } else {
        this.loadingController.create({
          message: 'loding material data',
          mode: 'ios'
        }).then((ress) => {
          ress.present();
        });
        this.loadMaterials();
      }
    }).catch((err) => {
      this.loadingController.dismiss();
    });
  }

  loadMaterials(infiniteScroll?) {
    this.auth.getMaterials(this.results, this.page).then(response => {
      if (response['success'] == 1) {
        if (this.lastid == 0) {
          this.lastid = response['materials'][0]['id'];
        }
        this.materials = this.materials.concat(response['materials']);
        this.maximumPages = Math.ceil(response['total'] / this.results);
        console.log('Max Page: ' + this.maximumPages);
        console.log(this.materials);
        if (infiniteScroll) {
          infiniteScroll.target.complete();
        } else {
          this.loadingController.dismiss();
        }
      } else {
        this.showNoData = false;
      }
    });
  }

  getLatestData(lastid) {
    console.log('Last ID: ' + lastid);
    this.loadingController.create({
      message: 'checking for new data',
      mode: 'ios'
    }).then((res) => {
      res.present();
      res.onDidDismiss().then((dis) => {
      });
    });
    this.auth.getLatestMaterials(this.latestResults, lastid).then(response => {
      if (response['success'] == 1) {
        this.materials = this.materials.concat(response['materials']);
        this.lastid = response['materials'][0]['id'];
        this.loadingController.dismiss();
        this.content.scrollToBottom(1500);
      } else {
        this.auth.presentToast('No new data found', false, 'bottom', 1000, 'dark');
      }
    });
  }

  async loadMore(infiniteScroll) {
    this.page++;
    console.log('infiniteScroll: ' + infiniteScroll);
    console.log('page: ' + this.page);
    console.log('maximumPages: ' + this.maximumPages);

    if (this.page <= this.maximumPages) {
      await this.wait(1000);
      this.loadMaterials(infiniteScroll);
    }

    if (this.page === this.maximumPages) {
      infiniteScroll.target.disabled = true;
    }
  }

  wait(time) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  }

  async materialOrder(id, price, name, material_id, image, quantity, sample, key) {
    const imageurl =  'https://bhuminarrowfab.000webhostapp.com/images/materials/' + image;

    const splitprice = price.split('/');
    const minquantity = splitprice[1].split('M')[0];

    if (sample[key] === undefined) {
      sample[key] = false;
    }

    this.materialArray = [
      {
        'id': id,
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
        header: 'Confirm Order!',
        subHeader: 'Confirm your order?',
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
              this.auth.sendOrder(this.userArray, this.materialArray);
              // setTimeout(() => {
              //   this.loadingController.dismiss();
              // }, 1500);
              // this.loadingController.create({
              //   message: 'Sending your order',
              //   mode: 'ios'
              // }).then((res) => {
              //   res.present();
              //   res.onDidDismiss().then((dis) => {
              //     this.auth.presentToast('Order Placed', false, 'bottom', 1500, 'success');
              //     this.quantity[key] = '';
              //     this.sample[key] = false;
              //   });
              // });
            }
          }
        ]
      });

      await alert.present();
    }
  }
}
