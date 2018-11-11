import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductModel } from './product.model';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  products: ProductModel[] = [];
  isLoad: boolean;
  constructor(
    private productService: ProductService

  ) {
    const token = localStorage.getItem('token');
    if (token) {
      this.checkToken(token);
    } else {
      this.getToken();
    }
  }

  ngOnInit() {
  }
  async getToken() {
    const user = await this.productService.getTokenJWT('cesar', '180292').toPromise();
    if (user) {
      localStorage.setItem('token', user.token);
      this.getProducts();
    }

  }
  checkToken(t) {
    this.productService.validateToken(t).subscribe(res => {
      if (res.data && res.data.status === 200) {
        this.getProducts();
      } else {
        this.getToken();
      }
    });
  }
  async getProducts() {
    const token = localStorage.getItem('token');
    this.productService.getProduct(token).subscribe(products => {
      this.products = products;
      console.log(this.products);
      this.products = products;
      this.isLoad = true;
    });
    // const p = await this.productService.getProduct(token).toPromise();
  }
}
