import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/services/products/products.service';
import { Product } from '../../shared/interfaces/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  products: Product[] = [];
  private readonly productService = inject(ProductsService)

  private readonly router = inject(Router);

  getAllProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  viewDetails(id: number): void {
    this.router.navigate(['/product', id]);
  }

  ngOnInit() {
    this.getAllProducts()
  }
}
