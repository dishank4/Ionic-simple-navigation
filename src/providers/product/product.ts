
import { Injectable } from '@angular/core';
import { ProductsModel } from '../../models/product.model';

/*
  Generated class for the ProductProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductProvider {

  products : ProductsModel[];
  constructor() {
    console.log('Hello ProductProvider Provider');
    this.products = [
      {
        id:1,
        name : 'cheese',
        price: 24,
        description:' this is use in pizza and burger'
        
      },
      {
        id:2,
        name : 'buns',
        price: 12,
        description:' this is use in  burger'
        
      },
      {
        id:3,
        name : 'abc',
        price: 50,
        description:' this is use in english learning'
        
      }
    ]
  }

  getProducts(){
    return this.products;
  }

}
