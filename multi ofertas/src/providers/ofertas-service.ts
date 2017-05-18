import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the OfertasService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class OfertasService {

  rest: any;
  urlbase: string = "https://morest.herokuapp.com/campanhas";


  constructor(public http: Http) {
  this.getOfertas();

    console.log('Hello OfertasService Provider');
  }




    getOfertas() {

    let url = this.urlbase;
    console.log('valor url', url);

    if (this.rest) {
      return Promise.resolve(this.rest);
    }

    return new Promise(resolve => {
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          this.rest = data;
          resolve(this.rest);
        });

    });
  }




}
