import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  constructor(private http: HttpClient) {}

  private apiUrl = `${environment.apiUrl}/clientes/`;

  getClientes() {
    return this.http.get<Cliente[]>(this.apiUrl);
  }

  getCliente(_id: string) {
    return this.http.get<Cliente>(this.apiUrl + _id);
  }

  addCliente(cliente: Cliente[]): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl, cliente);
  }

  putCliente(cliente: Cliente, _id: string) {
    return this.http.put<Cliente>(this.apiUrl + _id, cliente);
  }

  deleteCliente(_id: string) {
    return this.http.delete<Cliente>(this.apiUrl + _id);
  }
}
