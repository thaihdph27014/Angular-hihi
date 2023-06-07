import { Component } from '@angular/core';
import { User } from 'src/app/common/user';
import { IProduct } from 'src/app/common/product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductComponent {
  filteredProducts: IProduct[] = [];
  searchKeyword: string = '';
  constructor(private router: Router) {
    this.filteredProducts = this.products;
  }
  searchProducts() {
    if (this.searchKeyword.trim() !== '') {
      this.filteredProducts = this.products.filter((product) =>
        product.name.toLowerCase().includes(this.searchKeyword.toLowerCase())
      );
    } else {
      this.filteredProducts = this.products;
    }
  }

  products: IProduct[] = [
 
    {
      id: 1,
      name: 'ADICOLOR CLASSICS 3-STRIPES T-SHIRT',
      price: 100,
      description: 'ADICOLOR CLASSICS 3-STRIPES T-SHIRT',
      imgURL:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9d977062583b437aa475af0400cee9c0_9366/Essentials_Single_Jersey_3-Stripes_T-Shirt_White_IC9336_21_model.jpg',
    },
    {
      id: 2,
      name: 'Nike',
      price: 200,
      description: 'Nike',
      imgURL:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9d1e3cd11b454d9fa660aefb00f899bb_9366/Adicolor_Classics_3-Stripes_T-Shirt_Green_IA4849_21_model.jpg',
    },
    {
      id: 3,
      name: 'Nike',
      price: 200,
      description: 'Nike',
      imgURL:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/841801ad2f544d5cbe92afc500f605f8_9366/Messi_Football_Goat_Graphic_T-Shirt_Black_IM7656_01_laydown.jpg',
    },
    {
      id: 4,
      name: 'Nike',
      price: 200,
      description: 'Nike',
      imgURL:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/034d2da2d34646e38596af9b00e4bf86_9366/Blokepop_T-Shirt_Beige_IP7167_21_model.jpg',
    },
    {
      id: 5,
      name: 'Nike',
      price: 200,
      description: 'Nike',
      imgURL:
        'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/d26e5909311447eb88bdaf8500e4278a_9366/%C3%A1o-thun-always-original.jpg',
    },
    {
      id: 6,
      name: 'Puma',
      price: 300,
      description: 'Hihihihi',
      imgURL:
        'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/76dda7b63e7c4a81a273ae790092748b_9366/track-jacket-%C4%91an-d%C3%A2y-always-original.jpg',
    },

    {
      id: 7,
      name: 'Hihihi',
      price: 300,
      description: 'Hihihihi',
      imgURL:
'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cc9be5be757f470b96eeaf00009dd6d6_9366/Adicolor_Classics_3-Stripes_T-Shirt_Black_IB7407_21_model.jpg',
    },

    {
      id: 7,
      name: 'FUTURE ICONS 3-STRIPES T-SHIRT',
      price: 300,
      description: 'Hihihihi',
      imgURL:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/df6d83bb1db949fe81d1af0701166a6d_9366/Future_Icons_3-Stripes_T-Shirt_White_IB8517_21_model.jpg',
    },
    {
      id:8,
      name:"GAZELLE SHOES",
      price:200,
      description:"This product is excluded from all promotional discounts and offers.",
      imgURL:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2eb02b4211784dfab1e0ae980148d53e_9366/Gazelle_Shoes_Yellow_GX2203_01_standard.jpg"
    },
    {
      id:9,
      name:"HANDBALL SPEZIAL SHOES",
      price:200,
      description:"This product is excluded from all promotional discounts and offers.",
      imgURL:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/82d433384c7c435f9a2fa96d0101d323_9366/Handball_Spezial_Shoes_Blue_BD7633_01_standard.jpg"
    },
    {
      id:10,
      name:"HAMBURG SHOES",
      price:200,
      description:"This product is excluded from all promotional discounts and offers.",
      imgURL:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b6ea85cc14bb450fa10aae92014edab7_9366/Hamburg_Shoes_Brown_GW9642_01_standard.jpg"
    },
    {
      id:19,
      name:"STAN SMITH PRIDE RM SHOES",
      price:200,
      description:"This product is excluded from all promotional discounts and offers.",
      imgURL:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f2a581e5cc3a4cb3a774af6301721fd2_9366/Stan_Smith_PRIDE_RM_Shoes_White_ID7494_01_standard.jpg"
    },
  ];
}
