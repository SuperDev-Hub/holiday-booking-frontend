import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  user: User = { email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.user).subscribe(
      response => {
        console.log('Login successful:', response);
        // Show a popup or toast notification
        alert('Login successful!'); // Simple popup for now
        // Redirect to home page after success
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Login failed:', error);
        // Handle login failure (e.g., show an error message)
        alert('Login failed. Please try again.');
      }
    );
  }
}

