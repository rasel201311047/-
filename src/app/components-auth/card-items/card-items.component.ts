import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-items',
  standalone: true,
  imports: [MatIcon,CommonModule,RouterLink],
  templateUrl: './card-items.component.html',
  styleUrl: './card-items.component.css'
})
export class CardItemsComponent {
  @Input() rating = 4;
  stars: number[] = [];

  ngOnInit(): void {
    this.stars = Array(5).fill(0); 
  }

  price: number = 100;
  preprice=1200;
  discount=10;
}
