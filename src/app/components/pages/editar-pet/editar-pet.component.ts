import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Pet } from 'src/app/interfaces/pet';
import { PetService } from 'src/app/services/pet.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editar-pet',
  templateUrl: './editar-pet.component.html',
  styleUrls: ['./editar-pet.component.scss'],
})
export class EditarPetComponent implements OnInit {
  constructor(
    private petService: PetService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private location: Location
  ) {}
  pet!: Pet;
  id!: any;

  editPetForm = this.fb.group({
    nome: ['', Validators.required],
    sexo: ['', Validators.required],
    idade: [''],
    raca: [''],
  });

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('idPet');
    this.getPet();
  }

  goBack(): void {
    this.location.back();
  }

  getPet(): void {
    this.petService.getPet(this.id).subscribe((pet) => {
      this.pet = pet;
      this.editPetForm.controls['nome'].setValue(pet.nome);
      this.editPetForm.controls['sexo'].setValue(pet.sexo);
      this.editPetForm.controls['idade'].setValue(pet.idade);
      this.editPetForm.controls['raca'].setValue(pet.raca);
    });
  }

  updatePet(): void {
    const { valid, value } = this.editPetForm;

    if (valid) {
      const pet: Pet = {
        nome: value.nome!,
        sexo: value.sexo!,
        idade: value.idade!,
        raca: value.raca!,
      };

      this.petService.patchPet(pet, this.id).subscribe(() => this.goBack());
    }
  }
}
