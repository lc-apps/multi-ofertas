import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProdutoDetalhe page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-produto-detalhe',
  templateUrl: 'produto-detalhe.html',
})
export class ProdutoDetalhe {

public item:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.item = navParams.get("item");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutoDetalhe');
  }

}
