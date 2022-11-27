import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/interfaces/cliente';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.scss'],
})
export class EditarClienteComponent implements OnInit {
  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private location: Location
  ) {}
  cliente!: Cliente;
  id!: any;

  editClienteForm = this.fb.group({
    nome: ['', Validators.required],
    cpf: ['', Validators.required],
    endereco: ['', Validators.required],
    telefone: ['', Validators.required],
  });

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getCliente();
  }

  goBack(): void {
    this.location.back();
  }

  getCliente(): void {
    if (this.id !== 'new') {
      this.clienteService.getCliente(this.id).subscribe((cliente) => {
        this.cliente = cliente;
        this.editClienteForm.controls['nome'].setValue(cliente.nome);
        this.editClienteForm.controls['cpf'].setValue(cliente.cpf);
        this.editClienteForm.controls['endereco'].setValue(cliente.endereco);
        this.editClienteForm.controls['telefone'].setValue(cliente.telefone);
      });
    }
  }

  updateCliente(): void {
    const { valid, value } = this.editClienteForm;

    if (valid) {
      const cliente: Cliente = {
        nome: value.nome!,
        cpf: value.cpf!,
        endereco: value.endereco!,
        telefone: value.telefone!,
      };

      this.clienteService
        .patchCliente(cliente, this.id)
        .subscribe(() => this.goBack());
    }
  }
}
