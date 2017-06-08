import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the DataInicio pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'datainicio',
})
export class DataInicio implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value, args) {

     var newDate = value.substring(0,10);//intervalo de caracteres prentendido //value.split('T').reverse().join('.')
     newDate = newDate.split('-').reverse().join('/')
     console.log('dia inicio',newDate);
     return newDate;
  }
}
