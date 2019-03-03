import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdenServicioComponent } from './orden-servicio.component';
import { MaterialAppModule } from '../ngmaterial.module';
import { ClientesModule } from '../clientes/clientes.module';
import { InfoComponent } from './info/info.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ResumenComponent } from './resumen/resumen.component';
import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  declarations: [OrdenServicioComponent, InfoComponent, DetalleComponent, ResumenComponent],
  imports: [
    FormsModule,
    AngularFirestoreModule,
    MaterialAppModule,
    CommonModule,
    ClientesModule
  ]
})
export class OrdenServicioModule { }
