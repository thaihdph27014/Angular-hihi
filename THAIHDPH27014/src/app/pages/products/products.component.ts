import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService) {}

  filteredProducts: IProduct[] = [];
  searchKeyword: string = '';

  searchProducts() {
    if (this.searchKeyword.trim() !== '') {
      this.filteredProducts = this.products.filter((product) =>
        product.name.toLowerCase().includes(this.searchKeyword.toLowerCase())
      );
    } else {
      this.filteredProducts = this.products;
    }
  }

  products: IProduct[] = []
  ngOnInit(): void {
    this.productService.getAllProduct().subscribe((data) => {
     this.products = data
     
    })
  }




}
