import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the Image pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'image',
})
export class Image implements PipeTransform {

   transform(value, args) {

     let newFoto = value.replace('.jpg', '_th.jpg');

     return newFoto;

}
}
