import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

// Importando serviço
import {ProdutoService} from '../../providers/produto-service';

// Importando página
import { ProdutoDetalhe } from '../../pages/produto-detalhe/produto-detalhe';

/**
 * Generated class for the Produtos page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@IonicPage()

@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
  providers: [ProdutoService],


})

export class ProdutosPage {

  public produtos: any;
  searchQuery: string = '';

  constructor(public navCtrl: NavController,
              public produtoService: ProdutoService,
              public alertCtrl: AlertController) {


  }

  // Metodo para pesquisa de produtos
  pesquisarProdutos(ev: any) {


    // seta o valor passado pelo searchBar
    let val = ev.target.value;
    console.log('valor do imput ',val);
    // se o valor for diferente de vazio excuta a pesquisa
    if (val && val.trim() != '') {
      this.produtoService.load(val)
        .then(rest => {
          this.produtos = rest;
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


// Mostra o detalhe do item selecionado
  itemSelected (item) {
    this.navCtrl.push(ProdutoDetalhe, {
    item: item
  });
    }

/* Carrega a listagem de produtos
  loadProduto() {
    this.produtoService.load()
      .then(rest => {
        this.produtos = rest;
      });
  }
*/
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutosPage');
  }

}
