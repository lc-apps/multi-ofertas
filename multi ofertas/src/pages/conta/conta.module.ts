import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Conta } from './conta';

@NgModule({
  declarations: [
    Conta,
  ],
  imports: [
    //IonicModule.forChild(Conta),
  ],
  exports: [
    Conta
  ]
})
export class ContaModule {}
