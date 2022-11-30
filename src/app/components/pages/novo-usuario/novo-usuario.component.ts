import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.scss'],
})
export class NovoUsuarioComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private location: Location,
    private usuarioService: UsuarioService
  ) {}

  novoUsuarioForm!: FormGroup;

  ngOnInit(): void {
    this.novoUsuarioForm = this.fb.group({
      nomeUsuario: ['', Validators.required],
      senha: ['', Validators.required],
      email: ['', Validators.required],
      funcao: ['', Validators.required],
    });
  }

  goBack(): void {
    this.location.back();
  }

  createUsuario() {
    if (this.novoUsuarioForm.valid) {
      this.usuarioService
        .createUsuario(this.novoUsuarioForm.value)
        .subscribe(() => {
          this.goBack();
        });
    }
  }
}
