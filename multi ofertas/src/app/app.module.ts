import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from '@angular/http';

// Pipes
import { Image } from './../pipes/image';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProdutosPage } from '../pages/produtos/produtos';
import { ProdutoDetalhe } from '../pages/produto-detalhe/produto-detalhe';


@NgModule({
  declarations: [
    ProdutoDetalhe,
    Image,
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
    ProdutoDetalhe,
    ProdutosPage,
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
