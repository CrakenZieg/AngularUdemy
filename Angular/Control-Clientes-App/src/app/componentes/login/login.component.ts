import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;

  constructor(private router:Router,
              private loginService:LoginService) { }

  ngOnInit() {
  }

  login(){
    this.loginService.login(this.email,this.password)
      .then(res=>{
        this.router.navigate(['/']);
      })
      .catch(error=>{
        confirm('Hubo un error en el login');
      });
  }

}