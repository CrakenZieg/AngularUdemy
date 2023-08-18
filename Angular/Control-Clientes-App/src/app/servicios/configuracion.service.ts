import { Injectable, inject } from '@angular/core';
import {
  DocumentData,
  DocumentReference,
  Firestore,
  doc,
  docData,
  updateDoc,
} from '@angular/fire/firestore';
import { Configuracion } from '../modelo/configuracion.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfiguracionService {

  private firestore: Firestore = inject(Firestore);
  private configuracionDoc: DocumentReference<DocumentData>;
  private configuracion: Observable<Configuracion>;

  private id: '1';

  constructor() {
    this.configuracionDoc = doc(this.firestore,`configuracion/1`);
    console.log(this.configuracionDoc);
  }

  getConfiguracion():Observable<Configuracion>{
    this.configuracion = docData<Configuracion>(this.configuracionDoc);
    return this.configuracion;
  }


  modificarConfiguracion(configuracion:Configuracion){
    updateDoc(this.configuracionDoc, {...configuracion}).then(()=> {});
  }

}
