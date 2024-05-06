import { Component } from '@angular/core';

@Component({
  selector: 'app-navber',
  standalone: true,
  imports: [],
  template: './navber.component.html',
  styleUrl: './navber.component.css'
})
export class NavberComponent {
  showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }
}
