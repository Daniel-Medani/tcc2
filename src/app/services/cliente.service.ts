import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Cliente } from '../interfaces/cliente';
import { Pet } from '../interfaces/pet';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  constructor(private http: HttpClient) {}

  private apiUrl = `${environment.apiUrl}/clientes/`;

  getClientes() {
    return this.http.get<Cliente[]>(this.apiUrl);
  }

  getClientePets(_id: string) {
    return this.http.get<Pet[]>(this.apiUrl + _id + '/pets');
  }

  getCliente(_id: string) {
    return this.http.get<Cliente>(this.apiUrl + _id);
  }

  addCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl, cliente);
  }

  addPet(pet: Pet[], _id: string): Observable<Pet> {
    return this.http.post<Pet>(this.apiUrl + _id + '/pets', pet);
  }

  patchCliente(cliente: Cliente, _id: string) {
    return this.http.patch<Cliente>(this.apiUrl + _id + '/editar', cliente);
  }

  deleteCliente(_id: string) {
    return this.http.delete<Cliente>(this.apiUrl + _id);
  }
}
