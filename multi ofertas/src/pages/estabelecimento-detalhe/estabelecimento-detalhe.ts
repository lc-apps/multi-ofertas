import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EstabelecimentoDetalhe page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-estabelecimento-detalhe',
  templateUrl: 'estabelecimento-detalhe.html',
})
export class EstabelecimentoDetalhe {

  public loja:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.loja = navParams.get("item");

    console.log('estabelecimento',this.loja);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstabelecimentoDetalhe');
  }

}
