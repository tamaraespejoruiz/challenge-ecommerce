import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { CartComponent } from './cart/cart.component';
import { CardComponent } from './card/card.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    PageHeaderComponent, 
    PageFooterComponent,
    CartComponent,
    CardComponent
  ],
  imports: [
    CommonModule, 
    AppRoutingModule,
    MatCardModule,
    MatTableModule, 
    MatPaginatorModule
  ],
  exports: [
    PageHeaderComponent, 
    PageFooterComponent,
    CartComponent,
    CardComponent,
  ]
})
export class ComponentsModule { }
