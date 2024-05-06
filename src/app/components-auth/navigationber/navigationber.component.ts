import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-navigationber',
  standalone: true,
  imports: [MatIcon],
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
