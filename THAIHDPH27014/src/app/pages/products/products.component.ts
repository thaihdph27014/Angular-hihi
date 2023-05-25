import { Component } from '@angular/core';
import { IProduct } from 'src/app/common/product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {



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

  products: IProduct[] =[
    {
 id:1,
   name:"ADICOLOR CLASSICS 3-STRIPES T-SHIRT",
   price:100,
   description:"ADICOLOR CLASSICS 3-STRIPES T-SHIRT",
   imgURL:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9d977062583b437aa475af0400cee9c0_9366/Essentials_Single_Jersey_3-Stripes_T-Shirt_White_IC9336_21_model.jpg"

 },
 {
   id:2,
     name:"Nike",
     price:200,
     description:"Nike",
   imgURL:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9d1e3cd11b454d9fa660aefb00f899bb_9366/Adicolor_Classics_3-Stripes_T-Shirt_Green_IA4849_21_model.jpg"
   },
   {
     id:3,
       name:"Nike",
       price:200,
       description:"Nike",
       imgURL:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/841801ad2f544d5cbe92afc500f605f8_9366/Messi_Football_Goat_Graphic_T-Shirt_Black_IM7656_01_laydown.jpg"
   
     },  {
       id:4,
         name:"Nike",
         price:200,
         description:"Nike",
         imgURL:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/034d2da2d34646e38596af9b00e4bf86_9366/Blokepop_T-Shirt_Beige_IP7167_21_model.jpg"
     
       },
 {
 id:5,
   name:"Nike",
   price:200,
   description:"Nike",
   imgURL:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/d26e5909311447eb88bdaf8500e4278a_9366/%C3%A1o-thun-always-original.jpg"

 },
 {
   id:6,
     name:"Puma",
     price:300,
     description:"Hihihihi",
     imgURL:"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/76dda7b63e7c4a81a273ae790092748b_9366/track-jacket-%C4%91an-d%C3%A2y-always-original.jpg"
 
   },

   {
     id:7,
       name:"Hihihi",
       price:300,
       description:"Hihihihi",
       imgURL:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc9be5be757f470b96eeaf00009dd6d6_9366/Adicolor_Classics_3-Stripes_T-Shirt_Black_IB7407_21_model.jpg"
   
     },
   
     {
       id:8,
         name:"FUTURE ICONS 3-STRIPES T-SHIRT",
         price:300,
         description:"Hihihihi",
         imgURL:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/df6d83bb1db949fe81d1af0701166a6d_9366/Future_Icons_3-Stripes_T-Shirt_White_IB8517_21_model.jpg"
     
       },

]




}
