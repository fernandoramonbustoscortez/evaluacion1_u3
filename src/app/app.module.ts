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
import { LoginService } from './services/login.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user-service.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { EgresoService } from './services/egreso-service.service';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    EgresosComponent,
    LoginPageComponent,
    NavbarComponent,
    EgresosPageComponent,
    UsuariosPageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule, // Asegúrate de agregar HttpClientModule aquí

  ],
  providers: [LoginService,UserService, EgresoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
