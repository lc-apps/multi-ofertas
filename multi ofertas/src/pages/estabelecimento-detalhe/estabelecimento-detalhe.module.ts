import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { EstabelecimentoDetalhe } from './estabelecimento-detalhe';

@NgModule({
  declarations: [
    EstabelecimentoDetalhe,
  ],
  imports: [
    //IonicModule.forChild(EstabelecimentoDetalhe),
  ],
  exports: [
    EstabelecimentoDetalhe
  ]
})
export class EstabelecimentoDetalheModule {}
