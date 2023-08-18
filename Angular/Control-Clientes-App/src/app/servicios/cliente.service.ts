import { Injectable, inject } from '@angular/core';
import { CollectionReference, DocumentData, deleteDoc, Firestore, collection, addDoc, collectionData, DocumentReference, doc, getDocFromServer, updateDoc } from '@angular/fire/firestore';
import { Cliente } from '../modelo/cliente.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  //inyectamos el Cloud Firestore
  private firestore:Firestore=inject(Firestore);
  private clientesColeccion:CollectionReference<DocumentData>;
  private clienteDoc:DocumentReference<DocumentData>;
  private clientes: Observable<Cliente[]>;
  private cliente:Cliente;

  constructor() {
    //recuperamos una referencia a la coleccion de clientes
    this.clientesColeccion = collection(this.firestore,'clientes'); //'clientes es el nombre de la coleccion en firestore'

  }

  getClientes():Observable<Cliente[]>{
    //recuperamos los documentos de la coleccion
    this.clientes = collectionData(this.clientesColeccion, { idField: 'id'}) as Observable<Cliente[]>;
    return this.clientes;
  }

  agregarCliente(cliente:Cliente){
    addDoc(this.clientesColeccion, <Cliente> cliente).then(()=> {});
  }

  editarCliente(cliente:Cliente,id:string){
    this.clienteDoc = doc(this.firestore,`clientes/${id}`);
    updateDoc(this.clienteDoc, {...cliente}).then(()=> {});
  }

  eliminarCliente(id:string){
    this.clienteDoc = doc(this.firestore,`clientes/${id}`);
    deleteDoc(this.clienteDoc).then(()=> {});
  }

  getCliente(id:string){
    this.clienteDoc = doc(this.firestore,`clientes/${id}`);
    return getDocFromServer(this.clienteDoc);
  }
}

