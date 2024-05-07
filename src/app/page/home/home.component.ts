import { Component } from '@angular/core';
import { CardItemsComponent } from '../../components-auth/card-items/card-items.component';
import { FooterComponent } from '../../components-auth/footer/footer.component';
import { NavigationberComponent } from '../../components-auth/navigationber/navigationber.component';
import { BannerComponent } from '../../components-auth/banner/banner.component';
import { SigninComponent } from '../../login-auth/signin/signin.component';
import { SingleItemviewComponent } from '../single-itemview/single-itemview.component';
import { PaymentComponent } from '../payment/payment.component';
import { MoreproductsComponent } from '../moreproducts/moreproducts.component';
import { CommonModule } from '@angular/common';
import { CatagoryComponent } from '../../components-auth/catagory/catagory.component';
import { OurserviceComponent } from '../../components-auth/ourservice/ourservice.component';
import { AboutComponent } from '../about/about.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { TrendingproductComponent } from '../../components-auth/trendingproduct/trendingproduct.component';
import { OfferComponent } from '../../components-auth/offer/offer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavigationberComponent,
    CardItemsComponent,
    FooterComponent,
    SigninComponent,
    SingleItemviewComponent,
    PaymentComponent,
    MoreproductsComponent,
    BannerComponent,
    CommonModule,
    CatagoryComponent,
    OurserviceComponent,
    AboutComponent,
    ContactusComponent,
    TrendingproductComponent,
    OfferComponent
  
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
