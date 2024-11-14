import { Component } from '@angular/core';
import { AuthService, User } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  user: User = { username: '', email: '', password: '' };

  constructor(private authService: AuthService) {}

  onRegister() {
    this.authService.register(this.user).subscribe(
      response => {
        console.log('Registration successful:', response);
        // Redirect to login page or handle success
      },
      error => {
        console.error('Registration failed:', error);
        // Handle registration failure (e.g., show an error message)
      }
    );
  }
}
