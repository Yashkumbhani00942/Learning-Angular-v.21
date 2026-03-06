import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public ProductAPI = 'https://dummyjson.com/products';

  // http = inject(HttpClient)

  constructor(private http:HttpClient){
    
  }  

  GetProductData(){
    return this.http.get(this.ProductAPI)
  }
}

