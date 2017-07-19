import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Importando serviço de Ofertas
import {OfertasService} from '../../providers/ofertas-service';

/**
 * Generated class for the CampanhaProdutos page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-campanha-produtos',
  templateUrl: 'campanha-produtos.html',
  providers: [OfertasService],
})
export class CampanhaProdutos {

 public campanha:any;
 public ofertas: any;


  constructor(public navCtrl: NavController,
     public ofertasService: OfertasService,
     public navParams: NavParams) {
    this.campanha = navParams.get("campanha");
    console.log('campanha',this.campanha);
  }


//idcampanha = this.campanha.id;

idcampanha = 5;

//chama ofertas
  getOfertasId(idcampanha) {
    console.log('entrou getOfertasId');
    this.ofertasService.getOfertasId(idcampanha)
      .then(data => {
        this.ofertas = data;
      });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CampanhaProdutos');
  }

}
