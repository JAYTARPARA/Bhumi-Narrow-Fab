import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { Platform, ToastController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private nativeHttp: HTTP,
    private plt: Platform,
    private toastCtrl: ToastController,
    private socialSharing: SocialSharing
  ) { }

  async presentToast(message, showbutton, position, duration, color) {
    const toast = await this.toastCtrl.create({
      message: message,
      showCloseButton: showbutton,
      position: position,
      duration: duration,
      color: color,
      mode: 'ios'
    });
    toast.present();
  }

  addUser(mobile) {
    if (this.plt.is('cordova')) {
      return new Promise(resolve => {
        // tslint:disable-next-line:max-line-length
      from(this.nativeHttp.get(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=checkUser&mobile=${mobile}`, { 'Content-Type': 'application/json' }, {}))
      .subscribe(
        data => {
          resolve(JSON.parse(data.data));
      });
    });
    } else {
      return new Promise(resolve => {
        this.http.get(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=checkUser&mobile=${mobile}`)
        .pipe(
          map(results => results)
        ).subscribe(data => {
          resolve(data);
        });
      });
    }
  }

  createNewUserWithMobile(mobile) {
    if (this.plt.is('cordova')) {
      return new Promise(resolve => {
        // tslint:disable-next-line:max-line-length
      from(this.nativeHttp.get(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=addUser&mobile=${mobile}`, { 'Content-Type': 'application/json' }, {}))
      .subscribe(
        data => {
          resolve(JSON.parse(data.data));
      });
    });
    } else {
      return new Promise(resolve => {
        this.http.get(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=addUser&mobile=${mobile}`)
        .pipe(
          map(results => results)
        ).subscribe(data => {
          resolve(data);
        });
      });
    }
  }

  getUser(value, type) {
    if (this.plt.is('cordova')) {
      return new Promise(resolve => {
        // tslint:disable-next-line:max-line-length
      from(this.nativeHttp.get(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=getUser&value=${value}&type=${type}`, { 'Content-Type': 'application/json' }, {}))
      .subscribe(
        data => {
          resolve(JSON.parse(data.data));
      });
    });
    } else {
      return new Promise(resolve => {
        this.http.get(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=getUser&value=${value}&type=${type}`)
        .pipe(
          map(results => results)
        ).subscribe(data => {
          resolve(data);
        });
      });
    }
  }

  updateUser(mobile, name, gst, address) {
    // tslint:disable-next-line:max-line-length
    const apiCall = encodeURI(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=updateUser&mobile=${mobile}&name=${name}&gst=${gst}&address=${address}`);
    if (this.plt.is('cordova')) {
      return new Promise(resolve => {
        // tslint:disable-next-line:max-line-length
      from(this.nativeHttp.get(apiCall, { 'Content-Type': 'application/json' }, {}))
      .subscribe(
        data => {
          resolve(JSON.parse(data.data));
      });
    });
    } else {
      return new Promise(resolve => {
        this.http.get(apiCall)
        .pipe(
          map(results => results)
        ).subscribe(data => {
          resolve(data);
        });
      });
    }
  }

  getMaterials(results, page) {
    if (this.plt.is('cordova')) {
      return new Promise(resolve => {
      // tslint:disable-next-line:max-line-length
      from(this.nativeHttp.get(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=getMaterials&results=${results}&page=${page}`, { 'Content-Type': 'application/json' }, {}))
      .subscribe(
        data => {
          resolve(JSON.parse(data.data));
      });
    });
    } else {
      return new Promise(resolve => {
        this.http.get(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=getMaterials&results=${results}&page=${page}`)
        .pipe(
          map(results => results)
        ).subscribe(data => {
          resolve(data);
        });
      });
    }
  }

  getLatestMaterials(results, lastid) {
    if (this.plt.is('cordova')) {
      return new Promise(resolve => {
      // tslint:disable-next-line:max-line-length
      from(this.nativeHttp.get(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=getLatestMaterials&results=${results}&lastid=${lastid}`, { 'Content-Type': 'application/json' }, {}))
      .subscribe(
        data => {
          resolve(JSON.parse(data.data));
      });
    });
    } else {
      return new Promise(resolve => {
        // tslint:disable-next-line:max-line-length
        this.http.get(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=getLatestMaterials&results=${results}&lastid=${lastid}`)
        .pipe(
          map(results => results)
        ).subscribe(data => {
          resolve(data);
        });
      });
    }
  }

  sendOrder(userArr, orderArr) {
  const user_id = userArr[0]['id'];
  const user_mobile = userArr[0]['mobile'];
  const user_name = userArr[0]['name'];
  const user_gst = userArr[0]['gst'];
  const user_address = userArr[0]['address'];

  const material_primary_id = orderArr[0]['id'];
  const material_image = orderArr[0]['imageurl'];
  const material_id = orderArr[0]['material_id'];
  const material_name = orderArr[0]['name'];
  const material_price = orderArr[0]['price'];
  const material_quantity = orderArr[0]['quantity'];
  let material_sample = orderArr[0]['sample'];

  if (material_sample) {
    material_sample = 'Yes';
  } else {
    material_sample = 'No';
  }

  let message = '*Here is a new order and details are as below* \r\n\r\n';
  message = message + '*User Details:* \r\n';
  message = message + 'Name: ' + user_name + '\r\n';
  message = message + 'Mobile: ' + user_mobile + '\r\n';
  message = message + 'GST: ' + user_gst + '\r\n';
  message = message + 'Address: ' + user_address + '\r\n\r\n';
  message = message + '*Order Details:* \r\n';
  message = message + 'Material ID: ' + material_id + '\r\n';
  message = message + 'Material Name: ' + material_name + '\r\n';
  message = message + 'Material Price: ' + material_price + '\r\n';
  message = message + 'Quantity Ordered: ' + material_quantity + '\r\n';
  message = message + 'Sample Requested: ' + material_sample + '\r\n';
  message = message + 'Material Image: ' + material_image + '\r\n';

  const link = material_image;

  window.open('https://api.whatsapp.com/send?phone=+919824868568&text=' + message);

  if (this.plt.is('cordova')) {
    this.socialSharing.shareViaWhatsApp(message, link, link).then((res) => {
      // Success
    }).catch((e) => {
      // Error!
      this.presentToast(e, false, 'bottom', 1500, 'danger');
    });
  }
    // window.plugins.socialsharing.shareViaWhatsApp(message, '', link, () => {
    //   console.log('share ok');
    // }, (errormsg) => {
    //   this.presentToast(errormsg, false, 'bottom', 1500, 'danger');
    // });
  // }
  }
}
