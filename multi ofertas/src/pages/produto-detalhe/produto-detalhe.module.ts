import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ProdutoDetalhe } from './produto-detalhe';

@NgModule({
  declarations: [
    ProdutoDetalhe,
  ],
  imports: [
    //IonicModule.forChild(ProdutoDetalhe),
  ],
  exports: [
    ProdutoDetalhe
  ]
})
export class ProdutoDetalheModule {}
