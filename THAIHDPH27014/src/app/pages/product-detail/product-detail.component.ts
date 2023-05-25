import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from 'src/app/common/product.service';
import { IProduct } from 'src/app/common/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: IProduct = {} as IProduct;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const productId = params.get('id');
      const products = this.productService.getProducts();
      const product = products.find(
        (product) => product.id === (productId ? parseInt(productId) : null)
      );

      if (product) {
        this.product = product;
      } else {
        // Xử lý trường hợp không tìm thấy sản phẩm
        console.log('Không tìm thấy sản phẩm');
      }
    });
  }
}
