import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.sass']
})
export class PageHeaderComponent implements OnInit {

  hidden = false;


  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
