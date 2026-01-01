import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product, ProductItemComponent } from '../product-item/product-item';
import { ProductService } from '../../services/product';


@Component({
  selector: 'app-product-list',
  imports: [ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit, OnDestroy {
  products: Product[] = [];
  lastSelectedProduct: string = '';
  removedProducts: string[] = [];

  constructor(private productService: ProductService) {
    console.log('🎯 ProductListComponent: Constructor called');
  }

  ngOnInit(): void {
    console.log(' ProductListComponent: ngOnInit called');
    this.loadProducts();
  }

  ngOnDestroy(): void {
    console.log(' ProductListComponent: ngOnDestroy called');
  }

  private loadProducts(): void {
    console.log(' ProductListComponent: Loading products from service');
    this.products = this.productService.getProducts();
    console.log(` Loaded ${this.products.length} products from service`);
  }

  onProductSelected(productName: string): void {
    console.log(` Product selected: ${productName}`);
    this.lastSelectedProduct = productName;
  }

  onProductRemoved(index: number): void {
    const removedProduct = this.productService.removeProductByIndex(index);

    if (removedProduct) {
      console.log(` Removing product: ${removedProduct.name} at index ${index}`);
      this.removedProducts.push(removedProduct.name);
      this.products = this.productService.getProducts();
      console.log(` Remaining products: ${this.products.length}`);
    }
  }

  resetProducts(): void {
    console.log(' Resetting product list using service');
    this.productService.resetProducts();
    this.products = this.productService.getProducts();
    this.removedProducts = [];
    this.lastSelectedProduct = '';
    console.log(` Reset completed. Total products: ${this.products.length}`);
  }

}
