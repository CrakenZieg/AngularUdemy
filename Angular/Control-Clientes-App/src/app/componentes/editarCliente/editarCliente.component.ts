import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/modelo/cliente.model';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-editarCliente',
  templateUrl: './editarCliente.component.html',
  styleUrls: ['./editarCliente.component.css'],
})
export class EditarClienteComponent implements OnInit {
  cliente: Cliente = {
    id:'',
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0,
  };

  id: string;

  constructor(
    private clientesServicio: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.clientesServicio.getCliente(this.id).then(value=> this.cliente = <Cliente> value.data());
  }

  guardar(clienteForm: NgForm) {
    if (clienteForm.valid) {
      this.clientesServicio.editarCliente(this.cliente, this.id);
    }
    this.router.navigate(['/']);
  }

  eliminar(){
    if(confirm('¿Seguro que desea eliminar el cliente?')){
      this.clientesServicio.eliminarCliente(this.id);
    }
    this.router.navigate(['/']);
  }
}
