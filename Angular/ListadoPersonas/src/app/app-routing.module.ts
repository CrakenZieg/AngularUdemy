import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaComponent } from './personas/persona/persona.component';
import { PersonasComponent } from './personas/personas.component';
import { AgregarComponent } from './personas/agregar/agregar.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './servicios/login-guardian.service';

const routes: Routes = [
  {path:'',component: PersonasComponent,canActivate:[LoginGuard]},
  {path:'personas',component: PersonasComponent, canActivate:[LoginGuard], children:[
    {path:'agregar',component: AgregarComponent},
    {path:':id',component: AgregarComponent}
  ]},
  {path:'login',component: LoginComponent},
  {path:'**',component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
