import { Component } from '@angular/core';
import { CardItemsComponent } from '../card-items/card-items.component';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-trendingproduct',
  standalone: true,
  imports: [CardItemsComponent,MatIcon],
  templateUrl: './trendingproduct.component.html',
  styleUrl: './trendingproduct.component.css'
})
export class TrendingproductComponent {

}
