import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ProdutosPage } from '../pages/produtos/produtos';
import { Ofertas } from '../pages/ofertas/ofertas';
import { Campanhas } from '../pages/campanhas/campanhas';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  // cria o arry das páginas

  pages: Array<{title:string , component: any}> = [];

  rootPage:any = HomePage;

  constructor(platform: Platform,
  public menuCTRL: MenuController
  ) {

    this.pages = [

      {title: 'Home', component: HomePage},
      {title: 'Campanhas', component: Campanhas},
      {title: 'Produtos', component: ProdutosPage},
      {title: 'Ofertas Especiais', component: Ofertas}

    ];



    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

    });
  }

 openPage(page: {title:string , component: any} ): void{
    this.rootPage = page.component;
    this.menuCTRL.close();
 }

}
