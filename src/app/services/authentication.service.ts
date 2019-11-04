import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { Platform, ToastController, AlertController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  base64img = '';
  totalOrders = 0;
  adminTotalOrders = 0;
  adminTotalUsers = 0;
  adminTotalMaterials = 0;
  usermobile: any;
  // userProfileDone = true;
  serverErrorMsg = 'Server issue! Please try after sometime';

  constructor(
    private http: HttpClient,
    private nativeHttp: HTTP,
    private plt: Platform,
    private toastCtrl: ToastController,
    private socialSharing: SocialSharing,
    public alertCtrl: AlertController,
  ) { }

  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'Confirm!',
      subHeader: 'Are you sure you want to exit the app?',
      mode: 'ios',
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'YES',
          handler: () => {
            navigator['app'].exitApp();
          }
        }
      ]
    });

    await alert.present();
  }

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
      }, error => {
        resolve({success: 2, message: this.serverErrorMsg});
      });
    });
    } else {
      return new Promise(resolve => {
        this.http.get(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=checkUser&mobile=${mobile}`)
        .pipe(
          map(results => results)
        ).subscribe(data => {
          resolve(data);
        }, error => {
          resolve({success: 2, message: this.serverErrorMsg});
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
      }, error => {
        resolve({success: 2, message: this.serverErrorMsg});
      });
    });
    } else {
      return new Promise(resolve => {
        this.http.get(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=addUser&mobile=${mobile}`)
        .pipe(
          map(results => results)
        ).subscribe(data => {
          resolve(data);
        }, error => {
          resolve({success: 2, message: this.serverErrorMsg});
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
      }, error => {
        resolve({success: 2, message: this.serverErrorMsg});
      });
    });
    } else {
      return new Promise(resolve => {
        this.http.get(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=getUser&value=${value}&type=${type}`)
        .pipe(
          map(results => results)
        ).subscribe(data => {
          resolve(data);
        }, error => {
          resolve({success: 2, message: this.serverErrorMsg});
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
      }, error => {
        resolve({success: 2, message: this.serverErrorMsg});
      });
    });
    } else {
      return new Promise(resolve => {
        this.http.get(apiCall)
        .pipe(
          map(results => results)
        ).subscribe(data => {
          resolve(data);
        }, error => {
          resolve({success: 2, message: this.serverErrorMsg});
        });
      });
    }
  }

  getMaterials(results, page, searchKey?, owner?) {
    if (!searchKey) {
      searchKey = '';
    }
    if (this.plt.is('cordova')) {
      return new Promise(resolve => {
      // tslint:disable-next-line:max-line-length
      from(this.nativeHttp.get(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=getMaterials&results=${results}&page=${page}&searchKey=${searchKey}&owner=${owner}`, { 'Content-Type': 'application/json' }, {}))
      .subscribe(
        data => {
          resolve(JSON.parse(data.data));
      }, error => {
        resolve({success: 2, message: this.serverErrorMsg});
      });
    });
    } else {
      return new Promise(resolve => {
        // tslint:disable-next-line:max-line-length
        this.http.get(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=getMaterials&results=${results}&page=${page}&searchKey=${searchKey}&owner=${owner}`)
        .pipe(
          map(results => results)
        ).subscribe(data => {
          resolve(data);
        }, error => {
          resolve({success: 2, message: this.serverErrorMsg});
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

  async sendOrder(userArr, orderArr) {
    const user_id = userArr[0]['id'];
    const user_mobile = userArr[0]['mobile'];
    const user_name = userArr[0]['name'];
    const user_gst = userArr[0]['gst'];
    const user_address = userArr[0]['address'];

    const material_primary_id = orderArr[0]['id'];
    const company = orderArr[0]['company'];
    const material_image = orderArr[0]['imageurl'];
    const material_id = orderArr[0]['material_id'];
    const material_name = orderArr[0]['name'];
    const material_price = orderArr[0]['price'];
    const material_quantity = orderArr[0]['quantity'];
    const piece = orderArr[0]['piece'];
    let material_sample = orderArr[0]['sample'];
    let matsample = orderArr[0]['sample'];

    if (material_sample) {
      material_sample = 'Yes';
    } else {
      matsample = 0;
      material_sample = 'No';
    }

    let message = '*Here is a new order and details are as below* \r\n\r\n';
    message = message + '*User Details:* \r\n';
    message = message + '*Name:* ' + user_name + '\r\n';
    message = message + '*Mobile:* ' + user_mobile + '\r\n';
    message = message + '*GST:* ' + user_gst + '\r\n';
    message = message + '*Address:* ' + user_address + '\r\n\r\n';
    message = message + '*Order Details:* \r\n';
    message = message + '*Design Number:* ' + material_id + '\r\n';
    message = message + '*Material Name:* ' + material_name + '\r\n';
    message = message + '*Material Price:* ' + material_price + '\r\n';
    message = message + '*Quantity Ordered:* ' + material_quantity + ' M' + '\r\n';
    message = message + '*Pieces Ordered:* ' + piece + '\r\n';
    message = message + '*Sample Requested:* ' + material_sample + '\r\n';
    message = message + '*Material Image:* ' + material_image + '\r\n';

    const link = material_image;

    let whatsappnumber = '+919824868568';
    if (company == 'Bhumi Narrow Fab') {
      // whatsappnumber = '+919825783611';
    } else if (company == 'Matrushree Lace') {
      // whatsappnumber = '+918488923655';
    }

    if (this.plt.is('cordova')) {
      return this.socialSharing.shareViaWhatsAppToReceiver(whatsappnumber, message, '', '').then(async (res) => {
        // Success
        // tslint:disable-next-line:max-line-length
        await this.saveOrder(user_id, user_mobile, material_primary_id, material_quantity, matsample, material_price, piece).then((response) => {
          if (response['success'] == 1) {
            this.presentToast(response['message'], false, 'bottom', 1500, 'success');
          } else {
            this.presentToast(response['message'], false, 'bottom', 1500, 'danger');
          }
          return response;
        });
      }).catch((e) => {
        // Error!
        return e;
      });
    } else {
      // tslint:disable-next-line:max-line-length
      await this.saveOrder(user_id, user_mobile, material_primary_id, material_quantity, matsample, material_price, piece).then((response) => {
        if (response['success'] == 1) {
          this.presentToast(response['message'], false, 'bottom', 1500, 'success');
        } else if (response['success'] == 2) {
          this.presentToast(response['message'], false, 'bottom', 2500, 'danger');
        } else {
          this.presentToast(response['message'], false, 'bottom', 1500, 'danger');
        }
        return response;
      });
    }
  }

  saveOrder(userid, usermobile, materialprimaryid, materialquantity, matsample, materialprice, piece) {
    const date = new Date();
    // tslint:disable-next-line:max-line-length
    const orderDate = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2) + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

    // tslint:disable-next-line:max-line-length
    if (this.plt.is('cordova')) {
      return new Promise(resolve => {
      // tslint:disable-next-line:max-line-length
      from(this.nativeHttp.get(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=saveOrder&userid=${userid}&usermobile=${usermobile}&materialprimaryid=${materialprimaryid}&materialquantity=${materialquantity}&matsample=${matsample}&orderdate=${orderDate}&materialprice=${materialprice}&piece=${piece}`, { 'Content-Type': 'application/json' }, {}))
      .subscribe(
        data => {
          resolve(JSON.parse(data.data));
      }, error => {
        resolve({success: 2, message: this.serverErrorMsg});
      });
    });
    } else {
      return new Promise(resolve => {
        // tslint:disable-next-line:max-line-length
        this.http.get(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=saveOrder&userid=${userid}&usermobile=${usermobile}&materialprimaryid=${materialprimaryid}&materialquantity=${materialquantity}&matsample=${matsample}&orderdate=${orderDate}&materialprice=${materialprice}&piece=${piece}`)
        .pipe(
          map(results => results)
        ).subscribe(data => {
          resolve(data);
        }, error => {
          resolve({success: 2, message: this.serverErrorMsg});
        });
      });
    }
  }

  getOrders(results, page, mobile, searchKey?, searchstatus?) {
    if (!searchKey) {
      searchKey = '';
    }
    if (!searchstatus) {
      searchKey = 'All';
    }
    if (this.plt.is('cordova')) {
      return new Promise(resolve => {
      // tslint:disable-next-line:max-line-length
      from(this.nativeHttp.get(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=getOrders&results=${results}&page=${page}&mobile=${mobile}&searchKey=${searchKey}&searchstatus=${searchstatus}`, { 'Content-Type': 'application/json' }, {}))
      .subscribe(
        data => {
          resolve(JSON.parse(data.data));
      }, error => {
        resolve({success: 2, message: this.serverErrorMsg});
      });
    });
    } else {
      return new Promise(resolve => {
        // tslint:disable-next-line:max-line-length
        this.http.get(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=getOrders&results=${results}&page=${page}&mobile=${mobile}&searchKey=${searchKey}&searchstatus=${searchstatus}`)
        .pipe(
          map(results => results)
        ).subscribe(data => {
          resolve(data);
        }, error => {
          resolve({success: 2, message: this.serverErrorMsg});
        });
      });
    }
  }

  getOrderByID(orderid) {
    if (this.plt.is('cordova')) {
      return new Promise(resolve => {
      // tslint:disable-next-line:max-line-length
      from(this.nativeHttp.get(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=getOrderByID&orderid=${orderid}`, { 'Content-Type': 'application/json' }, {}))
      .subscribe(
        data => {
          resolve(JSON.parse(data.data));
      }, error => {
        resolve({success: 2, message: this.serverErrorMsg});
      });
    });
    } else {
      return new Promise(resolve => {
        // tslint:disable-next-line:max-line-length
        this.http.get(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=getOrderByID&orderid=${orderid}`)
        .pipe(
          map(results => results)
        ).subscribe(data => {
          resolve(data);
        }, error => {
          resolve({success: 2, message: this.serverErrorMsg});
        });
      });
    }
  }

  getTotalOrders(mobile) {
    if (this.plt.is('cordova')) {
      return new Promise(resolve => {
      // tslint:disable-next-line:max-line-length
      from(this.nativeHttp.get(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=getTotalOrders&mobile=${mobile}`, { 'Content-Type': 'application/json' }, {}))
      .subscribe(
        data => {
          resolve(JSON.parse(data.data));
      }, error => {
        resolve({success: 2, message: this.serverErrorMsg});
      });
    });
    } else {
      return new Promise(resolve => {
        // tslint:disable-next-line:max-line-length
        this.http.get(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=getTotalOrders&mobile=${mobile}`)
        .pipe(
          map(results => results)
        ).subscribe(data => {
          resolve(data);
        }, error => {
          resolve({success: 2, message: this.serverErrorMsg});
        });
      });
    }
  }

  uploadMaterial(data) {
    if (this.plt.is('cordova')) {
      return new Promise(resolve => {
      // tslint:disable-next-line:max-line-length
      from(this.nativeHttp.post(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=uploadMaterial`, data, { 'Content-Type': 'application/json' }))
      .subscribe(results => {
        resolve(JSON.parse(results.data));
      }, error => {
        resolve({success: 2, message: this.serverErrorMsg});
      });
    });
    } else {
      return new Promise(resolve => {
        // tslint:disable-next-line:max-line-length
        this.http.post(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=uploadMaterial`, data)
        .pipe(
          map(results => results)
        ).subscribe(response => {
          resolve(response);
        }, error => {
          resolve({success: 2, message: this.serverErrorMsg});
        });
      });
    }
  }

  getAdminAllTotal() {
    if (this.plt.is('cordova')) {
      return new Promise(resolve => {
      // tslint:disable-next-line:max-line-length
      from(this.nativeHttp.get(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=getAdminAllTotal`, { 'Content-Type': 'application/json' }, {}))
      .subscribe(
        data => {
          resolve(JSON.parse(data.data));
      });
    });
    } else {
      return new Promise(resolve => {
        // tslint:disable-next-line:max-line-length
        this.http.get(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=getAdminAllTotal`)
        .pipe(
          map(results => results)
        ).subscribe(data => {
          resolve(data);
        });
      });
    }
  }

  getMaterialDetails(materialid) {
    if (this.plt.is('cordova')) {
      return new Promise(resolve => {
      // tslint:disable-next-line:max-line-length
      from(this.nativeHttp.get(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=getMaterialByID&materialid=${materialid}`, { 'Content-Type': 'application/json' }, {}))
      .subscribe(
        data => {
          resolve(JSON.parse(data.data));
      }, error => {
        resolve({success: 2, message: this.serverErrorMsg});
      });
    });
    } else {
      return new Promise(resolve => {
        // tslint:disable-next-line:max-line-length
        this.http.get(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=getMaterialByID&materialid=${materialid}`)
        .pipe(
          map(results => results)
        ).subscribe(data => {
          resolve(data);
        }, error => {
          resolve({success: 2, message: this.serverErrorMsg});
        });
      });
    }
  }

  updateMaterialDetailOnly(id, name, mid, price) {
    if (this.plt.is('cordova')) {
      return new Promise(resolve => {
      // tslint:disable-next-line:max-line-length
      from(this.nativeHttp.get(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=updateMaterialDetailOnly&id=${id}&name=${name}&mid=${mid}&price=${price}`, { 'Content-Type': 'application/json' }, {}))
      .subscribe(
        data => {
          resolve(JSON.parse(data.data));
      }, error => {
        resolve({success: 2, message: this.serverErrorMsg});
      });
    });
    } else {
      return new Promise(resolve => {
        // tslint:disable-next-line:max-line-length
        this.http.get(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=updateMaterialDetailOnly&id=${id}&name=${name}&mid=${mid}&price=${price}`)
        .pipe(
          map(results => results)
        ).subscribe(data => {
          resolve(data);
        }, error => {
          resolve({success: 2, message: this.serverErrorMsg});
        });
      });
    }
  }

  deleteMaterial(id) {
    if (this.plt.is('cordova')) {
      return new Promise(resolve => {
      // tslint:disable-next-line:max-line-length
      from(this.nativeHttp.get(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=deleteMaterial&id=${id}`, { 'Content-Type': 'application/json' }, {}))
      .subscribe(
        data => {
          resolve(JSON.parse(data.data));
      }, error => {
        resolve({success: 2, message: this.serverErrorMsg});
      });
    });
    } else {
      return new Promise(resolve => {
        // tslint:disable-next-line:max-line-length
        this.http.get(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=deleteMaterial&id=${id}`)
        .pipe(
          map(results => results)
        ).subscribe(data => {
          resolve(data);
        }, error => {
          resolve({success: 2, message: this.serverErrorMsg});
        });
      });
    }
  }

  getUsers(results, page, searchKey?) {
    if (!searchKey) {
      searchKey = '';
    }
    if (this.plt.is('cordova')) {
      return new Promise(resolve => {
      // tslint:disable-next-line:max-line-length
      from(this.nativeHttp.get(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=getUsers&results=${results}&page=${page}&searchKey=${searchKey}`, { 'Content-Type': 'application/json' }, {}))
      .subscribe(
        data => {
          resolve(JSON.parse(data.data));
      }, error => {
        resolve({success: 2, message: this.serverErrorMsg});
      });
    });
    } else {
      return new Promise(resolve => {
        // tslint:disable-next-line:max-line-length
        this.http.get(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=getUsers&results=${results}&page=${page}&searchKey=${searchKey}`)
        .pipe(
          map(results => results)
        ).subscribe(data => {
          resolve(data);
        }, error => {
          resolve({success: 2, message: this.serverErrorMsg});
        });
      });
    }
  }

  updateOrderStatus(id, status) {
    if (status == 'Pending') {
      status = 0;
    } else if (status == 'Confirmed') {
      status = 1;
    } else if (status == 'Delivered') {
      status = 2;
    } else if (status == 'Rejected') {
      status = 3;
    }
    // tslint:disable-next-line:max-line-length
    const apiCall = encodeURI(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=updateOrderStatus&id=${id}&status=${status}`);
    if (this.plt.is('cordova')) {
      return new Promise(resolve => {
        // tslint:disable-next-line:max-line-length
      from(this.nativeHttp.get(apiCall, { 'Content-Type': 'application/json' }, {}))
      .subscribe(
        data => {
          resolve(JSON.parse(data.data));
      }, error => {
        resolve({success: 2, message: this.serverErrorMsg});
      });
    });
    } else {
      return new Promise(resolve => {
        this.http.get(apiCall)
        .pipe(
          map(results => results)
        ).subscribe(data => {
          resolve(data);
        }, error => {
          resolve({success: 2, message: this.serverErrorMsg});
        });
      });
    }
  }

  getAllOrders(results, page, searchKey?, searchstatus?) {
    if (!searchKey) {
      searchKey = '';
    }
    if (!searchstatus) {
      searchKey = 'All';
    }
    if (this.plt.is('cordova')) {
      return new Promise(resolve => {
      // tslint:disable-next-line:max-line-length
      from(this.nativeHttp.get(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=getAllOrders&results=${results}&page=${page}&searchKey=${searchKey}&searchstatus=${searchstatus}`, { 'Content-Type': 'application/json' }, {}))
      .subscribe(
        data => {
          resolve(JSON.parse(data.data));
      }, error => {
        resolve({success: 2, message: this.serverErrorMsg});
      });
    });
    } else {
      return new Promise(resolve => {
        // tslint:disable-next-line:max-line-length
        this.http.get(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=getAllOrders&results=${results}&page=${page}&searchKey=${searchKey}&searchstatus=${searchstatus}`)
        .pipe(
          map(results => results)
        ).subscribe(data => {
          resolve(data);
        }, error => {
          resolve({success: 2, message: this.serverErrorMsg});
        });
      });
    }
  }

  validateGST(gst, key) {
    if (this.plt.is('cordova')) {
      return new Promise(resolve => {
      // tslint:disable-next-line:max-line-length
      from(this.nativeHttp.get(`https://appyflow.in/api/verifyGST?gstNo=${gst}&key_secret=${key}`, { 'Content-Type': 'application/json' }, {}))
      .subscribe(
        data => {
          resolve(JSON.parse(data.data));
      }, error => {
        resolve(error);
      });
    });
    } else {
      return new Promise(resolve => {
        // tslint:disable-next-line:max-line-length
        this.http.get(`https://appyflow.in/api/verifyGST?gstNo=${gst}&key_secret=${key}`)
        .pipe(
          map(results => results)
        ).subscribe(data => {
          resolve(data);
        }, error => {
          resolve(error);
        });
      });
    }
  }

  blockUnblockUser(mobile, status) {
    if (this.plt.is('cordova')) {
      return new Promise(resolve => {
      // tslint:disable-next-line:max-line-length
      from(this.nativeHttp.get(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=blockUnblockUser&mobile=${mobile}&status=${status}`, { 'Content-Type': 'application/json' }, {}))
      .subscribe(
        data => {
          resolve(JSON.parse(data.data));
      }, error => {
        resolve({success: 2, message: this.serverErrorMsg});
      });
    });
    } else {
      return new Promise(resolve => {
        // tslint:disable-next-line:max-line-length
        this.http.get(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=blockUnblockUser&mobile=${mobile}&status=${status}`)
        .pipe(
          map(results => results)
        ).subscribe(data => {
          resolve(data);
        }, error => {
          resolve({success: 2, message: this.serverErrorMsg});
        });
      });
    }
  }

  checkUserStatus(mobile) {
    console.log(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=checkUserStatus&mobile=${mobile}`);
    if (this.plt.is('cordova')) {
      return new Promise(resolve => {
      // tslint:disable-next-line:max-line-length
      from(this.nativeHttp.get(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=checkUserStatus&mobile=${mobile}`, { 'Content-Type': 'application/json' }, {}))
      .subscribe(
        data => {
          resolve(JSON.parse(data.data));
      }, error => {
        resolve({success: 2, message: this.serverErrorMsg});
      });
    });
    } else {
      return new Promise(resolve => {
        // tslint:disable-next-line:max-line-length
        this.http.get(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=checkUserStatus&mobile=${mobile}`)
        .pipe(
          map(results => results)
        ).subscribe(data => {
          resolve(data);
        }, error => {
          resolve({success: 2, message: this.serverErrorMsg});
        });
      });
    }
  }

  checkUserProfileStatus(mobile) {
    console.log(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=checkUserProfileStatus&mobile=${mobile}`);
    if (this.plt.is('cordova')) {
      return new Promise(resolve => {
      // tslint:disable-next-line:max-line-length
      from(this.nativeHttp.get(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=checkUserProfileStatus&mobile=${mobile}`, { 'Content-Type': 'application/json' }, {}))
      .subscribe(
        data => {
          resolve(JSON.parse(data.data));
      }, error => {
        resolve({success: 2, message: this.serverErrorMsg});
      });
    });
    } else {
      return new Promise(resolve => {
        // tslint:disable-next-line:max-line-length
        this.http.get(`https://bhuminarrowfab.000webhostapp.com/mysql.php?callapi=1&process=checkUserProfileStatus&mobile=${mobile}`)
        .pipe(
          map(results => results)
        ).subscribe(data => {
          resolve(data);
        }, error => {
          resolve({success: 2, message: this.serverErrorMsg});
        });
      });
    }
  }
}
