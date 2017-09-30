import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from '@angular/http';

// Pipes
import { Image } from './../pipes/image';
import { DataInicio } from './../pipes/datainicio';
import { Orderby } from './../pipes/orderby';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProdutosPage } from '../pages/produtos/produtos';
import { ProdutoDetalhe } from '../pages/produto-detalhe/produto-detalhe';
import {CampanhaProdutos} from '../pages/campanha-produtos/campanha-produtos';
import { Ofertas } from '../pages/ofertas/ofertas';
import {OfertaProduto} from '../pages/oferta-produto/oferta-produto';
import { Campanhas } from '../pages/campanhas/campanhas';
import { Estabelecimentos } from '../pages/estabelecimentos/estabelecimentos';
import { EstabelecimentoDetalhe } from '../pages/estabelecimento-detalhe/estabelecimento-detalhe';


@NgModule({
  declarations: [
    Campanhas,
    Estabelecimentos,
    EstabelecimentoDetalhe,
    ProdutoDetalhe,
    CampanhaProdutos,
    Ofertas,
    OfertaProduto,
    Image,
    DataInicio,
    Orderby,
    ProdutosPage,
    MyApp,
    HomePage

  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    Campanhas,
    Estabelecimentos,
    EstabelecimentoDetalhe,
    ProdutoDetalhe,
    CampanhaProdutos,
    ProdutosPage,
    Ofertas,
    OfertaProduto,
    MyApp,
    HomePage
  ],

  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
