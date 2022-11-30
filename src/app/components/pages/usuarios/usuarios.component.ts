import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit {
  ngOnInit(): void {
    this.getUsuarios();
  }

  constructor(private usuarioService: UsuarioService) {}

  displayedColumns: string[] = ['nomeUsuario', 'email', 'funcao', 'acoes'];
  dataSource!: MatTableDataSource<Usuario>;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe({
      next: (usuario) => {
        this.dataSource = new MatTableDataSource(usuario);
      },
    });
  }

  deleteUsuario(_id: string) {
    this.usuarioService.deleteUsuario(_id).subscribe({
      next: () => {
        window.location.reload();
      },
    });
  }
}
