
import { Injectable } from '@angular/core';
import * as firebase from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token:string|null;

  constructor(private router:Router,
              private auth:firebase.Auth) { }

  login(email:string,password:string){
    firebase.signInWithEmailAndPassword(firebase.getAuth(),email,password).then(
      response => {
        firebase.getAuth().currentUser?.getIdToken().then(
          token => {
            this.token = token;
            this.router.navigate(['/']);
          }
        );
      }
    );
  }

  getIdToken(){
    return this.token;
  }

  isAutenticado(){
    return this.token != null;
  }

  logout(){
    firebase.signOut(firebase.getAuth()).then(
      () => {
        this.token = null;
        this.router.navigate(['login']);
      }).catch(
        error => {
          console.log('Error de logout: '+error);
        });
  }

}
