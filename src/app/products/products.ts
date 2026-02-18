import { Component } from '@angular/core';
import { ProductService } from '../services/product-details';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule,],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})

export class Products {

  constructor(private product: ProductService) {

  }

  allProductData: any = [];
  ngOnInit() {
      this.product.GetProductData().subscribe((res:any) => {
          this.allProductData = res.products;
          // console.log(this.allProductData);
      })
  }

}
