import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteListComponent } from './clientes/cliente-list.component';
import { ServicioListComponent } from './servicios/servicio-list.component';
import { SkillListComponent } from './skills/skill-list.component';
import { OrdenServicioComponent } from './orden-servicio/orden-servicio.component';

export const appRoutes: Routes = [
  { path: 'clientes', component: ClienteListComponent },
  { path: 'servicios', component: ServicioListComponent },
  { path: 'skills', component: SkillListComponent },
  { path: 'orden-servicio', component: OrdenServicioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
