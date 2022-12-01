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

const routes: Routes = [
  { path: '', component: AgendaComponent },
  { path: 'agendamentos', component: AgendaComponent },
  { path: 'agendamentos/novo', component: NovoAgendamentoComponent },
  { path: 'agendamentos/:id/editar', component: EditarAgendamentoComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'pets', component: PetsComponent },
  { path: 'clientes/novo', component: NovoClienteComponent },
  { path: 'clientes/:id/editar', component: EditarClienteComponent },
  { path: 'clientes/:id/pets', component: PetsClienteComponent },
  { path: 'pets/:idPet/editar', component: EditarPetComponent },
  { path: 'clientes/:id/pets/novo', component: NovoPetComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'usuarios/novo', component: NovoUsuarioComponent },
  { path: 'usuarios/:id/editar', component: EditarUsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
