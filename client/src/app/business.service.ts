import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/* submit the data to Node server
 we need to write the HTTP POST request with the 
 data that are coming from the client */

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  uri = 'http://localhost:8080/products';

  constructor(private http: HttpClient) { }
  addProducts(product_name, product_price) {
    const myObj = {
      product_name: product_name,
      product_price: product_price
    };
    return this.http.post(`${this.uri}/add`, myObj);
  }
  getProducts() {
    return this.http.get(`${this.uri}`);
  }
  
  updateProduct(id, product_name, product_price) {
    const obj = {
      product_name: product_name,
      product_price: product_price,
    };
    return this.http.put(`${this.uri}/id/${id}`, obj);
  }

  deleteProducts(id){
    return this.http.delete(`${this.uri}/delete/${id}`, id);
  }

}
