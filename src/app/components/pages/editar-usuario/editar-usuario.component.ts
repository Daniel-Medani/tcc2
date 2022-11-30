import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  usuario!: Usuario;
  id!: any;

  editUsuarioForm = this.fb.group({
    nomeUsuario: ['', Validators.required],
    senha: ['', Validators.required],
    email: ['', Validators.required],
    funcao: ['', Validators.required],
  });

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getUsuario();
  }

  goBack(): void {
    this.location.back();
  }
  getUsuario(): void {
    if (this.id !== 'new')
      this.usuarioService.getUsuario(this.id).subscribe((usuario) => {
        this.usuario = usuario;
        this.editUsuarioForm.controls['nomeUsuario'].setValue(
          usuario.nomeUsuario
        );
        this.editUsuarioForm.controls['email'].setValue(usuario.email);
        this.editUsuarioForm.controls['funcao'].setValue(usuario.funcao);
      });
  }

  updateUsuario(): void {
    const { valid, value } = this.editUsuarioForm;

    if (valid) {
      const usuario: Usuario = {
        nomeUsuario: value.nomeUsuario!,
        senha: value.senha!,
        email: value.email!,
        funcao: value.funcao!,
      };

      this.usuarioService
        .patchUsuario(usuario, this.id)
        .subscribe(() => this.goBack());
    }
  }
}
