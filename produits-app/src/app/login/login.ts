import { Component } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../services/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
})
export class LoginComponent {
  user = new User();
  erreur = 0;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  onLoggedin() {
    let isValidUser = this.authService.SignIn(this.user);
    if (isValidUser) {
      this.router.navigate(['/produits']);
    } else {
      this.erreur = 1;
    }
  }
}
