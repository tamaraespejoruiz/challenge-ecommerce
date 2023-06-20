import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../models/products';

import { Inject } from '@angular/core';
import { map } from 'rxjs'; 
import { Observable } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { formatCurrency } from '@angular/common';
import { LOCALE_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient, private sanitizer: DomSanitizer, 
  @Inject(LOCALE_ID) public locale: string  ) { }

  private url: string = "https://static.compragamer.com/test/productos.json";

  private urlImage = 'http://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_'
  
  getAllProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.url)
            .pipe(map(resp => resp))
  }

  linkImage(products: Products): SafeUrl {
    const resultado = products.imagenes.map( link => 
      this.urlImage + link.nombre + '-med.jpg'
    )
    return this.sanitizer.bypassSecurityTrustUrl(resultado[0]);
    
  }

  getLink(product: Products) {
    return  this.linkImage(product);
  }

  getAllProductsFromCategories(category: number, products: Products[]) {
    const resultado = products.filter(res => res.id_subcategoria == category);
    return resultado
  }

  getformatPrecioArgentina(product: Products) {
    const largo = product.precio.toString(10).length
    const resultado = formatCurrency(product.precio, this.locale, '$', 'ARG', '6.2-2' );
    return resultado;

  }
}
