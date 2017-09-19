import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { OfertaProduto } from './oferta-produto';

@NgModule({
  declarations: [
    OfertaProduto,
  ],
  imports: [
    //IonicModule.forChild(OfertaProduto),
  ],
  exports: [
    OfertaProduto
  ]
})
export class OfertaProdutoModule {}
