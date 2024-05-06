import { Component } from '@angular/core';
import { NavberComponent } from '../../components-auth/navber/navber.component';
import { CardItemsComponent } from '../../components-auth/card-items/card-items.component';
import { FooterComponent } from '../../components-auth/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavberComponent,CardItemsComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
