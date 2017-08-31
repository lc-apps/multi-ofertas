import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Importando serviço
import {EstabelecimentosService } from '../../providers/estabelecimentos-service';

/**
 * Generated class for the Estabelecimentos page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-estabelecimentos',
  templateUrl: 'estabelecimentos.html',
  providers: [EstabelecimentosService],
})

export class Estabelecimentos {

  public estabelecimentos: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public estabelecimentosService: EstabelecimentosService,) {
              this.getEstabelecimentos();
              console.log('entrou no getEstabelecimentos');
  }



  //chama Estabelecimentos
  getEstabelecimentos() {
    this.estabelecimentosService.getEstabelecimentos()
      .then(data => {
        this.estabelecimentos = data;
        console.log(this.estabelecimentos);
      });
  }



  ionViewDidLoad() {
    console.log('Página Estabelecimentos');
  }



}
