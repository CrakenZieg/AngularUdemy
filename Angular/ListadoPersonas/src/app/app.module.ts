import { LoggingInterface } from './servicios/LoggingInterface';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PersonaComponent } from './personas/persona/persona.component';
import { AgregarComponent } from './personas/agregar/agregar.component';
import { LoggingServiceService } from './servicios/LoggingService.service';
import { PersonasService } from './servicios/personas.service';
import { PersonasComponent } from './personas/personas.component';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { LoginComponent } from './login/login.component';
import { LoginService } from './servicios/login.service';
import { AngularFireModule } from '@angular/fire/compat';
import { LoginGuardianService } from './servicios/login-guardian.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    AgregarComponent,
    PersonasComponent,
      ErrorComponent,
      LoginComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase())
  ],
  providers: [{ provide:LoggingInterface, useClass:LoggingServiceService}, PersonasService, LoginService, LoginGuardianService],
  bootstrap: [AppComponent]
})
export class AppModule { }
