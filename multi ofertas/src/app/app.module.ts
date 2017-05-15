import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from '@angular/http';

// Pipes
import { Image } from './../pipes/image';
import { Lower } from './../pipes/lower';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OverlayPage } from '../pages/overlay/overlay';
import { AlertPage } from '../pages/alert/alert';
import { ProdutosPage } from '../pages/produtos/produtos';
import { ProdutoDetalhe } from '../pages/produto-detalhe/produto-detalhe';


@NgModule({
  declarations: [
    ProdutoDetalhe,
    Lower,
    Image,
    ProdutosPage,
    AlertPage,
    MyApp,
    HomePage,
    OverlayPage

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
    AlertPage,
    MyApp,
    HomePage,
    OverlayPage
  ],

  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
