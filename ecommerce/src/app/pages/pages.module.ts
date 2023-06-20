import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';

import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProductsComponent } from './products/products.component';

import { PageFooterComponent } from '../components/page-footer/page-footer.component';
import { PageHeaderComponent } from '../components/page-header/page-header.component';

import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { CategoriesService } from '../services/categories.service';


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
    FormsModule,
    ReactiveFormsModule,
    MatInputModule, 
    MatIconModule,
    MatDialogModule
  ],
  providers: [ CategoriesService
  ],
  exports: [
    HomeComponent,
    SignUpComponent,
    ProductsComponent
  ]
})
export class PagesModule { }