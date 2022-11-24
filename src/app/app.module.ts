import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientesComponent } from './components/pages/clientes/clientes.component';
import { NovoClienteComponent } from './components/pages/novo-cliente/novo-cliente.component';
import { PetsComponent } from './components/pages/pets/pets.component';
import { NovoPetComponent } from './components/pages/novo-pet/novo-pet.component';
import { LoginComponent } from './components/pages/login/login.component';
import { UsuariosComponent } from './components/pages/usuarios/usuarios.component';
import { NovoUsuarioComponent } from './components/pages/novo-usuario/novo-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    NovoClienteComponent,
    PetsComponent,
    NovoPetComponent,
    LoginComponent,
    UsuariosComponent,
    NovoUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
