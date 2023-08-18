import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';
import { ConfiguracionService } from 'src/app/servicios/configuracion.service';
import { Configuracion } from 'src/app/modelo/configuracion.model';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css'],
})
export class CabeceroComponent implements OnInit {
  isLogged: boolean;
  loggedInUser: string | null | undefined;
  configuracion:Configuracion = {permitirRegistro:false,};

  constructor(
    private loginService: LoginService,
    private router: Router,
    private configuracionService:ConfiguracionService,
  ) {}

  ngOnInit() {
    this.loginService.getUser().subscribe((user) => {
      if (user) {
        (this.loggedInUser = user.email), (this.isLogged = user.email != null);
      } else {
        this.isLogged = false;
      }
    });
    this.configuracionService.getConfiguracion().subscribe((configuracion:Configuracion)=>{
      this.configuracion = configuracion;
    })
  }

  logout() {
    this.loginService.logout();
    this.isLogged = false;
    this.router.navigate(['/login']);
  }
}
