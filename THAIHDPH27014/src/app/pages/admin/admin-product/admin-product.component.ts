import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent implements OnInit {
  constructor(private router: Router, private productService: ProductService) {
  }
  
  products!: IProduct[] 
 ngOnInit(): void {
   this.productService.getAllProduct().subscribe(data => {
    console.log(data);
    
    this.products = data
    
   })
 }
}
