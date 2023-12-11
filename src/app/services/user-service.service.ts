import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private endpoint = "http://127.0.0.1/sistema_egresos/usuarios.php";
  constructor(private http: HttpClient) { }

  getUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.endpoint);
  }

  addUser(newUser: Usuario): Observable<any> {
    // Aquí asumimos que el servidor espera recibir datos en formato JSON.
    // Si el servidor espera datos codificados en formulario, ajusta el encabezado y el cuerpo en consecuencia.
    const headers = { 'content-type': 'application/json' };
    newUser.accion = "crear";
    const body = JSON.stringify(newUser);

    return this.http.post<any>(this.endpoint, body, { headers });
  }


}
