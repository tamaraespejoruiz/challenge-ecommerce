import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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

import { UserRegistrationService } from '../services/user-registration.service';


@NgModule({
  declarations: [
    PageFooterComponent,
    PageHeaderComponent,
    HomeComponent,
    SignUpComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule, 
    MatIconModule,
    MatDialogModule
  ],
  providers: [
    UserRegistrationService
  ],
  exports: [
    SignUpComponent
  ]
})
export class PagesModule { }
