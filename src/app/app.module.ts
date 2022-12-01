import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// components import
import { AppComponent } from './app.component';
import { ClientesComponent } from './components/pages/clientes/clientes.component';
import { NovoClienteComponent } from './components/pages/novo-cliente/novo-cliente.component';
import { PetsComponent } from './components/pages/pets/pets.component';
import { NovoPetComponent } from './components/pages/novo-pet/novo-pet.component';
import { LoginComponent } from './components/pages/login/login.component';
import { UsuariosComponent } from './components/pages/usuarios/usuarios.component';
import { NovoUsuarioComponent } from './components/pages/novo-usuario/novo-usuario.component';
import { PetsClienteComponent } from './components/pages/pets-cliente/pets-cliente.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { EditarClienteComponent } from './components/pages/editar-cliente/editar-cliente.component';
import { EditarPetComponent } from './components/pages/editar-pet/editar-pet.component';
import { AgendaComponent } from './components/pages/agenda/agenda.component';
import { NovoAgendamentoComponent } from './components/pages/novo-agendamento/novo-agendamento.component';
import { EditarUsuarioComponent } from './components/pages/editar-usuario/editar-usuario.component';

// angular material import
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { EditarAgendamentoComponent } from './components/pages/editar-agendamento/editar-agendamento.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    NovoClienteComponent,
    PetsComponent,
    NovoPetComponent,
    LoginComponent,
    UsuariosComponent,
    NovoUsuarioComponent,
    SidenavComponent,
    PetsClienteComponent,
    EditarClienteComponent,
    EditarPetComponent,
    AgendaComponent,
    NovoAgendamentoComponent,
    EditarUsuarioComponent,
    EditarAgendamentoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatAutocompleteModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pt-br' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
