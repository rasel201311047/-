import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { CardItemsComponent } from '../../components-auth/card-items/card-items.component';
@Component({
  selector: 'app-moreproducts',
  standalone: true,
  imports: [CommonModule,MatIcon,CardItemsComponent],
  templateUrl: './moreproducts.component.html',
  styleUrl: './moreproducts.component.css'
})
export class MoreproductsComponent {

  array = new Array(10).fill(0);
}
