import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Class and operation we need...
import { HttpClient } from '@angular/common/http';  //มีคกสั่งเตรียมเอาไว้
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


/**
 * Generated class for the GetSimpleJson page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-get-simple-json',
  templateUrl: 'get-simple-json.html',
})
export class GetSimpleJson {

  returnData = "";

  // Inject http: Http
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  sendRequest() {

    // Use http property to send get Request
    // this.http.get('url').subscribe(data => { data.message })
    let url = 'http://www.nextflow.in.th/example/phonegap/ng-jsonp/simple-string.php';

    this.http.get(url).subscribe( (data:any) =>  { // subscribe เพื่อเมื่อข้อมูลตอบกลับมา จะให้มันทำอะไรต่อ  function(data) มันลดรูปได้ เป็ฯ data
      console.log(data);    
      this.returnData = data.message;
    }) ;


    
    
  }

  
}
