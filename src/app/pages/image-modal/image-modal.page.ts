import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.page.html',
  styleUrls: ['./image-modal.page.scss'],
})
export class ImageModalPage implements OnInit {

  img: any;

  sliderOpts = {
    zoom: {
      maxRatio: 5
    }
  };

  constructor(
    private navParams: NavParams,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.img = this.navParams.get('img');
  }

  close() {
    this.modalController.dismiss();
  }

}
