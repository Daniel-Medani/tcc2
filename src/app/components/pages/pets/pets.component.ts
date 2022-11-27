import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Pet } from 'src/app/interfaces/pet';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss'],
})
export class PetsComponent implements OnInit {
  constructor(private petService: PetService) {}

  displayedColumns: string[] = [
    'dono',
    'nome',
    'sexo',
    'idade',
    'raca',
    'acoes',
  ];
  dataSource!: MatTableDataSource<Pet>;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.getPets();
  }

  getPets(): void {
    this.petService.getPets().subscribe({
      next: (pet) => {
        this.dataSource = new MatTableDataSource(pet);
      },
    });
  }
}
