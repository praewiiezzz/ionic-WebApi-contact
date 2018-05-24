import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';


/**
 * Generated class for the PostJson page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-post-json',
  templateUrl: 'post-json.html',
})
export class PostJson {

  returnMessage = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  sendRequest(username, email) {

    let jsonData;

    // Create JSON object from username & email
    

    // Pass JSON as 2nd parameter
    this.http.post('http://www.nextflow.in.th/example/phonegap/post/post-object.php', jsonData)
        .subscribe((data:any) => {
          
          // this.returnMessage = data.message;
        
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostJson');
  }

}
