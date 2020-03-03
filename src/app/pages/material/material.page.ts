import { Component, OnInit, ViewChild } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';

// tslint:disable-next-line:max-line-length
import { MenuController, Platform, ToastController, LoadingController, IonContent, AlertController, ModalController } from '@ionic/angular';

import { AuthenticationService } from './../../services/authentication.service';

import { ImageModalPage } from './../image-modal/image-modal.page';

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
  pieces = [];
  userArray = [];
  materialArray = [];
  totalValue = [];
  noMoreData = 0;
  value: any;
  type: any;
  searchKey: any;
  showNoDataForSearch = true;
  owner = 'All';
  mtype = 'All';
  loadMaterialNow = false;
  backButtonSubscription: any;
  sortBy = 'Latest Materials';

  sortingFilter: any[] = [
    {
      name: 'Latest Materials',
    },
    {
      name : 'Price: high to low',
    },
    {
      name : 'Price: low to high',
    },
    {
      name : 'Color: A to Z',
    },
    {
      name : 'Color: Z to A',
    },
  ];

  materialType: any[] = [
    {
      name : 'All',
    },
    {
      name : 'Fancy',
    },
    {
      name : 'Needle Lace',
    },
    {
      name : 'Moti Lace',
    },
    {
      name : 'Crosset',
    },
    {
      name : 'Cut Work',
    },
  ];

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    private platform: Platform,
    private activatedRoute: ActivatedRoute,
    public auth: AuthenticationService,
    private toastCtrl: ToastController,
    public loadingControllerMaterial: LoadingController,
    public alertCtrl: AlertController,
    private menu: MenuController,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.menu.enable(true, 'user');
    this.value = this.activatedRoute.snapshot.paramMap.get('id');
    this.type = this.activatedRoute.snapshot.paramMap.get('type');
    this.auth.usermobile = this.value;

    console.log('Here');
    console.log('this.value: ' + this.value);
    console.log('this.type: ' + this.type);
  }

  ionViewWillEnter(callit?, infiniteScroll?) {
    console.log('Sorting: ' + this.sortBy);
    this.materials = [];
    this.page = 1;
    if (callit) {
      this.content.scrollToTop(1500);
      setTimeout(() => {
        this.noMoreData = 0;
        this.showNoData = true;
        this.showNoDataForSearch = true;
        this.ionViewDidEnter(callit);
      }, 100);
    }
  }

  ionViewDidEnter(callit?) {
    if (!callit) {
      this.loadingControllerMaterial.create({
        message: 'Loading materials',
        mode: 'ios'
      }).then((res) => {
        res.present();
        res.onDidDismiss().then((dis) => {
          console.log(this.loadMaterialNow);
          if (this.loadMaterialNow) {
            this.loadMaterials();
          }
        });
      });
    }

    this.auth.checkUserProfileStatus(this.value).then(response => {
      if (response['success'] == 1 && response['status'] == 0) {
        this.loadMaterialNow = false;
        this.loadingControllerMaterial.dismiss();
        this.auth.presentToast('Please provide all details', false, 'bottom', 2500, 'danger');
        this.router.navigate(['/profile/mobile/' + this.auth.usermobile]);
      } else if (response['success'] == 1 && response['status'] == 1) {
        this.loadMaterialNow = true;
        this.auth.getUser(this.value, this.type).then(results => {
          console.log(results);
          this.userArray.push(results);
        });
        // this.loadingControllerMaterial.dismiss();
        setTimeout(() => {
          if (!callit) {
            this.loadingControllerMaterial.dismiss();
          }
        }, 500);
      }  else if (response['success'] == 2) {
        if (!callit) {
          this.loadingControllerMaterial.dismiss();
        }
        this.auth.presentToast(response['message'], false, 'bottom', 2500, 'danger');
      } else {
        if (!callit) {
          this.loadingControllerMaterial.dismiss();
        }
      }
    });


    this.auth.getTotalOrders(this.value).then(msg => {
      if (msg['success']) {
        this.auth.totalOrders = msg['total'];
      } else {
        this.auth.totalOrders = 0;
      }
    });
    this.showNoDataForSearch = true;
    if (callit) {
      this.loadMaterials();
    }
  }

  loadMaterials(infiniteScroll?, scrollCall?) {
    let sortingBy = this.sortBy;
    if (!scrollCall) {
      this.loadingControllerMaterial.create({
        message: 'Loading materials',
        mode: 'ios'
      }).then((ress) => {
        ress.present();
      });
    }

    if (sortingBy == 'Latest Materials') {
      sortingBy = '';
    } else if (sortingBy == 'Price: high to low') {
      sortingBy = 'phl';
    } else if (sortingBy == 'Price: low to high') {
      sortingBy = 'plh';
    } else if (sortingBy == 'Color: A to Z') {
      sortingBy = 'caz';
    } else if (sortingBy == 'Color: Z to A') {
      sortingBy = 'cza';
    }
    this.auth.getMaterials(this.results, this.page, this.searchKey, this.owner, this.mtype, sortingBy).then(response => {
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
          this.loadingControllerMaterial.dismiss();
        }
      } else {
        if (this.searchKey == '') {
          this.showNoData = false;
        } else {
          this.showNoDataForSearch = false;
        }
        this.loadingControllerMaterial.dismiss();
      }
    });
  }

  async loadMore(infiniteScroll, scrollCall?) {
    if (!scrollCall) {
      scrollCall = 0;
    }
    this.page++;
    console.log('Page: ' + this.page);
    console.log('Max Page: ' + this.maximumPages);

    if (this.page <= this.maximumPages) {
      await this.wait(1000);
      this.loadMaterials(infiniteScroll, scrollCall);
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

  async materialOrder(company, id, price, name, material_id, image, quantity, sample, pieces, key) {
    const imageurl =  'https://jaytarpara.in/images/materials/' + image;

    const splitprice = price.split('/');
    const minquantity = splitprice[1].split('M')[0];
    const piece = pieces[key];

    if (sample[key] === undefined) {
      sample[key] = false;
    }

    if (pieces[key] === undefined || pieces[key] == null) {
      pieces[key] = 0;
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
        'sample': sample[key],
        'piece': pieces[key],
      }
    ];

    if (quantity[key] === undefined || quantity[key] <= 0 ) {
      this.auth.presentToast('Please add quantity', false, 'bottom', 1500, 'danger');
    } else if (pieces[key] < 0) {
      this.auth.presentToast('Please add proper pieces', false, 'bottom', 1500, 'danger');
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
              this.pieces[key] = '';
              this.sample[key] = false;
            }
          }, {
            text: 'YES',
            handler: () => {
              this.loadingControllerMaterial.create({
                message: 'Saving your order',
                mode: 'ios'
              }).then((res) => {
                res.present();
                res.onDidDismiss().then((dis) => {
                });
              });
              if (this.userArray.length <= 0) {
                this.auth.presentToast('Something went wrong! Please reload the page once.', false, 'bottom', 1500, 'danger');
              } else {
                this.auth.sendOrder(this.userArray, this.materialArray).then(result => {
                  this.loadingControllerMaterial.dismiss();
                  this.sample[key] = false;
                  this.quantity[key] = '';
                  this.auth.totalOrders++;
                });
              }
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

  openImagePreview(image) {
    this.modalController.create({
      component: ImageModalPage,
      componentProps: {
        img: image
      }
    }).then(modal => modal.present());
  }

  showPrice(materialid) {
    const bodyClass = document.querySelector('.material-' + materialid);
    if (bodyClass.classList.contains('hide-me')) {
      bodyClass.classList.remove('hide-me');
    } else {
      bodyClass.classList.add('hide-me');
    }
  }
}
