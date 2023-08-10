import { Component, OnInit } from '@angular/core';
import * as firebase from '@angular/fire/app';
import * as firebaseAuth from '@angular/fire/auth';
import { LoginService } from './servicios/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Listado de personas';

  constructor(private loginService:LoginService) {}

  ngOnInit(): void {
  }

  isAutenticado(){
    return this.loginService.isAutenticado();
  }

  salir(){
    this.loginService.logout();
  }
}
