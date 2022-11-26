import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ClienteService } from 'src/app/services/cliente.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-novo-pet',
  templateUrl: './novo-pet.component.html',
  styleUrls: ['./novo-pet.component.scss'],
})
export class NovoPetComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  novoPetForm!: FormGroup;
  id!: any;

  ngOnInit(): void {
    this.novoPetForm = this.fb.group({
      nome: ['', Validators.required],
      sexo: [''],
      idade: [''],
      raca: [''],
    });
    this.id = this.route.snapshot.paramMap.get('id');
  }

  goBack(): void {
    this.location.back();
  }

  addPet() {
    if (this.novoPetForm.valid) {
      this.clienteService
        .addPet(this.novoPetForm.value, this.id)
        .subscribe(() => {
          this.goBack();
        });
    }
  }
}
