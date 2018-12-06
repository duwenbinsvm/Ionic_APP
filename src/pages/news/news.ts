import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  public msg = 'This is a news page';
  public list=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
    for (var i=0;i<30;i++){
      this.list.push('This is NO. '+i+' data');
    }
  }

  

}
