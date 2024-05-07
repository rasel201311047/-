import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-catagory',
  standalone: true,
  imports: [MatIcon,CommonModule],
  templateUrl: './catagory.component.html',
  styleUrl: './catagory.component.css'
})
export class CatagoryComponent {

}
