import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../domain/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  loadProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }
  private products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.loadProducts();
  }

  displayProduct(product: Product) {
    this.products.forEach(x => x.details = undefined);
    this.productService.getProductDetails(product.id).subscribe(
      details => product.details = details
    );
  }

}
