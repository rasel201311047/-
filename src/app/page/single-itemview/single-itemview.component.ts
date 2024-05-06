import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {  Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavberComponent } from '../../components-auth/navber/navber.component';
import { FooterComponent } from '../../components-auth/footer/footer.component';
import { NavigationberComponent } from '../../components-auth/navigationber/navigationber.component';
@Component({
  selector: 'app-single-itemview',
  standalone: true,
  imports: [CommonModule,MatIcon,NavigationberComponent,FooterComponent],
  templateUrl: './single-itemview.component.html',
  styleUrl: './single-itemview.component.css'
})
export class SingleItemviewComponent {
  @Input() rating = 4;
  stars: number[] = [];

  ngOnInit(): void {
    this.stars = Array(5).fill(0); 
  }

}

