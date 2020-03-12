import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, Platform, LoadingController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AuthenticationService } from './../../../services/authentication.service';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-add-orders',
  templateUrl: './add-orders.page.html',
  styleUrls: ['./add-orders.page.scss'],
})
export class AddOrdersPage implements OnInit {

  base64Image: any;
  partyname: any;
  partymobile: any;
  partyaddress: any;
  quantity: any;
  pieces: any;
  sample: any;

  constructor(
    public auth: AuthenticationService,
    public nav: NavController,
    private platform: Platform,
    private camera: Camera,
    private transfer: FileTransfer,
    public loadingController: LoadingController,
    private menu: MenuController,
    private nativePageTransitions: NativePageTransitions,
  ) { }

  ngOnInit() {
    this.menu.enable(true, 'admin');
  }

  ionViewWillEnter() {
    this.nativePageTransitions.slide(this.auth.optionsRight)
      .then()
      .catch((errr) => {
        console.log(errr);
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

  addOrder() {
    const partyname = this.partyname;
    const partymobile = this.partymobile;
    const partyaddress = this.partyaddress;
    const quantity = this.quantity;
    let pieces = this.pieces;
    let sample = this.sample;

    if (pieces == undefined) {
      pieces = 0;
    }

    if (sample == undefined) {
      sample = false;
    }

    // tslint:disable-next-line:max-line-length
    if (partyname == undefined || partymobile == undefined || partyaddress == undefined || quantity == undefined || partyname == '' || partymobile == '' || partyaddress == '' || quantity == '') {
      this.auth.presentToast('Please fill all required fields', false, 'bottom', 1000, 'danger');
    } else {
      this.loadingController.create({
        message: 'Adding order',
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
      console.log(`https://jaytarpara.in/mysql.php?callapi=1&process=addOrder&partyname=${partyname}&partymobile=${partymobile}&partyaddress=${partyaddress}&quantity=${quantity}&pieces=${pieces}&sample=${sample}`);

      // tslint:disable-next-line:max-line-length
      fileTransfer.upload(this.base64Image, `https://jaytarpara.in/mysql.php?callapi=1&process=addOrder&partyname=${partyname}&partymobile=${partymobile}&partyaddress=${partyaddress}&quantity=${quantity}&pieces=${pieces}&sample=${sample}`, options).then(result => {
        this.loadingController.dismiss();

        if (JSON.parse(JSON.parse(JSON.stringify(result.response)))['success'] == 1) {
          this.auth.presentToast(JSON.parse(JSON.parse(JSON.stringify(result.response)))['message'], false, 'bottom', 1000, 'success');
          this.nav.navigateForward('/whatsapp-orders');
        } else {
          this.auth.presentToast(JSON.parse(JSON.parse(JSON.stringify(result.response)))['message'], false, 'bottom', 1000, 'danger');
        }
      }, (error) => {
        console.log('error' + JSON.stringify(error));
      });
    }
  }

}
