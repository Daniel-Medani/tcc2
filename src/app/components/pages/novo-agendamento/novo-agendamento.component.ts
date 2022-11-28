import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ClienteService } from 'src/app/services/cliente.service';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/interfaces/cliente';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Pet } from 'src/app/interfaces/pet';
import { AgendamentoService } from 'src/app/services/agendamento.service';

@Component({
  selector: 'app-novo-agendamento',
  templateUrl: './novo-agendamento.component.html',
  styleUrls: ['./novo-agendamento.component.scss'],
})
export class NovoAgendamentoComponent implements OnInit {
  constructor(
    private location: Location,
    private clienteService: ClienteService,
    private fb: FormBuilder,
    private agendamentoService: AgendamentoService
  ) {}

  novoAgendamentoForm!: FormGroup;
  clientes$ = new Observable<Cliente[]>();
  pets$ = new Observable<Pet[]>();

  ngOnInit(): void {
    this.novoAgendamentoForm = this.fb.group({
      status: [''],
      data: [''],
      hora: [''],
      cliente: [''],
      pet: [''],
      servico: [''],
      transporte: [''],
      carrapatos: [false],
      pulgas: [false],
      feridas: [false],
      obs: [''],
    });
    this.getClientes();
  }

  goBack() {
    this.location.back();
  }

  getClientes() {
    this.clientes$ = this.clienteService.getClientes();
  }

  getClientePets(_id: string) {
    this.pets$ = this.clienteService.getClientePets(_id);
  }

  filtrarPets(event: any) {
    this.getClientePets(event.value);
  }

  createAgendamento() {
    this.agendamentoService
      .addAgendamento(this.novoAgendamentoForm.value)
      .subscribe({
        next: () => {
          alert('Sucesso');
        },
      });
  }

  // definirHora(event: any) {
  //   const hora = event.target.value;
  //   const data = new Date(this.novoAgendamentoForm.get('data')?.value);
  //   const horaSplitada = hora.split(':');
  //   data.setHours(horaSplitada[0]);
  //   data.setMinutes(horaSplitada[1]);
  //   this.novoAgendamentoForm.get('hora')?.setValue(data);
  // }
}
