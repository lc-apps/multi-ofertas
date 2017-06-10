import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Importando serviço
import {CampanhasService } from '../../providers/campanhas-service';

// Importando Página
import {CampanhaProdutos} from '../../pages/campanha-produtos/campanha-produtos';

/**
 * Generated class for the Campanhas page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-campanhas',
  templateUrl: 'campanhas.html',
  providers: [CampanhasService],
})
export class Campanhas {

  campanhas: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public campanhasServices: CampanhasService) {
              this.getCampanhas();
  }

  //chama Campanhas
   getCampanhas() {
     this.campanhasServices.getCampanhas()
       .then(data => {
         this.campanhas = data;
       });
   }

  // Mostra o detalhe do item selecionado
    CampanhaSelecionada (campanha) {
      this.navCtrl.push(CampanhaProdutos, {
      campanha: campanha
    });
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Campanhas');
  }

}
