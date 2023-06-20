import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { AppRoutingModule } from '../app-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    PageHeaderComponent, 
    PageFooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatToolbarModule, 
    MatIconModule, 
    MatBadgeModule,
  ],
  exports: [ 
    PageHeaderComponent, 
    PageFooterComponent
  ]
})
export class ComponentsModule { }

