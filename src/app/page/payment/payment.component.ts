import { Component } from '@angular/core';
import { NavigationberComponent } from '../../components-auth/navigationber/navigationber.component';
import { FooterComponent } from '../../components-auth/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [NavigationberComponent,FooterComponent,RouterLink],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

}
