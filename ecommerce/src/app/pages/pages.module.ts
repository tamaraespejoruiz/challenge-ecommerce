import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProductsComponent } from './products/products.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent, 
    SignUpComponent, 
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,

  ],
  exports: [
    HomeComponent, 
    SignUpComponent, 
    ProductsComponent    
  ]
})
export class PagesModule { }
