import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: User[] = [
    { username: 'admin', password: '123', roles: ['ADMIN'] },
    { username: 'user1', password: '123', roles: ['USER'] },
  ];

  loggedUser!: string;
  isloggedIn = false;
  roles!: string[];

  constructor(private router: Router) {}

  SignIn(user: User): boolean {
    let validUser = false;

    this.users.forEach((curUser) => {
      if (user.username === curUser.username && user.password === curUser.password) {
        validUser = true;
        this.loggedUser = curUser.username;
        this.roles = curUser.roles;
        this.isloggedIn = true;

        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('isloggedIn', 'true');
      }
    });

    return validUser;
  }

  logout() {
    this.isloggedIn = false;
    this.loggedUser = '';
    this.roles = [];
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  isAdmin(): boolean {
    return this.roles?.includes('ADMIN');
  }

  setLoggedUserFromLocalStorage(username: string) {
    this.loggedUser = username;
    this.isloggedIn = true;
    this.users.forEach((u) => {
      if (u.username === username) {
        this.roles = u.roles;
      }
    });
  }
}
