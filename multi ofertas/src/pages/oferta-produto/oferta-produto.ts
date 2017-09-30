import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

// Importando serviço
import {OfertasService} from '../../providers/ofertas-service';



/**
 * Generated class for the OfertaProduto page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-oferta-produto',
  templateUrl: 'oferta-produto.html',
  providers: [OfertasService],
})

export class OfertaProduto {

  ofertas: any;
  item: any;
  public ofertas_original: any;
  searchQuery: string = '';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public ofertasService: OfertasService,) {
  console.log('Oferta Produto');
  this.ofertas = navParams.get("ofertas");

  this.item = this.ofertas[0];
  console.log('ofertas', this.ofertas);
  console.log('item', this.item);
  }


  //busca na lista os itens
  getItems(ev: any) {

    // carrega o valor original da lista
     this.ofertas = this.ofertas_original;

     // set val to the value of the searchbar
     let val = ev.target.value;

     console.log('ev.target.value', val);

     // if the value is an empty string don't filter the items
     if (val && val.trim() != '') {
       this.ofertas = this.ofertas.filter((oferta) => {
         return (oferta.produto.toLowerCase().indexOf(val.toLowerCase()) > -1);
       })
     }
   }

   // criar um filtro para reodenar a lista
   //https://www.joshmorony.com/filtering-mapping-and-reducing-arrays-in-ionic-2/
   reverse(){
     this.ofertas = this.ofertas.reverse();

   }




  ionViewDidLoad() {
    console.log('ionViewDidLoad OfertaProduto');
  }

}
