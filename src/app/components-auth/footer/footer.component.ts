import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  sitemap = [
    { title: "Top categories", links: ["Fresh Fruits",  "Organic wine", "Organic Juice","Dairy & chesse","Fresh meat"] },
    { title: "Privacy & terms", links: ["About", "Free delevery", "Dhaka", "Contact Us"] },
    { title: "Resources", links: ["Blog", "Privacy policy", "Return policy", "Terms & conditions"] },
   
  ];
}
