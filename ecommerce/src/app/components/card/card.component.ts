import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Products } from 'src/app/models/products';
import { ProductsService } from '../../services/products.service';
import { Subcategories } from 'src/app/models/subcategories';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  categories: Subcategories[] = [];
  products: Products[] = [];

  constructor(
    private categoriesService: CategoriesService, 
    public productsService: ProductsService,
  ) { }

  precioArgentina: number = 0

  onClick() {
    console.log("TOCO EL BOTON");
  }

  obtenerNombresSubcategorias(product: Products):string {
    let subcategorie = product.id_subcategoria
    //switch(product.id_subcategoria) {
      if ((subcategorie == 26) || (subcategorie == 49)) {
        return "Mothers Intel y AMD "; //id -> 26, 49 
      }
      else if ((subcategorie == 62) || (subcategorie == 6)) {
        return "Placas de Video GeForce y Radeon AMD"; //id -> 62, 6 
      }
      else if (subcategorie == 58) {
        return "Netbook " //58 
      }
      else if (subcategorie == 5) {
        return "Monitores y pantallas "; //59 
      }      
      else if ((subcategorie == 27) || (subcategorie == 48)) {
        return "Procesadores Intel y AMD "; //27, 48
      }
      else if (subcategorie == 7) {
        return "Gabinetes "; //7
      }
      else if ((subcategorie == 16) || (subcategorie == 19)) {
        return "Discos Externos y Discos Rígidos ";//16, 19 
      }
      else if (subcategorie == 15) {
        return "Memorias "; //15
      }
      else if ((subcategorie == 2) || (subcategorie == 8) || (subcategorie == 39)) {
        return "Auriculares, Teclados y Mouses "; // 2, 8, 39
      }
      else if ((subcategorie == 35) || (subcategorie == 36)) {
        return "Coolers Fan Y CPU"; //35, 36 
      }
      else if (subcategorie == 34) {
        return "Fuentes de alimentación "; //34
      }
      else {
        return "FALLO";
      }


  }

  ngOnInit(): void {
    this.categoriesService.getAllCategories().subscribe((responseCategories:any) => 
    {
      this.categories = responseCategories;
      console.log("CATEGORIAS", this.categories);

      // PARTE DE PRODUCTOS
      this.productsService.getAllProducts().subscribe((responseProducts:any) => 
      {
        this.products = responseProducts;
        let prueba = this.products[0]
        //console.log("El primer objeto es", prueba);
        //console.log("LINK PRIMER ELEMENTO",this.productsService.getLink(prueba));
        //console.log("FORMATO PRECIO",this.productsService.getformatPrecioArgentina(prueba));
        //console.log("ES ESTE", prueba.id_subcategoria)
        //console.log("Valor", (this.products[0]).id_subcategoria)
        //console.log("subcategorias", this.obtenerNombresSubcategorias(prueba));
        console.log("LISTA DE ID", this.categoriesService.diferentCategories(this.categories))

      })
    })
  }

}
