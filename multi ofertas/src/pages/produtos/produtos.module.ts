import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ProdutosPage } from './produtos';


@NgModule({
  declarations: [
    ProdutosPage,
  ],
  imports: [
    //IonicModule.forChild(Produtos),
  ],
  exports: [
    ProdutosPage
  ]
})
export class ProdutosModule {}
