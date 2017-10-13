import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

// Importando serviço
import {OfertasService} from '../../providers/ofertas-service';

// Importando Página
import {OfertaProduto} from '../../pages/oferta-produto/oferta-produto';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [OfertasService],

})


export class HomePage {

  public ofertas: any;
  searchQuery: string = '';
  public ofertas_original: any;

  constructor(public navCtrl: NavController,
    public ofertasService: OfertasService,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController) {

  }

  // Metodo para pesquisa de produtos
  pesquisarOfertas(ev: any) {


    // seta o valor passado pelo searchBar
    let val = ev.target.value;
    console.log('valor do imput ', val);
    // se o valor for diferente de vazio excuta a pesquisa
    if (val && val.trim() != '') {
      this.ofertasService.nome(val)
        .then(rest => {
          this.ofertas = rest;
          // cria uma lista com o valor original
          this.ofertas_original = this.ofertas;
        });
    }
    else {
      // se vazio mostra alert.
      let alert = this.alertCtrl.create({
        title: 'Atenção',
        subTitle: 'Digite um produto para realizar a pesquisa !',
        buttons: ['OK']
      });
      alert.present();

    }
  }

  getOfertasIdProduto(oferta) {
    console.log(oferta);
    let loader = this.loadingCtrl.create({
      content: "Procurando Ofertas, Por favor aguarde...",

    });

    loader.present();

    //chama ofertas por id do produto

    this.ofertasService.getOfertasIdProduto(oferta)
      .then(data => {
        this.ofertas = data;
        loader.dismiss();
        console.log('retorno', this.ofertas);
        this.goToOtherPage(this.ofertas);

      });


  }// getOfertasIdProduto

  goToOtherPage(ofertas) {

    console.log('goToOtherPage', ofertas);
    //causing the nav controller to animate the new page in
    this.navCtrl.push(OfertaProduto, {
      ofertas: this.ofertas
    });
    this.restauraOfertas();
  }

  restauraOfertas(){
    this.ofertas = this.ofertas_original;
  }


}
