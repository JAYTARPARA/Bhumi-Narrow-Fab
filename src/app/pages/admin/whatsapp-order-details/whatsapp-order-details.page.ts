import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../../../services/authentication.service';
import { MenuController, LoadingController } from '@ionic/angular';
import { SMS } from '@ionic-native/sms/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-whatsapp-order-details',
  templateUrl: './whatsapp-order-details.page.html',
  styleUrls: ['./whatsapp-order-details.page.scss'],
})
export class WhatsappOrderDetailsPage implements OnInit {

  order_id: any;
  color: any;
  icon: any;
  username: any;
  totalprice: any;
  status: any;
  oldStatus: any;
  sample: any;
  piece: any;
  quantity: any;
  price: any;
  cust_name: any;
  cust_mobile: any;
  material_id: any;
  image: any;
  created_at: any;
  cust_address: any;
  orderdetail: any;
  sendMsg = false;

  customActionSheetOptions: any = {
    header: 'Status',
  };

  orderStatus: any[] = [
    {
      name : 'Rejected',
    },
    {
      name : 'Pending',
    },
    {
      name: 'Confirmed',
    },
    {
      name: 'Delivered'
    }
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    public auth: AuthenticationService,
    public loadingController: LoadingController,
    private menu: MenuController,
    private sms: SMS,
    private socialSharing: SocialSharing,
    private nativePageTransitions: NativePageTransitions,
  ) { }

  ionViewWillEnter() {
    this.nativePageTransitions.slide(this.auth.optionsRight)
      .then()
      .catch((errr) => {
        console.log(errr);
    });
  }

  ngOnInit() {
    this.menu.enable(true, 'admin');
    // Get the details that was passed with the URL
    this.order_id = this.activatedRoute.snapshot.paramMap.get('id');

    this.loadingController.create({
      message: 'Loading order details',
      mode: 'ios'
    }).then((res) => {
      res.present();
    });
    this.auth.getWhatsappOrderByID(this.order_id).then(response => {
      if (response['success'] == 1) {
        setTimeout(() => {
          this.loadingController.dismiss();
        }, 1000);
        this.orderdetail = response['order'][0];
        console.log(this.orderdetail);
        this.cust_address = this.orderdetail.cust_address;
        this.color = this.orderdetail.color;
        this.created_at = this.orderdetail.created_at;
        this.icon = this.orderdetail.icon;
        this.image = this.orderdetail.image;
        this.material_id = this.orderdetail.material_id;
        this.cust_mobile = this.orderdetail.cust_mobile;
        this.cust_name = this.orderdetail.cust_name;
        this.quantity = this.orderdetail.quantity;
        this.sample = this.orderdetail.sample;
        this.status = this.orderdetail.status;
        this.oldStatus = this.orderdetail.status;
        this.piece = this.orderdetail.piece;
      } else if (response['success'] == 2) {
        this.loadingController.dismiss();
        this.auth.presentToast(response['message'], false, 'bottom', 2500, 'danger');
      } else {
        this.loadingController.dismiss();
        this.auth.presentToast(response['message'], false, 'bottom', 2500, 'danger');
      }
    });
  }

  async updateStatus() {
    this.auth.updateWhatsappOrderStatus(this.order_id, this.status).then(response => {
      console.log(this.oldStatus);
      console.log(this.status);
      console.log(response);
      this.loadingController.create({
        message: 'Updating order status',
        mode: 'ios'
      }).then((res) => {
        res.present();
        res.onDidDismiss().then((dis) => {
          if (this.sendMsg) {
            if (this.oldStatus != this.status) {
              this.loadingController.create({
                message: 'Sending message to the user',
                mode: 'ios'
              }).then((ress) => {
                ress.present();
                ress.onDidDismiss().then((diss) => {
                  this.ngOnInit();
                });
              });

              let sendMsg = 'Hello, Your order is updated by owner. \r\n';
              sendMsg = sendMsg + 'Order Number: ' + this.order_id + '\r\n';
              sendMsg = sendMsg + 'Current Status: ' + this.status + '\r\n';

              this.socialSharing.shareViaWhatsAppToReceiver('+91' + this.cust_mobile, sendMsg, '', '').then(() => {
                // Success
                this.loadingController.dismiss();
                this.auth.presentToast('Message sent to the user', false, 'bottom', 1000, 'success');
              }).catch((e) => {
                // Error!
                this.loadingController.dismiss();
                this.auth.presentToast('Message not sent! Send it manually', false, 'bottom', 1500, 'danger');
                console.log(e);
              });
            } else {
              this.ngOnInit();
            }
          } else {
            this.ngOnInit();
          }
        });
      });

      if (response) {
        setTimeout(() => {
          this.loadingController.dismiss();
        }, 1500);
      }

      if (response['success'] == 1) {
        this.auth.presentToast(response['message'], false, 'bottom', 1000, 'success');
        this.sendMsg = true;
      } else if (response['success'] == 2) {
        this.auth.presentToast(response['message'], false, 'bottom', 2500, 'danger');
        this.sendMsg = false;
      } else {
        this.auth.presentToast(response['message'], false, 'bottom', 1000, 'danger');
        this.sendMsg = false;
      }
    });
  }

}
