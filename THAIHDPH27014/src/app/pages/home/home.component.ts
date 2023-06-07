
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/user';
import { IProduct } from 'src/app/common/product';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  description: string | undefined;
  // filteredProducts: IProduct[] = [];
  searchKeyword: string = '';
  constructor(private router: Router, private productService: ProductService) {
  }
  searchProducts() {
    if (this.searchKeyword.trim() !== '') {
      this.products = this.products.filter((product) =>
        product.name.toLowerCase().includes(this.searchKeyword.toLowerCase())
      );
    } else {
      this.products = this.products;
    }
  }

  // viewProductDetail(product: IProduct) {
  //   this.router.navigate(['/products', product.id]);
  // }
  onClick() {
    this.description = 'mota';
  }

  user: User = {
    name: 'Thai',
    age: 20,
    address: 'Phu Tho',
  };

  products!: IProduct[] 
  ngOnInit(): void {
    this.productService.getAllProduct().subscribe((data) => {
     this.products = data
     
     
    })
  }
}