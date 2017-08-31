import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public ofertasService: OfertasService, ) {
    this.getOfertas();
  }

  //chama ofertas
  getOfertas() {
    this.ofertasService.getOfertas()
      .then(data => {
        this.ofertas = data;
        console.log(this.ofertas);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Ofertas');
  }

}
