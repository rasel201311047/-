import { Component } from '@angular/core';
import { CardItemsComponent } from '../../components-auth/card-items/card-items.component';
import { FooterComponent } from '../../components-auth/footer/footer.component';
import { NavigationberComponent } from '../../components-auth/navigationber/navigationber.component';
import { BannerComponent } from '../../components-auth/banner/banner.component';
import { SigninComponent } from '../../login-auth/signin/signin.component';
import { SingleItemviewComponent } from '../single-itemview/single-itemview.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavigationberComponent,
    CardItemsComponent,
    FooterComponent,
    SigninComponent,
    SingleItemviewComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
