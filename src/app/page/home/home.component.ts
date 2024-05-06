import { Component } from '@angular/core';
import { CardItemsComponent } from '../../components-auth/card-items/card-items.component';
import { FooterComponent } from '../../components-auth/footer/footer.component';
import { NavigationberComponent } from '../../components-auth/navigationber/navigationber.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavigationberComponent,CardItemsComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
