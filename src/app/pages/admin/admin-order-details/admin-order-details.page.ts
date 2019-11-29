import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../../../services/authentication.service';
import { MenuController, LoadingController } from '@ionic/angular';
import { SMS } from '@ionic-native/sms/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-admin-order-details',
  templateUrl: './admin-order-details.page.html',
  styleUrls: ['./admin-order-details.page.scss'],
})
export class AdminOrderDetailsPage implements OnInit {
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
  name: any;
  mobile: any;
  material_id: any;
  image: any;
  created_at: any;
  address: any;
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
  ) { }

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
    this.auth.getOrderByID(this.order_id).then(response => {
      if (response['success'] == 1) {
        setTimeout(() => {
          this.loadingController.dismiss();
        }, 1000);
        this.orderdetail = response['order'][0];
        console.log(this.orderdetail);
        this.address = this.orderdetail.address;
        this.color = this.orderdetail.color;
        this.created_at = this.orderdetail.created_at;
        this.icon = this.orderdetail.icon;
        this.image = this.orderdetail.image;
        this.material_id = this.orderdetail.material_id;
        this.mobile = this.orderdetail.mobile;
        this.name = this.orderdetail.name;
        this.price = this.orderdetail.originalprice;
        this.quantity = this.orderdetail.quantity;
        this.sample = this.orderdetail.sample;
        this.status = this.orderdetail.status;
        this.oldStatus = this.orderdetail.status;
        this.totalprice = this.orderdetail.totalprice;
        this.username = this.orderdetail.username;
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
    this.auth.updateOrderStatus(this.order_id, this.status).then(response => {
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

              // const options = {
              //   replaceLineBreaks: true, // true to replace \n by a new line, false by default
              //   android: {
              //     intent: ''  // send SMS with the native android SMS messaging
              //     // intent: '' // send SMS without opening any other app
              //   }
              // };

              let sendMsg = 'Hello, Your order is updated by owner. \r\n';
              sendMsg = sendMsg + 'Order Number: ' + this.order_id + '\r\n';
              sendMsg = sendMsg + 'Current Status: ' + this.status + '\r\n';
              sendMsg = sendMsg + 'Please vist My Orders page in application';

              // this.sms.send('+91' + this.mobile, sendMsg, options).then( () => {
              //   this.loadingController.dismiss();
              //   this.auth.presentToast('Message sent to the user', false, 'bottom', 1000, 'success');
              // }, (e) => {
              //   this.loadingController.dismiss();
              //   alert(e);
              //   this.auth.presentToast('Message not sent! Send it manually', false, 'bottom', 1500, 'danger');
              // });

              this.socialSharing.shareViaWhatsAppToReceiver('+91' + this.mobile, sendMsg, '', '').then(() => {
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
