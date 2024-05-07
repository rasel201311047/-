import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigationber',
  standalone: true,
  imports: [MatIcon,RouterLink],
  templateUrl: './navigationber.component.html',
  styleUrl: './navigationber.component.css'
})
export class NavigationberComponent {
  navActive = false;

  navSlide(): void {
    this.navActive = !this.navActive;
  }
  cardActive=false;
 
  navcard():void{
    this.cardActive=!this.cardActive;

  }

  searchActive=false;
  searchfnt():void{
    this.searchActive=!this.searchActive;
  }

}
