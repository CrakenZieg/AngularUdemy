import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { EditarClienteComponent } from './componentes/editarCliente/editarCliente.component';
import { NoEncontradoComponent } from './componentes/noEncontrado/noEncontrado.component';
import { LoginGuardianService } from './guardianes/auth.guard';
import { ConfigGuardianService } from './guardianes/config.guard';

const routes: Routes = [
  {path:'',component:TableroComponent,canActivate:[LoginGuardianService]},
  {path:'login',component:LoginComponent},
  {path:'registrarse',component:RegistroComponent, canActivate:[ConfigGuardianService]},
  {path:'configuracion',component:ConfiguracionComponent,canActivate:[LoginGuardianService]},
  {path:'cliente/editar/:id',component:EditarClienteComponent,canActivate:[LoginGuardianService]},
  {path:'*',component:NoEncontradoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
