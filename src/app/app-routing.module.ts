import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './components/pages/clientes/clientes.component';
import { NovoClienteComponent } from './components/pages/novo-cliente/novo-cliente.component';

const routes: Routes = [
  { path: 'clientes', component: ClientesComponent },
  { path: 'clientes/novo', component: NovoClienteComponent },
  { path: 'clientes/:id/pets', component: NovoClienteComponent },
  { path: 'clientes/:id/pets/novo', component: NovoClienteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
