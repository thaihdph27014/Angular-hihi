import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {  constructor(private formBuilder: FormBuilder, private productService: ProductService, private router: Router) {}

formProduct = this.formBuilder.group({
  name: ['', [Validators.required, Validators.minLength(6)]],
  image: ['', [Validators.required]],
  categoryId: ['', [Validators.required]],
  price: [0, [Validators.required]],
  desc: ['', [ Validators.minLength(6)]],
})

onSubmit() {
  const product = this.formProduct.value;
  this.productService.addProduct(product).subscribe( () => {
    alert("Them san pham thanh cong");
    this.router.navigateByUrl("/admin/products")
  })
  
}

}
