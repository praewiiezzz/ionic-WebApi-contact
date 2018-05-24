import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openGetSimpleJSON() {
    this.navCtrl.push('GetSimpleJson');
  }

  openGetArrayJSON() {
    this.navCtrl.push('GetArrayJson');
  }

  openPostJSON() {
    this.navCtrl.push('PostJson');
  }

}
