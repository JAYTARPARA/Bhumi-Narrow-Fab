import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, Platform, LoadingController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AuthenticationService } from './../../../services/authentication.service';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file';


@Component({
  selector: 'app-upload-materials',
  templateUrl: './upload-materials.page.html',
  styleUrls: ['./upload-materials.page.scss'],
})
export class UploadMaterialsPage implements OnInit {
  // base64Image = 'https://bhuminarrowfab.000webhostapp.com/images/materials/AA1.png';
  base64Image: any;
  name: any;
  mid: any;
  color: any;
  price: any;
  owner = 'Bhumi Narrow Fab';

  materialOwner: any[] = [
    {
      name : 'Bhumi Narrow Fab',
    },
    {
      name : 'Matrushree Lace',
    },
  ];

  constructor(
    public auth: AuthenticationService,
    public nav: NavController,
    private platform: Platform,
    private camera: Camera,
    private transfer: FileTransfer,
    public loadingController: LoadingController,
    private menu: MenuController,
  ) { }

  ngOnInit() {
    this.menu.enable(true, 'admin');
  }

  AccessCamera() {
      this.camera.getPicture({
      targetWidth: 512,
      targetHeight: 512,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL
    }).then((imageData) => {
        this.base64Image = 'data:image/jpeg;base64,' + imageData;
        console.log(this.base64Image);
    }, (err) => {
        console.log(err);
    });
  }

   AccessGallery() {
    this.camera.getPicture({
       sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
       destinationType: this.camera.DestinationType.DATA_URL
      }).then((imageData) => {
        this.base64Image = 'data:image/jpeg;base64,' + imageData;
        console.log(this.base64Image);
      }, (err) => {
        console.log(err);
      });
   }

   capitalizeString(word: string) {
    return word[0].toUpperCase() + word.substr(1).toLowerCase();
   }

   upload() {
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
        message: 'Uploading material',
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

      // tslint:disable-next-line:max-line-length
      fileTransfer.upload(this.base64Image, `https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=uploadMaterial&name=${name}&mid=${mid}&color=${color}&price=${price}&mowner=${mowner}`, options).then(result => {
        this.loadingController.dismiss();

        if (JSON.parse(JSON.parse(JSON.stringify(result.response)))['success'] == 1) {
          this.auth.adminTotalMaterials++;
          this.auth.presentToast(JSON.parse(JSON.parse(JSON.stringify(result.response)))['message'], false, 'bottom', 1000, 'success');
          this.nav.navigateForward('/all-materials');
        } else {
          this.auth.presentToast(JSON.parse(JSON.parse(JSON.stringify(result.response)))['message'], false, 'bottom', 1000, 'danger');
        }
      }, (error) => {
        console.log('error' + JSON.stringify(error));
      });
    }
  }
}
