import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Login } from '../interfaces/login.interface';
import { HttpClient } from '@angular/common/http';
import { ResponseApi } from '../interfaces/response.interface';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private endpoint = "http://127.0.0.1/sistema_egresos/usuarios.php";

  private isLoggedIn = false;
  private usuario_id:number = 0;

  // Simula una llamada a un servidor para autenticar al usuario
  constructor(private http: HttpClient) {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const usuarioIdString = localStorage.getItem('usuario_id');
    this.usuario_id = parseInt(usuarioIdString!, 10);
  }

  login(correo: string, contraseña: string): Observable<Usuario | boolean> {
    const body = {
      accion: "login",
      correo: correo,
      contraseña: contraseña
    };

    return this.http.post<Usuario>(`${this.endpoint}`, body).pipe(
      map((response: Usuario) => {
        // Aquí puedes realizar operaciones basadas en la respuesta
        console.log("USUARIO ID: " + response.id);
        this.isLoggedIn = true;
        this.usuario_id = response.id;
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('usuario_id', response.id.toString());

        return response;
      }),
      catchError((error: any) => {
        if (error.status === 401) {
          this.isLoggedIn = false;
          localStorage.setItem('isLoggedIn', 'false');

          console.error('Error de autenticación:', error);
          return of(false);
        }
        return of(false);
      })
    );
  }

  // Verifica si el usuario está autenticado
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  getUserId(): number {
    return this.usuario_id;
  }

  // Cierra la sesión del usuario
  logout(): void {
    this.isLoggedIn = false;
  }

}
