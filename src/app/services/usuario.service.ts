import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private apiUrl = `${environment.apiUrl}/usuarios`;

  constructor(private http: HttpClient) {}

  createUsuario(usuario: Usuario) {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }

  getUsuarios() {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  getUsuario(_id: string) {
    return this.http.get<Usuario>(`${this.apiUrl}/${_id}`);
  }

  patchUsuario(usuario: Usuario, _id: string) {
    return this.http.patch<Usuario>(`${this.apiUrl}/${_id}/editar`, usuario);
  }

  deleteUsuario(_id: string) {
    return this.http.delete<Usuario>(`${this.apiUrl}/${_id}`);
  }
}
