import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Agendamento } from 'src/app/interfaces/agendamento';
import { AgendamentoService } from 'src/app/services/agendamento.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
})
export class AgendaComponent implements OnInit {
  ngOnInit(): void {
    this.data = `${new Date().getFullYear()}/${
      new Date().getMonth() + 1
    }/${new Date().getDate()}`;
    this.getAgendamento(this.data);
  }
  // this.getAgenda(this.data);

  constructor(private agendaService: AgendamentoService) {}

  displayedColumns: string[] = [
    'data',
    'raca',
    'pet',
    'cliente',
    'telefone',
    'acoes',
  ];
  dataSource!: MatTableDataSource<Agendamento>;
  data!: string;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getData(data: Date) {
    console.log(data);
  }

  getAgendamento(data: string): void {
    this.agendaService.getAgendamentoByDate(data).subscribe({
      next: (agendamento) => {
        this.dataSource = new MatTableDataSource(agendamento);
      },
    });
  }

  deleteAgendamento() {
    console.log('delete');
  }
}
