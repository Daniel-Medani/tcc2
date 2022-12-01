import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Pet } from 'src/app/interfaces/pet';
import { ClienteService } from 'src/app/services/cliente.service';
import { PetService } from 'src/app/services/pet.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pets-cliente',
  templateUrl: './pets-cliente.component.html',
  styleUrls: ['./pets-cliente.component.scss'],
})
export class PetsClienteComponent implements OnInit {
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) this.getClientePets(id);
    if (id) this.getCliente(id);
  }

  constructor(
    private clienteService: ClienteService,
    private petService: PetService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  pet!: Pet;
  dono: any;
  dataSource!: MatTableDataSource<Pet>;

  displayedColumns: string[] = ['nome', 'sexo', 'idade', 'raca', 'acoes'];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  goBack() {
    this.location.back();
  }

  getCliente(_id: string): void {
    this.clienteService.getCliente(_id).subscribe((cliente) => {
      this.dono = cliente.nome;
    });
  }

  getClientePets(_id: string): void {
    this.clienteService.getClientePets(_id).subscribe({
      next: (cliente) => {
        this.dataSource = new MatTableDataSource(cliente);
      },
    });
  }

  deletePet(_id: string): void {
    this.petService.deletePet(_id).subscribe({
      next: () => {
        alert('Pet removido com sucesso!');
        window.location.reload();
      },
    });
  }
}
