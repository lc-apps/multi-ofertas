import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AlertPage } from './alert';

@NgModule({
  declarations: [
    AlertPage,
  ],
  imports: [
  //  IonicModule.forChild(AlertPage),
  ],

  exports: [
    AlertPage
  ]

})
export class AlertModule {}
