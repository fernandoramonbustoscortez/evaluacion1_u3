import { Component, Input } from '@angular/core';
import { Egreso } from 'src/app/interfaces/egreso.interface';

@Component({
  selector: 'app-egresos-usuario',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent {

  @Input()
  public egresos!: Egreso[];

  isFormVisible: boolean = false; // Variable para mostrar/ocultar el formulario

  openModdal() {
    this.isFormVisible = true;
  }

  closeForm() {
    // Cierra el formulario
    this.isFormVisible = false;
  }



}
