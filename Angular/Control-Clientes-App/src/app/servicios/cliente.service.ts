import { Firestore } from '@angular/fire/firestore/';
import { Injectable, inject } from '@angular/core';
import { CollectionReference, DocumentReference } from '@angular/fire/firestore';
import { Cliente } from '../modelo/cliente.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private firestore:Firestore=inject(Firestore);
  clientesColeccion: CollectionReference<Cliente>;
  clienteDoc: DocumentReference<Cliente>;
  clientes: Observable<Cliente[]>;
  cliente: Observable<Cliente>;

  constructor(private ddbb: AngularFirestore) {
    this.clientesColeccion = ddbb.collection('');
  }
}
