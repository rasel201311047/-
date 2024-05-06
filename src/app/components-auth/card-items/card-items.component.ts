import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-card-items',
  standalone: true,
  imports: [MatIcon,CommonModule],
  templateUrl: './card-items.component.html',
  styleUrl: './card-items.component.css'
})
export class CardItemsComponent {
  @Input() rating = 4;
  stars: number[] = [];

  ngOnInit(): void {
    this.stars = Array(5).fill(0); // Assuming max rating is 5
  }

  price: number = 100;
  preprice=1200;
  discount=10;
}
