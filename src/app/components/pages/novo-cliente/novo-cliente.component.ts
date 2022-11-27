import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-novo-cliente',
  templateUrl: './novo-cliente.component.html',
  styleUrls: ['./novo-cliente.component.scss'],
})
export class NovoClienteComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private location: Location,
    private clienteService: ClienteService
  ) {}

  novoClienteForm!: FormGroup;

  ngOnInit(): void {
    this.novoClienteForm = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      endereco: ['', Validators.required],
      telefone: ['', Validators.required],
    });
  }

  goBack(): void {
    this.location.back();
  }

  addCliente() {
    if (this.novoClienteForm.valid) {
      this.clienteService
        .addCliente(this.novoClienteForm.value)
        .subscribe(() => {
          this.goBack();
        });
    }
  }
}
