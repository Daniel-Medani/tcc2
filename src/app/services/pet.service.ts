import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Pet } from '../interfaces/pet';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  private apiUrl = `${environment.apiUrl}/pets/`;

  constructor(private http: HttpClient) {}

  getPets() {
    return this.http.get<Pet[]>(this.apiUrl);
  }

  deletePet(_id: string) {
    return this.http.delete<Pet>(`${this.apiUrl}/${_id}`);
  }
}
