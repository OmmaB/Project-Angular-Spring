import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth';

@Injectable({
  providedIn: 'root',
})
export class ProduitGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(): boolean {
    if (this.authService.isAdmin()) {
      return true;
    } else {
      this.router.navigate(['app-forbidden']);
      return false;
    }
  }
}
// import { CanActivateFn } from '@angular/router';

// export const produitGuard: CanActivateFn = (route, state) => {
//   return true;
// };
