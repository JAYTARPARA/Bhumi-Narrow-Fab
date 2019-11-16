import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, Platform, LoadingController, AlertController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../../../services/authentication.service';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

@Component({
  selector: 'app-admin-material-details',
  templateUrl: './admin-material-details.page.html',
  styleUrls: ['./admin-material-details.page.scss'],
})
export class AdminMaterialDetailsPage implements OnInit {
  // base64Image = 'https://bhuminarrowfab.000webhostapp.com/images/materials/';
  base64Image: any;
  base64ImageUpdate: any;
  name: any;
  mid: any;
  color: any;
  price: any;
  material: any;
  id: any;
  owner: any;

  materialOwner: any[] = [
  {
    name : 'Bhumi Narrow Fab',
  },
  {
    name : 'Matrushree Lace',
  },
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    public auth: AuthenticationService,
    private camera: Camera,
    private transfer: FileTransfer,
    public loadingController: LoadingController,
    public alertCtrl: AlertController,
    public router: Router,
    private menu: MenuController,
  ) { }

  ngOnInit() {
    this.menu.enable(true, 'admin');
    this.auth.getAdminAllTotal().then(response => {
      if (response['success']) {
        console.log(response);
        this.auth.adminTotalOrders = response['totalOrders'];
        this.auth.adminTotalUsers = response['totalUsers'];
        this.auth.adminTotalMaterials = response['totalMaterials'];
      } else {
        this.auth.adminTotalOrders = 0;
        this.auth.adminTotalUsers = 0;
        this.auth.adminTotalMaterials = 0;
      }
    });
  }

  ionViewDidEnter() {
    this.loadingController.create({
      message: 'Loading material data',
      mode: 'ios'
    }).then((res) => {
      res.present();
    }).catch((e) => {
      this.loadingController.dismiss();
    });
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.auth.getMaterialDetails(this.id).then(response => {
      if (response['success'] == 1) {
        this.material = response['material'][0];
        console.log(this.material);
        this.name = this.material['name'];
        this.mid = this.material['material_id'];
        this.price = this.material['price'].slice(0, this.material['price'].length - 1);
        this.owner = this.material['company'];
        this.color = this.material['color'];
        this.base64Image = 'https://bhuminarrowfab.000webhostapp.com/images/materials/' + this.material['image'];
        this.loadingController.dismiss();
      } else if (response['success'] == 2) {
        this.loadingController.dismiss();
        this.auth.presentToast(response['message'], false, 'bottom', 2500, 'danger');
      } else {
        this.loadingController.dismiss();
      }
    }).catch((err) => {
      this.loadingController.dismiss();
    });
  }

  AccessCamera() {
    this.camera.getPicture({
      targetWidth: 512,
      targetHeight: 512,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL
  }).then((imageData) => {
      this.base64ImageUpdate = 'data:image/jpeg;base64,' + imageData;
  }, (err) => {
      console.log(err);
  });
}

 AccessGallery() {
  this.camera.getPicture({
     sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
     destinationType: this.camera.DestinationType.DATA_URL
    }).then((imageData) => {
      this.base64ImageUpdate = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
    });
 }

 capitalizeString(word: string) {
  return word[0].toUpperCase() + word.substr(1).toLowerCase();
 }

 update() {
  const name = this.name;
  let mid = this.mid;
  let color = this.color;
  const price = this.price;
  const mowner = this.owner;

  // tslint:disable-next-line:max-line-length
  if (name == undefined || mid == undefined || color == undefined || price == undefined || mowner == undefined || name == '' || mid == '' || color == '' || price == '' || mowner == '') {
      this.auth.presentToast('Please fill all required fields', false, 'bottom', 1000, 'danger');
  } else {
      mid = mid.toUpperCase();
      color = this.capitalizeString(color);
      this.loadingController.create({
        message: 'Updating material',
        mode: 'ios'
      }).then((res) => {
        res.present();
        res.onDidDismiss().then((dis) => {

        });
      });

      const imgName = Math.floor(Date.now() / 1000);

      const fileTransfer: FileTransferObject = this.transfer.create();

      const options: FileUploadOptions = {
        fileKey: 'photo',
        fileName: imgName + '.jpg',
        chunkedMode: false,
        mimeType: 'image/jpeg',
        headers: {}
      };

      if (this.base64ImageUpdate) {
        // tslint:disable-next-line:max-line-length
        fileTransfer.upload(this.base64ImageUpdate, `https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=updateMaterial&id=${this.id}&name=${name}&mid=${mid}&color=${color}&mowner=${mowner}&price=${price}`, options).then(result => {
          this.loadingController.dismiss();
          if (JSON.parse(JSON.parse(JSON.stringify(result.response)))['success'] == 1) {
            this.auth.presentToast(JSON.parse(JSON.parse(JSON.stringify(result.response)))['message'], false, 'bottom', 1000, 'success');
          } else {
            this.auth.presentToast(JSON.parse(JSON.parse(JSON.stringify(result.response)))['message'], false, 'bottom', 1000, 'danger');
          }
        }, (error) => {
          console.log('error' + JSON.stringify(error));
        });
      } else {
        this.auth.updateMaterialDetailOnly(this.id, this.name, mid, color, mowner, this.price).then(response => {
          this.loadingController.dismiss();
          if (response['success'] == 1) {
            this.auth.presentToast(response['message'], false, 'bottom', 1000, 'success');
          } else if (response['success'] == 2) {
            this.loadingController.dismiss();
            this.auth.presentToast(response['message'], false, 'bottom', 2500, 'danger');
          } else {
            this.auth.presentToast(response['message'], false, 'bottom', 1000, 'danger');
          }
        });
      }
    }
  }

  async delete() {
    const alert = await this.alertCtrl.create({
      header: 'Confirm!',
      subHeader: 'Are you sure you want to delete this material?',
      mode: 'ios',
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => { }
        }, {
          text: 'YES',
          handler: () => {
            this.loadingController.create({
              message: 'Deleting material',
              mode: 'ios'
            }).then((res) => {
              res.present();
              res.onDidDismiss().then((dis) => {
                this.router.navigate(['/all-materials']);
              });
            });
            this.auth.deleteMaterial(this.id).then(response => {
              if (response['success'] == 1) {
                this.auth.presentToast(response['message'], false, 'bottom', 1000, 'success');
                this.auth.adminTotalMaterials--;
              } else if (response['success'] == 2) {
                this.loadingController.dismiss();
                this.auth.presentToast(response['message'], false, 'bottom', 2500, 'danger');
              } else {
                this.auth.presentToast(response['message'], false, 'bottom', 1000, 'danger');
              }
              this.loadingController.dismiss();
            });
          }
        }
      ]
    });

    await alert.present();
  }

}
