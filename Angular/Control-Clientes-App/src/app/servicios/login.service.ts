import { Injectable, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword, user, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private auth: Auth = inject(Auth);
  private user$ = user(this.auth);

  constructor() {

  }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(this.auth, email, password).then(
        (response) => resolve(response),
        (error) => reject(error)
      );
    });
  }

  getUser(){
    return this.user$;
  }

  logout(){
    return signOut(this.auth);
  }

}
