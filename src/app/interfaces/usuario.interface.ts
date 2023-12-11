import { Egreso } from "./egreso.interface";

export interface Usuario{
  accion?: string,
  id: number,
  nombres: string,
  correo: string,
  contrasena: string,
  egresos?: Egreso[]
}
