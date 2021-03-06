import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { loginUsuario } from '../models/loginUsuario';
import { nuevoUsuario } from '../models/nuevoUsuario';
import { TokenDto } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  login(usuario: loginUsuario): Observable<any> {
    return this.httpClient.post<any>(`${this.authUrl}/auth / login`, usuario)
  }

  registro(usuario: nuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(`${this.authUrl} /auth/nuevo`, usuario)
  }

  refresh(dto: TokenDto): Observable<any> {
    return this.httpClient.post<any>(`${this.authUrl} /auth/refresh`, dto)
  }
}
