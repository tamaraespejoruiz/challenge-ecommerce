import { Component, OnInit } from '@angular/core';

import { Products } from 'src/app/models/products';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  products: Products[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((responseProducts:any) => 
    {
      console.log("LOS PRODUCTOS SON", responseProducts);
      this.products = responseProducts;

    })
  }
  categoriasPosibles = [1, 2, 5, 6, 7, 8, 9, 10, 24, 25, 26];

}
