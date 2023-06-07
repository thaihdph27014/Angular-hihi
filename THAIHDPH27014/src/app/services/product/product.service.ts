import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

constructor(private htpp: HttpClient) { }
 private API = 'http://localhost:8080/api/products';

 getAllProduct(): Observable<any[]> {
  return this.htpp.get<any[]>(this.API)
 }
 getOneProduct(id: string | number): Observable<IProduct> {
  return this.htpp.get<IProduct>(`${this.API}/${id}`)
 }
 addProduct(product: any): Observable<IProduct> {
  return this.htpp.post<IProduct>(`${this.API}`, product)
 }
}
