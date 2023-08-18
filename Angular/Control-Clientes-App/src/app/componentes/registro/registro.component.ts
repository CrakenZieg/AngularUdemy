import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  email: string;
  password: string;

  constructor(private router: Router, private loginService: LoginService) {
    /* this.loginService.getUser().subscribe((user: User | null) => {
      if (user === null) {
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['/login']);
      }
    }); */
  }

  ngOnInit() {}

  registro() {
    this.loginService
      .registrarse(this.email, this.password)
      .then((res) => {
        this.router.navigate(['/']);
      })
      .catch((error) => confirm('Ocurrió un error'+error));
  }
}
