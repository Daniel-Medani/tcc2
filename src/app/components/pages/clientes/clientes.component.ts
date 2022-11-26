import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent implements OnInit {
  ngOnInit(): void {
    this.getClientes();
  }

  constructor(private clienteService: ClienteService) {}

  displayedColumns: string[] = ['nome', 'cpf', 'endereco', 'telefone', 'acoes'];
  dataSource!: MatTableDataSource<Cliente>;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getClientes(): void {
    this.clienteService.getClientes().subscribe({
      next: (cliente) => {
        this.dataSource = new MatTableDataSource(cliente);
      },
    });
  }

  deleteCliente(_id: string) {
    this.clienteService.deleteCliente(_id).subscribe({
      next: () => {
        this.getClientes();
      },
    });
  }
}
