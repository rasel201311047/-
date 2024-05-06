import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  carouselItems = [
    { imgSrc: '../../../assets/images/banner/ban2.png', offer: 'রামাদান অফার' },
    { imgSrc: '../../../assets/images/banner/bn1.png', offer: 'রামাদান অফার' },
    { imgSrc: '../../../assets/images/banner/bn3.png', offer: 'রামাদান অফার' }
  ];
  activeSlideIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.activeSlideIndex = (this.activeSlideIndex + 1) % this.carouselItems.length;
    }, 6000);
  }

  goToShop() {
    // Implement navigation logic
  }

}
