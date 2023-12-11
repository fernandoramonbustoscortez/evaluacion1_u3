import { Injectable } from '@angular/core';
import { Egreso } from '../interfaces/egreso.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class EgresoService {
  private endpoint = "http://127.0.0.1/sistema_egresos/egresos.php";

  constructor(private http: HttpClient, private loginService: LoginService) { }

  create(newEgreso: Egreso): Observable<any> {
    // Aquí asumimos que el servidor espera recibir datos en formato JSON.
    // Si el servidor espera datos codificados en formulario, ajusta el encabezado y el cuerpo en consecuencia.
    const headers = { 'content-type': 'application/json' };
    newEgreso.usuario_id = this.loginService.getUserId();
    const body = JSON.stringify(newEgreso);

    return this.http.post<any>(this.endpoint, body, { headers });
  }

  getEgresos(): Observable<Egreso[]> {
    return this.http.get<Egreso[]>(this.endpoint);
  }

}
