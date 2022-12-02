import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Agendamento } from 'src/app/interfaces/agendamento';
import { Pet } from 'src/app/interfaces/pet';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-editar-agendamento',
  templateUrl: './editar-agendamento.component.html',
  styleUrls: ['./editar-agendamento.component.scss'],
})
export class EditarAgendamentoComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private agendaService: AgendamentoService,
    private clienteService: ClienteService,
    private location: Location
  ) {}

  agendamento!: Agendamento;
  pets$!: Observable<Pet[]>;
  id!: any;

  editAgendamentoForm!: FormGroup;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getAgendamento();
  }

  getClientePets() {
    this.pets$ = this.clienteService.getClientePets(
      this.agendamento.cliente._id
    );
  }

  getAgendamento() {
    this.agendaService.getAgendamentoById(this.id).subscribe((agendamento) => {
      this.agendamento = agendamento;
      this.editAgendamentoForm = this.fb.group({
        status: [this.agendamento.status, Validators.required],
        data: [this.agendamento.data, Validators.required],
        cliente: [this.agendamento.cliente._id, Validators.required],
        pet: [this.agendamento.pet._id, Validators.required],
        servico: [this.agendamento.servico, Validators.required],
        transporte: [this.agendamento.transporte, Validators.required],
        carrapatos: [this.agendamento.carrapatos],
        pulgas: [this.agendamento.pulgas],
        feridas: [this.agendamento.feridas],
        obs: [this.agendamento.obs],
      });
      console.log(agendamento);
      console.log({ form: this.editAgendamentoForm.value });
      this.getClientePets();
    });
  }

  updateAgendamento() {
    const { valid, value } = this.editAgendamentoForm;
    console.log(value);
    if (valid) {
      this.agendaService.patchAgendamento(value, this.id).subscribe({
        next: () => {
          alert('Cliente atualizado com sucesso!');
          this.goBack();
        },
      });
    }
  }

  goBack(): void {
    this.location.back();
  }
}
