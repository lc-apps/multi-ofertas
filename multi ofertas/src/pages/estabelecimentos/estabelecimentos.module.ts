import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Estabelecimentos } from './estabelecimentos';

@NgModule({
  declarations: [
    Estabelecimentos,
  ],
  imports: [
    //IonicModule.forChild(Estabelecimentos),
  ],
  exports: [
    Estabelecimentos
  ]
})
export class EstabelecimentosModule {}
