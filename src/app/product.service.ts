import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {Product, ProductDetails} from './domain/product';
import { PRODUCTS } from './stubs/product.stub';

@Injectable()
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    
    return of(PRODUCTS.map(x => {return {...x, details: undefined}}));

  }

  getProductDetails(id: string): Observable<ProductDetails[]> {
    return of(PRODUCTS.filter(x => x.id == id)[0].details);
  }

}
