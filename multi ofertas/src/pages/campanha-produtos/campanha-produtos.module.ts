import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CampanhaProdutos } from './campanha-produtos';

@NgModule({
  declarations: [
    CampanhaProdutos,
  ],
  imports: [
    //IonicModule.forChild(CampanhaProdutos),
  ],
  exports: [
    CampanhaProdutos
  ]
})
export class CampanhaProdutosModule {}
