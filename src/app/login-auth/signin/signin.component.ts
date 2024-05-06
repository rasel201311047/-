import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  signUpMode = false;

  toggleMode(): void {
    this.signUpMode = !this.signUpMode;
  }

  signIn(): void {
    console.log('Sign-in logic here');
  }

  signUp(): void {
    console.log('Sign-up logic here');
  }
}
