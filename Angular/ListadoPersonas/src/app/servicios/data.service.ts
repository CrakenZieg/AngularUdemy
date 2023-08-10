import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../modelo/persona.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private urlDDBB:string = 'https://listado-personas-3c913-default-rtdb.firebaseio.com/datos';

constructor(private httpClient:HttpClient,
            private loginService:LoginService) { }

  guardarPersonas(personas:Persona[]){
    this.httpClient.put(this.getURL(""),personas)
    .subscribe(response => {console.log(response);});
  }
	cargarPersonas(){
    return this.httpClient.get<Persona[]>(this.getURL(""));
  }

  modificarPersona(indice:number, persona:Persona){
    let url:string;
    url = this.getURL(`/${indice}`);
    this.httpClient.put(url,persona)
      .subscribe(
        response=>{console.log(response)}
    );
  }

  eliminarPersona(indice:number){
    let url:string;
    url = this.getURL(`/${indice}`);
    this.httpClient.delete(url)
      .subscribe(
        response=>{console.log(response)}
    );
  }

  getURL(path:string){
    const token = this.loginService.getIdToken();
    if(token!=null){
      return `${this.urlDDBB}${path}.json?auth=${token}`;
    } else {
      return `${this.urlDDBB}${path}.json`;
    }
  }

}
