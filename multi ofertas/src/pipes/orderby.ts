import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

/**
 * Generated class for the Orderby pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'orderby',
})
export class Orderby implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
   transform(array, args) {
     return _.sortBy(array, args);

  }
}
