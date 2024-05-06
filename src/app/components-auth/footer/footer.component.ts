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
  currentYear = new Date().getFullYear();

  sitemap = [
    { title: "Company", links: ["About Us", "Careers", "Our Team", "Projects"] },
    { title: "Help Center", links: ["Discord", "Twitter", "GitHub", "Contact Us"] },
    { title: "Resources", links: ["Blog", "Newsletter", "Free Products", "Affiliate Program"] },
    { title: "Products", links: ["Templates", "UI Kits", "Icons", "Mockups"] }
  ];
}
