import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { ServicioListComponent } from './servicio/servicio-list.component';
import { ClienteComponent } from './cliente/cliente.component';
import { NameComponent } from './name/name.component';
import { ClienteListComponent } from './cliente/cliente-list.component';

export const appRoutes: Routes = [
  { path: 'first-page', component: FirstPageComponent },
  { path: 'clientes', component: ClienteListComponent },
  { path: 'name', component: NameComponent },
  { path: 'servicios', component: ServicioListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
