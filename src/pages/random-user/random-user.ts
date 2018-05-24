import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RandomUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-random-user',
  templateUrl: 'random-user.html',
})
export class RandomUserPage {

  contacts = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }
  
  sendRequest() {

    let url = 'https://randomuser.me/api/?results=100';

    this.http.get(url)
      .subscribe((data: any) => {
        console.log(data);
        this.contacts = data.results;


      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RandomUserPage');
  }

}
