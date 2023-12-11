import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-usuarios-page',
  templateUrl: './usuarios-page.component.html',
  styleUrls: ['./usuarios-page.component.css']
})
export class UsuariosPageComponent {
  public users: Usuario[] = []; // La lista de usuarios

  formData: any = {}; // Objeto para almacenar los datos del formulario
  formTitle: string = ''; // Título del formulario
  submitBtnLabel: string = ''; // Etiqueta del botón de envío
  isFormVisible: boolean = false; // Variable para mostrar/ocultar el formulario

  constructor(private modalService: NgbModal, private userService: UserService) { }

  ngOnInit(): void {
    // Llama al servicio para obtener la lista de usuarios al inicializar el componente
    this.loadUsers();
  }

  loadUsers() {
    // Llama al servicio para cargar la lista de usuarios
    this.userService.getUsers().subscribe(
      (data: Usuario[]) => {
        this.users = data;
        console.log('Usuarios cargados:', this.users);
      },
      (error) => {
        console.error('Error al cargar usuarios:', error);
      }
    );

    console.log(this.users);
  }

  openCreateForm() {
    // Abre el formulario de creación
    this.formData = {}; // Reinicia el objeto del formulario
    this.formTitle = 'Agregar Usuario';
    this.submitBtnLabel = 'Agregar';
    this.isFormVisible = true;
  }

  openEditForm(user: any) {
    // Abre el formulario de edición con los datos del usuario seleccionado
    this.formData = { ...user }; // Copia los datos del usuario para editar
    this.formTitle = 'Editar Usuario';
    this.submitBtnLabel = 'Guardar Cambios';
    this.isFormVisible = true;
  }

  closeForm() {
    // Cierra el formulario
    this.isFormVisible = false;
  }

  submitForm() {

      // Si no hay un ID, significa que estamos creando un nuevo usuario
      this.userService.addUser(this.formData).subscribe(() => {
        this.closeForm();
        this.loadUsers();
      });

  }


}
