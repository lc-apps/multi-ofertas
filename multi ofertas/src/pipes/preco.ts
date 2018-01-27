import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the Preco pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'preco',
})
export class Preco implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
   transform(value, args) {

       return "R$ " + value.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
   }
}
