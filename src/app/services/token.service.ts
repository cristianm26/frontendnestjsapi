import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {



  constructor() { }

  isLogged(): boolean {
    if (this.getToken()) {
      return true;
    }
    return false;
  }

  setToken(token: string): void {
    localStorage.setItem('token', token)
  }

  getToken() {
    return localStorage.getItem('token');
  }


  getNombreUsuario() {
    if (!this.isLogged()) {
      return null;
    }
    const token = this.getToken();
    const payload = token!.split('.')[1];
    const values = atob(payload);
    const valuesJson = JSON.parse(values);
    const nombreUsuario = valuesJson.nombreUsuario;
    return nombreUsuario;
  }

  // Conocer si el usuario es admin
  isAdmin() {
    if (!this.isLogged()) {
      return null;
    }
    const token = this.getToken();
    const payload = token!.split('.')[1];
    const values = atob(payload);
    const valuesJson = JSON.parse(values);
    const roles = valuesJson.roles;
    console.log(roles);
    if (roles.indexOf('admin') < 0) {
      return false;
    }
    return true;
  }

  logOut(): void {
    localStorage.clear();
  }
}
