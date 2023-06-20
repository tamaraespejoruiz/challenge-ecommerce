import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Products } from 'src/app/models/products';
import { ProductCartService } from 'src/app/services/product-cart.service';
import { Cart } from 'src/app/models/cart';


const ELEMENT_DATA: Cart[] = [
  {cantidad: 1, titulo: 'Hydrogen', precio: 1.0079, stock: 0},
  {cantidad: 2, titulo: 'Helium', precio: 4.0026, stock: 0},
  {cantidad: 3, titulo: 'Lithium', precio: 6.941, stock: 0},
  {cantidad: 4, titulo: 'Beryllium', precio: 9.0122, stock: 0},
  {cantidad: 5, titulo: 'Boron', precio: 10.811, stock: 0},
  {cantidad: 6, titulo: 'Carbon', precio: 12.0107, stock: 0},
  {cantidad: 7, titulo: 'Nitrogen', precio: 14.0067, stock: 0},
  {cantidad: 8, titulo: 'Oxygen', precio: 15.9994, stock: 0},
  {cantidad: 9, titulo: 'Fluorine', precio: 18.9984, stock: 0},
  {cantidad: 10, titulo: 'Neon', precio: 20.1797, stock: 0}
];



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit, AfterViewInit {

  cartList = []
  products: Products[] = [];
  carts: Cart[] = []
  
//Eliminar
//vaciar carrito 

  displayedColumns: string[] = ['Cantidad', 'Titulo', 'Precio', 'Eliminar'];
  dataSource = ELEMENT_DATA//new MatTableDataSource<Products>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    //this.dataSource.filter = filterValue.trim().toLowerCase();

    //if (this.dataSource.paginator) {
    //  this.dataSource.paginator.firstPage();
    //}
  }

  constructor(private productsCartService: ProductCartService, 
              private productCartService: ProductCartService) { 
  }

  ngOnInit(): void {
    //this.carts = this.productsCartService.products.subscribe(data => this.products = data);
    console.log(this.productsCartService.products.subscribe(data => this.products = data))

  }


  total(): number {
    let sum = 0;
    this.products.forEach(product => {
      sum += product.stock * product.precio // TIENE QUE VER EN LA TARJETA
    });
    return sum;
  }
  
  ImprimirMensajeVacio() {
    if (this.cartList.length === 0) {
      //<h2>Aún no agregaste productos al carrito</h2>
      //<p>¿No sabés qué comprar? ¡Miles de productos tecnológicos te esperan!</p>
      //Agregar boton de ir a comprar!
      console.log("CARRO VACIO")
    }
  }
  upQuantity(cart: Cart): void {
    if (cart.stock > cart.cantidad) {
      cart.cantidad++;
      //this.cartCartService.addToCart(cart);
    } else {
      alert("Sin stock");
    }
    console.log("agregar carrito");
  }

  downQuantity(cart: Cart): void {
    if (cart.stock > 0) {
      cart.cantidad--;
    }
    console.log("sacar del carrito");

  }
}
