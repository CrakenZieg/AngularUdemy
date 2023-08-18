import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private router: Router, private loginService: LoginService) {
    this.loginService.getUser().subscribe((user: User | null) => {
      if (user === null) {
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  ngOnInit() {}

  login() {
    this.loginService
      .login(this.email, this.password)
      .then((res) => {
        this.router.navigate(['/']);
      })
      .catch((error) => {
        confirm('Hubo un error en el login');
      });
  }
}
