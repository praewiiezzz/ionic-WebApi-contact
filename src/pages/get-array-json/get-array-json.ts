import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the GetArrayJson page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-get-array-json',
  templateUrl: 'get-array-json.html',
})
export class GetArrayJson {

  contacts = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http : HttpClient) {
  }

  sendRequest() {

    let url = 'http://www.nextflow.in.th/example/phonegap/ng-jsonp/simple-array.php';

    this.http.get(url)
        .subscribe((data:any) => {

      // Assign data (array type) to property
      

    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad GetArrayJson');
  }

}
