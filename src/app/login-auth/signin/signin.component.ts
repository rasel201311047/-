import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../../components-auth/footer/footer.component';
import { NavigationberComponent } from '../../components-auth/navigationber/navigationber.component';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule,FooterComponent,NavigationberComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  isSignUpMode = false;  
  isSignUpMode2 = false; 
  toggleSignUpMode() {
    this.isSignUpMode = true;
    this.isSignUpMode2 = false; 
  }

  toggleSignInMode() {
    this.isSignUpMode = false;
  }

  toggleSignUpMode2() {
    this.isSignUpMode2 = true;
    this.isSignUpMode = false; 
  }

  toggleSignInMode2() {
    this.isSignUpMode2 = false;
  }
}
