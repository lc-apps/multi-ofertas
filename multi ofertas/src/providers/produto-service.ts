import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProdutoService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProdutoService {

  rest: any;
  urlbase: string = "http://morest.herokuapp.com/produtos/nome/";
  param: string;


  constructor(public http: Http) {
    console.log('Hello ProdutoService Provider');
  }

  // faz a pesquisa no banco de dados pela api morest
  load(val) {




    //pega a variavel passada com parametro
    let url = this.urlbase + val;
    console.log('valor url', url);

    /*
    if (this.rest) {
      return Promise.resolve(this.rest);
    }
    */

    // Se ainda não tem os dados
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
