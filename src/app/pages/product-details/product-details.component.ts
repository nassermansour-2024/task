import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../shared/services/products/products.service';
import { Product } from '../../shared/interfaces/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  standalone: true
})
export class ProductDetailsComponent implements OnInit {
  product!:Product ;
  private readonly productService = inject(ProductsService);
  private readonly route = inject(ActivatedRoute);

  ngOnInit() {
    this.getProductDetails();
  }

  getProductDetails():void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(id).subscribe({
      next: (data) => {
        this.product = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  capitalizeFirstLetter(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
