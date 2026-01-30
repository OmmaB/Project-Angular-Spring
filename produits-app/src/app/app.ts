import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit() {
    let loggedUser = localStorage.getItem('loggedUser');
    let isloggedIn = localStorage.getItem('isloggedIn');

    if (isloggedIn === 'true' && loggedUser) {
      this.authService.setLoggedUserFromLocalStorage(loggedUser);
    }
  }
}
