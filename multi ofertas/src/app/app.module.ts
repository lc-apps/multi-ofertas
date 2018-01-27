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
import { Preco } from './../pipes/preco';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {CampanhaProdutos} from '../pages/campanha-produtos/campanha-produtos';
import { Ofertas } from '../pages/ofertas/ofertas';
import {OfertaProduto} from '../pages/oferta-produto/oferta-produto';
import { Campanhas } from '../pages/campanhas/campanhas';
import { Estabelecimentos } from '../pages/estabelecimentos/estabelecimentos';
import { EstabelecimentoDetalhe } from '../pages/estabelecimento-detalhe/estabelecimento-detalhe';
import { Conta } from '../pages/conta/conta';


@NgModule({
  declarations: [
    Campanhas,
    Estabelecimentos,
    EstabelecimentoDetalhe,
    CampanhaProdutos,
    Ofertas,
    OfertaProduto,
    Image,
    DataInicio,
    Orderby,
    Preco,
    MyApp,
    HomePage,
    Conta

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
    CampanhaProdutos,
    Ofertas,
    OfertaProduto,
    MyApp,
    HomePage,
    Conta
  ],

  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
