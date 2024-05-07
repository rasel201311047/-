import { Routes } from '@angular/router';
import { SigninComponent } from './login-auth/signin/signin.component';
import { SingleItemviewComponent } from './page/single-itemview/single-itemview.component';
import { AboutComponent } from './page/about/about.component';
import { PaymentComponent } from './page/payment/payment.component';
import { ContactusComponent } from './page/contactus/contactus.component';
import { HomeComponent } from './page/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component:HomeComponent
    },
    {
        path: 'signin',
        component:SigninComponent
    },
    {
        path:'item',
        component:SingleItemviewComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'payment',
        component:PaymentComponent
    },
    {
        path:'contract',
        component:ContactusComponent
    }
];
