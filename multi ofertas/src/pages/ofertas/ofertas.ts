import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

// Importando serviço
import {OfertasService} from '../../providers/ofertas-service';

/**
 * Generated class for the Ofertas page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-ofertas',
  templateUrl: 'ofertas.html',
  providers: [OfertasService],
})

export class Ofertas {

  ofertas: any;
  public ofertas_original: any;
  searchQuery: string = '';

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public ofertasService: OfertasService,
    public loadingCtrl: LoadingController,) {
    this.presentLoading();

  }


  presentLoading() {
   let loader = this.loadingCtrl.create({
     content: "Carregando Ofertas, Por favor aguarde...",

   });

   loader.present();

  //chama ofertas

    this.ofertasService.getOfertas()
      .then(data => {
        this.ofertas = data;
        // cria uma lista com o valor original
        this.ofertas_original = this.ofertas;
        loader.dismiss();
        console.log(this.ofertas);

      });
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
    console.log('ionViewDidLoad Ofertas');
  }

}
