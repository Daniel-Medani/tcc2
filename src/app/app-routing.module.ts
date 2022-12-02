import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './components/pages/clientes/clientes.component';
import { NovoClienteComponent } from './components/pages/novo-cliente/novo-cliente.component';
import { NovoPetComponent } from './components/pages/novo-pet/novo-pet.component';
import { PetsClienteComponent } from './components/pages/pets-cliente/pets-cliente.component';
import { PetsComponent } from './components/pages/pets/pets.component';
import { EditarClienteComponent } from './components/pages/editar-cliente/editar-cliente.component';
import { EditarPetComponent } from './components/pages/editar-pet/editar-pet.component';
import { AgendaComponent } from './components/pages/agenda/agenda.component';
import { NovoAgendamentoComponent } from './components/pages/novo-agendamento/novo-agendamento.component';
import { UsuariosComponent } from './components/pages/usuarios/usuarios.component';
import { NovoUsuarioComponent } from './components/pages/novo-usuario/novo-usuario.component';
import { EditarUsuarioComponent } from './components/pages/editar-usuario/editar-usuario.component';
import { EditarAgendamentoComponent } from './components/pages/editar-agendamento/editar-agendamento.component';
import { LoginComponent } from './components/pages/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: AgendaComponent, canActivate: [AuthGuard] },
  {
    path: 'agendamentos',
    component: AgendaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'agendamentos/novo',
    component: NovoAgendamentoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'agendamentos/:id/editar',
    component: EditarAgendamentoComponent,
    canActivate: [AuthGuard],
  },
  { path: 'clientes', component: ClientesComponent, canActivate: [AuthGuard] },
  { path: 'pets', component: PetsComponent, canActivate: [AuthGuard] },
  {
    path: 'clientes/novo',
    component: NovoClienteComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'clientes/:id/editar',
    component: EditarClienteComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'clientes/:id/pets',
    component: PetsClienteComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'pets/:idPet/editar',
    component: EditarPetComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'clientes/:id/pets/novo',
    component: NovoPetComponent,
    canActivate: [AuthGuard],
  },
  { path: 'usuarios', component: UsuariosComponent, canActivate: [AuthGuard] },
  {
    path: 'usuarios/novo',
    component: NovoUsuarioComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'usuarios/:id/editar',
    component: EditarUsuarioComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
