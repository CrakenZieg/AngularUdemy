import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { User } from '@angular/fire/auth';
import { LoginService } from '../servicios/login.service';
import { ConfiguracionService } from 'src/app/servicios/configuracion.service';
import { Configuracion } from '../modelo/configuracion.model';

@Injectable({
  providedIn: 'root',
})
export class ConfigGuardianService {
  private permitido: boolean = false;

  constructor(private configuracionService: ConfiguracionService, private router: Router) {
    this.configuracionService.getConfiguracion().subscribe((configuracion:Configuracion)=>{
      this.permitido = (typeof configuracion.permitirRegistro == 'boolean')?configuracion.permitirRegistro:false;
    });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.permitido) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

export const ConfigGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
  return inject(ConfigGuardianService).canActivate(next, state);
};
