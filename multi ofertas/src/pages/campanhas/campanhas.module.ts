import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Campanhas } from './campanhas';

@NgModule({
  declarations: [
    Campanhas,
  ],
  imports: [
    //IonicModule.forChild(Campanhas),
  ],
  exports: [
    Campanhas
  ]
})
export class CampanhasModule {}
