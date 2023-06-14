import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path: 'home', 
    component: HomeComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'products',
    component: ProductsComponent 
  },
  {
    path: '**',
    redirectTo: 'home'
  }  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ], 
})
export class AppRoutingModule { }
