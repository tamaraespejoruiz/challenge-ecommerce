import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../models/products';
import { Subcategories } from '../models/subcategories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  private url = "https://static.compragamer.com/test/subcategorias.json";
  
  categories: Subcategories[] = [];


  ngOnInit(): void {
  }

  getAllCategories() {
    return this.http.get<Subcategories>(this.url)
  }


  diferentCategories(categories: Subcategories[]) {
    const categoriesList: number[] = [];

    for (let category of categories) {
      if (categoriesList.includes(category.id_agrupador)) { 
        continue
      }
      else {
        categoriesList.push(category.id_agrupador)
      }

    }
    return categoriesList;
  }

}
