import { Injectable, inject } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  user,
  signOut,
  User,
  createUserWithEmailAndPassword,
} from '@angular/fire/auth';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private auth: Auth = inject(Auth);
  private user$ = user(this.auth);

  constructor() {}

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(this.auth, email, password).then(
        (response) => resolve(response),
        (error) => reject(error)
      );
    });
  }

  getAuth() {
    return this.auth;
  }

  getUser() {
    return this.user$;
  }

  logout() {
    return signOut(this.auth);
  }

  registrarse(email: string, password: string) {
    return new Promise((resolve, reject) => {
      createUserWithEmailAndPassword(this.auth, email, password).then(
        (response) => resolve(response),
        (error) => reject(error)
      );
    });
  }
}
