import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isLoggedIn = false;

  // Simula una llamada a un servidor para autenticar al usuario
  login(username: string, password: string): Observable<boolean> {
    // Aquí puedes realizar la autenticación real con un servidor
    // Por ahora, simplemente comparamos un usuario y una contraseña de ejemplo
    if (username === 'usuario' && password === 'contraseña') {
      this.isLoggedIn = true;
      return of(true);
    } else {
      this.isLoggedIn = false;
      return of(false);
    }
  }

  // Verifica si el usuario está autenticado
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  // Cierra la sesión del usuario
  logout(): void {
    this.isLoggedIn = false;
  }

  constructor() { }
}
