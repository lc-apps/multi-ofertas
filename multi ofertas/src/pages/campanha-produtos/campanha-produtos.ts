import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Importando serviço de Ofertas
import {OfertasService} from '../../providers/ofertas-service';

// Importando serviço
import {ProdutoService} from '../../providers/produto-service';

// Importando página
import { ProdutoDetalhe } from '../../pages/produto-detalhe/produto-detalhe';

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

    this.ofertas = navParams.get("ofertas");

     console.log('ofertas',this.ofertas);
  }

  // Mostra o detalhe do item selecionado
    itemSelected (item) {
      this.navCtrl.push(ProdutoDetalhe, {
      item: item
    });
      }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CampanhaProdutos');
  }

}
