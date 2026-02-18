import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public ProductAPI = 'https://dummyjson.com/products';

  constructor(private http:HttpClient){
    
  }  

  GetProductData(){
    return this.http.get(this.ProductAPI)
  }
}

