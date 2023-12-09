import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { EgresosComponent } from './components/egresos/egresos.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { UsuariosPageComponent } from './pages/usuarios-page/usuarios-page.component';
import { EgresosPageComponent } from './pages/egresos-page/egresos-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    EgresosComponent,
    LoginPageComponent,
    NavbarComponent,
    UsuariosPageComponent,
    EgresosPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
