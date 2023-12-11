import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { ResponseApi } from '../../interfaces/response.interface';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario.interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {


  constructor(public loginService: LoginService, private router: Router) {

  }

  public correo: string = ''; // Propiedad para el campo de correo
  public contrasena: string = ''; // Propiedad para el campo de contraseña

  onSubmit() {
    // Aquí puedes manejar la lógica cuando se envía el formulario
    console.log('Correo:', this.correo);
    console.log('Contraseña:', this.contrasena);

    this.loginService.login(this.correo, this.contrasena).subscribe(
      (result: boolean | Usuario) => {
        if (typeof result === 'boolean') {
          // Resultado es un booleano, haz algo
          if (result) {
            // Éxito
            console.log('Autenticación exitosa');
          } else {
            // Fallo
            alert('Autenticación fallida');

          }
        } else {
          // Resultado es un objeto de tipo ResponseApi, haz algo
          alert("Te has logueado exitosamente!!, bienvenido " + result.nombres);
          this.router.navigate(['/usuarios']);

        }
      },
      (error) => {
        // Maneja los errores aquí
        console.error('Error en la suscripción:', error);
      }
    );


  }

  ngOnInit() {
    // Verifica si el usuario ya está autenticado al cargar el componente de inicio de sesión
    if (this.loginService.isAuthenticated()) {
      // Si ya está autenticado, redirige a otra página (por ejemplo, la página principal)
      this.router.navigate(['/usuarios']);
    }
  }

}
