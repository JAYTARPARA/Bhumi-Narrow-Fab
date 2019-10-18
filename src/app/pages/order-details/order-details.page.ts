import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { MenuController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {
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

  constructor(
    private activatedRoute: ActivatedRoute,
    public auth: AuthenticationService,
    public loadingController: LoadingController,
    private menu: MenuController,
  ) { }

  ngOnInit() {
    this.menu.enable(true, 'user');
    // Get the details that was passed with the URL
    this.order_id = this.activatedRoute.snapshot.paramMap.get('orderid');

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
      } else if (response['success'] == 2) {
        this.loadingController.dismiss();
        this.auth.presentToast(response['message'], false, 'bottom', 2500, 'danger');
      } else {
        this.loadingController.dismiss();
        this.auth.presentToast(response['message'], false, 'bottom', 2500, 'danger');
      }
    });
  }

}
