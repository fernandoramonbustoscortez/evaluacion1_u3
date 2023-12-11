import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { UsuariosPageComponent } from './pages/usuarios-page/usuarios-page.component';
import { EgresosPageComponent } from './pages/egresos-page/egresos-page.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,

  },

  {
    path: 'usuarios',
    component: UsuariosPageComponent,
    canActivate: [AuthGuard] // Usa el guardia de ruta aquí

  },

  {
    path: 'egresos',
    component: EgresosPageComponent,
    canActivate: [AuthGuard] // Usa el guardia de ruta aquí

  },

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full' // Asegura que la ruta coincida completamente con la cadena vacía
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
