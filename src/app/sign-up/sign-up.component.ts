import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  constructor(private router: Router) {}
  onSignin() {
    this.router.navigateByUrl('sign-in');
  }
  onSignup() {
    this.router.navigateByUrl('dashboard');
  }
}
