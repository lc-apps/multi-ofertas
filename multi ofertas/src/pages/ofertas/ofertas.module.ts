import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Ofertas } from './ofertas';

@NgModule({
  declarations: [
    Ofertas,
  ],
  imports: [
    //IonicModule.forChild(Ofertas),
  ],
  exports: [
    Ofertas
  ]
})
export class OfertasModule {}
