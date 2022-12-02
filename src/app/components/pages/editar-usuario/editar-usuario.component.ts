import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss'],
})
export class EditarUsuarioComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private fb: FormBuilder,
    private location: Location
  ) {}

  editUsuarioForm!: FormGroup;
  usuario!: Usuario;
  id!: any;

  // editUsuarioForm = this.fb.group({
  //   nomeUsuario: ['', Validators.required],
  //   senha: ['', Validators.required],
  //   email: ['', Validators.required],
  //   funcao: ['', Validators.required],
  // });

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getUsuario();
  }

  goBack(): void {
    this.location.back();
  }

  getUsuario() {
    this.usuarioService.getUsuario(this.id).subscribe((usuario) => {
      this.usuario = usuario;
      this.editUsuarioForm = this.fb.group({
        nomeUsuario: [this.usuario.nomeUsuario, Validators.required],
        senha: [this.usuario.senha, Validators.required],
        email: [this.usuario.email, Validators.required],
        funcao: [this.usuario.funcao, Validators.required],
      });
    });
  }

  updateUsuario() {
    const { valid, value } = this.editUsuarioForm;
    if (valid) {
      this.usuarioService.patchUsuario(value, this.id).subscribe({
        next: () => {
          alert('Usuario atualizado com sucesso!');
          this.goBack();
        },
      });
    }
  }

  // updateUsuario(): void {
  //   const { valid, value } = this.editUsuarioForm;

  //   if (valid) {
  //     const usuario: Usuario = {
  //       nomeUsuario: value.nomeUsuario!,
  //       senha: value.senha!,
  //       email: value.email!,
  //       funcao: value.funcao!,
  //     };

  //     this.usuarioService
  //       .patchUsuario(usuario, this.id)
  //       .subscribe(() => this.goBack());
  //   }
  // }
}
