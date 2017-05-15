import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { OverlayPage } from './overlay';

@NgModule({
  declarations: [
    OverlayPage,
  ],
  imports: [
  //  IonicModule.forChild(OverlayPage),
  ],
  exports: [
    OverlayPage
  ]
})
export class OverlayModule {}
