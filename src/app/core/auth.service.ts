import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of, switchMap, throwError } from 'rxjs';
import { environment } from 'src/environments/environments';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _authenticated: boolean = false;
  private apiUrl = `${environment.apiUrl}/login`;
  constructor(private _httpClient: HttpClient, private router: Router) {}

  set accessToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  get accessToken(): string {
    return localStorage.getItem('accessToken') ?? '';
  }

  get isAuthenticated(): boolean {
    return this._authenticated;
  }

  check(): Observable<boolean> {
    if (this._authenticated) {
      return of(true);
    }

    if (!this.accessToken) {
      return of(false);
    }

    this._authenticated = true;
    return of(true);
  }

  login(credentials: { email: string; senha: string }): Observable<any> {
    if (this._authenticated) {
      return throwError('Já está logado');
    }

    return this._httpClient.post(this.apiUrl, credentials).pipe(
      switchMap((response: any) => {
        this.accessToken = response.token;

        this._authenticated = true;

        return of(response);
      })
    );
  }

  logout() {
    this.accessToken = '';
    this._authenticated = false;
    this.router.navigate(['login']);
  }
}
