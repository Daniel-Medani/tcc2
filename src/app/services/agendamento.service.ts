import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Agendamento } from '../interfaces/agendamento';

@Injectable({
  providedIn: 'root',
})
export class AgendamentoService {
  private apiUrl = `${environment.apiUrl}/agendamentos`;

  constructor(private http: HttpClient) {}

  addAgendamento(agendamento: Agendamento) {
    return this.http.post<Agendamento>(`${this.apiUrl}/novo`, agendamento);
  }

  getAgendamento(data: string) {
    return this.http.post<Agendamento[]>(`${this.apiUrl}`, { data });
  }

  deleteAgendamento(_id: string) {
    return this.http.delete<Agendamento>(`${this.apiUrl}/${_id}`);
  }
}
