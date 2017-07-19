import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Importando serviço
import {CampanhasService } from '../../providers/campanhas-service';

// Importando serviço de Ofertas
import {OfertasService} from '../../providers/ofertas-service';

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
  providers: [CampanhasService, OfertasService],
})
export class Campanhas {

  campanhas: any;
  ofertas: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public campanhasServices: CampanhasService,
    public ofertasService: OfertasService) {
    this.getCampanhas();

  }

  //chama Campanhas
  getCampanhas() {
    this.campanhasServices.getCampanhas()
      .then(data => {
        this.campanhas = data;
      });
  }

  //Mostra o detalhe do item selecionado
  CampanhaSelecionada(campanha) {
    console.log('entrou no CampanhaSelecionada');
    this.ofertasService.getOfertasId(campanha)
      .then(data => {
        this.ofertas = data;
      });
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad Campanhas');
  }

}
