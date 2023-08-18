import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Auth, User, getAuth } from '@angular/fire/auth';
import { LoginService } from '../servicios/login.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuardianService {
  private logged: boolean;

  constructor(private loginService: LoginService, private router: Router) {
    this.loginService.getUser().subscribe((user: User | null) => {
      if (user === null) {
        this.logged = false;
      } else {
        this.logged = true;
      }
    });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.logged) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

export const LoginGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
  return inject(LoginGuardianService).canActivate(next, state);
};
