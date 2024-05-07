import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';


@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  center: google.maps.LatLngLiteral = {lat: 37.4221, lng: -122.0841};
  zoom = 15;
}
