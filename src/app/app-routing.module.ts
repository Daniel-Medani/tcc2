import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './components/pages/clientes/clientes.component';
import { NovoClienteComponent } from './components/pages/novo-cliente/novo-cliente.component';
import { NovoPetComponent } from './components/pages/novo-pet/novo-pet.component';
import { PetsClienteComponent } from './components/pages/pets-cliente/pets-cliente.component';
import { PetsComponent } from './components/pages/pets/pets.component';
import { EditarClienteComponent } from './components/pages/editar-cliente/editar-cliente.component';

const routes: Routes = [
  { path: 'clientes', component: ClientesComponent },
  { path: 'pets', component: PetsComponent },
  { path: 'clientes/novo', component: NovoClienteComponent },
  { path: 'clientes/:id/editar', component: EditarClienteComponent },
  { path: 'clientes/:id/pets', component: PetsClienteComponent },
  { path: 'clientes/:id/pets/novo', component: NovoPetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
