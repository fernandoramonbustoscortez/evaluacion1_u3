import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Egreso } from 'src/app/interfaces/egreso.interface';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { EgresoService } from 'src/app/services/egreso-service.service';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-egresos-page',
  templateUrl: './egresos-page.component.html',
  styleUrls: ['./egresos-page.component.css']
})
export class EgresosPageComponent {
  public egresos: Egreso[] = []; // La lista de usuarios

  formData: any = {}; // Objeto para almacenar los datos del formulario
  formTitle: string = ''; // Título del formulario
  submitBtnLabel: string = ''; // Etiqueta del botón de envío
  isFormVisible: boolean = false; // Variable para mostrar/ocultar el formulario

  constructor(private modalService: NgbModal, private egresoService: EgresoService) { }

  ngOnInit(): void {
    // Llama al servicio para obtener la lista de usuarios al inicializar el componente
    this.loadEgresos();
  }

  loadEgresos() {
    // Llama al servicio para cargar la lista de usuarios
    this.egresoService.getEgresos().subscribe(
      (data: Egreso[]) => {
        this.egresos = data;
        console.log('Egresos cargados:', this.egresos);
      },
      (error) => {
        console.error('Error al cargar usuarios:', error);
      }
    );

    console.log(this.egresos);
  }

  openCreateForm() {
    // Abre el formulario de creación
    this.formData = {}; // Reinicia el objeto del formulario
    this.formTitle = 'Generar Egreso';
    this.submitBtnLabel = 'Agregar';
    this.isFormVisible = true;
  }


  closeForm() {
    // Cierra el formulario
    this.isFormVisible = false;
  }

  submitForm() {

      // Si no hay un ID, significa que estamos creando un nuevo usuario
      this.egresoService.create(this.formData).subscribe(() => {
        this.closeForm();
        this.loadEgresos();
      });

  }


}
