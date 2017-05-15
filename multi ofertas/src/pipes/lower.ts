import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the Lower pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'lower',
})
export class Lower implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {

    value = value + 'teste';
    
    return value.toLowerCase();
  }
}
