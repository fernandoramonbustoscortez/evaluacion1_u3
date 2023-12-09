import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { UsuariosPageComponent } from './pages/usuarios-page/usuarios-page.component';
import { EgresosPageComponent } from './pages/egresos-page/egresos-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,

  },

  {
    path: 'usuarios',
    component: UsuariosPageComponent,

  },

  {
    path: 'egresos',
    component: EgresosPageComponent,

  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
