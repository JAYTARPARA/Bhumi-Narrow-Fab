import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../../../services/authentication.service';
import { LoadingController } from '@ionic/angular';

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
  sample: any;
  quantity: any;
  price: any;
  name: any;
  mobile: any;
  material_id: any;
  image: any;
  created_at: any;
  address: any;
  orderdetail: any;

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
  ) { }

  ngOnInit() {
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
        this.totalprice = this.orderdetail.totalprice;
        this.username = this.orderdetail.username;
      } else {
        this.loadingController.dismiss();
        this.auth.presentToast(response['message'], false, 'bottom', 2500, 'danger');
      }
    });
  }

  updateStatus() {
    this.auth.updateOrderStatus(this.order_id, this.status).then(response => {
      console.log(response);
      this.loadingController.create({
        message: 'Updating order status',
        mode: 'ios'
      }).then((res) => {
        res.present();
        res.onDidDismiss().then((dis) => {
          this.ngOnInit();
        });
      });

      setTimeout(() => {
        this.loadingController.dismiss();
      }, 1000);

      if (response['success'] == 1) {
        this.auth.presentToast(response['message'], false, 'bottom', 1000, 'success');
      } else {
        this.auth.presentToast(response['message'], false, 'bottom', 1000, 'danger');
      }
    });
  }
}
