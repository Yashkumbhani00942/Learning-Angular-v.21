import { Component } from '@angular/core';
import { ProductService } from '../services/product';
import { CommonModule } from '@angular/common';
import { TrimTextPipe } from '../custom-pipe/trim-text-pipe';

@Component({
  selector: 'app-products',
  imports: [CommonModule, TrimTextPipe],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})

export class Products {

  constructor(private product: ProductService) {
  }

  allProductData: any = [];
  ngOnInit() {
      this.product.GetProductData().subscribe((res:any) => {
          console.log(res);
          this.allProductData = res;
          console.log(this.allProductData);
      })
  }

}
